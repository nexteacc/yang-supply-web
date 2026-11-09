import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

import {
  INDEXNOW_ENDPOINT,
  PRODUCTION_HOST,
  PRODUCTION_ORIGIN,
  STAMP_FILE,
  assertProductionReady,
  assertProductionUrl,
  assertSubmissionContext,
  buildPayload,
  loadIndexNowKey,
  parseSitemapLocs,
  repoRoot,
  runSubmission,
  urlsToSubmit,
  writeDeployStamp,
} from "./indexnow.mjs";

const KEY = "abcdef12abcdef12";

function textResponse(body, status = 200, type = "text/plain; charset=utf-8") {
  return new Response(body, {
    status,
    headers: { "content-type": type },
  });
}

function publicDirWithKey(key = KEY) {
  const dir = mkdtempSync(join(tmpdir(), "indexnow-"));
  writeFileSync(join(dir, `${key}.txt`), key);
  return dir;
}

test("committed key file is the key itself", () => {
  const key = loadIndexNowKey(join(repoRoot(), "public"));
  assert.match(key, /^[a-zA-Z0-9-]{8,128}$/);
  assert.doesNotMatch(key, /example|changeme|placeholder|your-key/i);
  const body = readFileSync(join(repoRoot(), "public", `${key}.txt`));
  assert.deepEqual(body, Buffer.from(key, "utf8"));
});

test("sitemap locs are the only URLs taken from the document", () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset>
      <url>
        <loc>https://www.yangsupply.com/</loc>
        <xhtml:link rel="alternate" href="https://www.yangsupply.com/zh"/>
      </url>
      <url><loc>https://www.yangsupply.com/en-us</loc></url>
      <url><loc>https://www.yangsupply.com/hop-tac?x=1&amp;y=2</loc></url>
    </urlset>`;
  assert.deepEqual(parseSitemapLocs(xml), [
    "https://www.yangsupply.com/",
    "https://www.yangsupply.com/en-us",
    "https://www.yangsupply.com/hop-tac?x=1&y=2",
  ]);
});

test("payload uses the production host, key, keyLocation, and the given URLs", () => {
  const urls = ["https://www.yangsupply.com/", "https://www.yangsupply.com/zh"];
  assert.deepEqual(buildPayload(KEY, urls), {
    host: PRODUCTION_HOST,
    key: KEY,
    keyLocation: `${PRODUCTION_ORIGIN}/${KEY}.txt`,
    urlList: urls,
  });
});

test("preview hosts and apex URLs are rejected", () => {
  assert.throws(() =>
    assertProductionUrl("https://yang-supply.vercel.app/"),
  );
  assert.throws(() => assertProductionUrl("https://yangsupply.com/"));
  assert.throws(() => assertProductionUrl("http://www.yangsupply.com/"));
  assert.equal(
    assertProductionUrl("https://www.yangsupply.com/en-us"),
    "https://www.yangsupply.com/en-us",
  );
});

test("removed sitemap URLs are submitted with the current list", () => {
  assert.deepEqual(
    urlsToSubmit({
      sitemapUrls: [
        "https://www.yangsupply.com/",
        "https://www.yangsupply.com/zh",
      ],
      previousUrls: [
        "https://www.yangsupply.com/",
        "https://www.yangsupply.com/old-page",
      ],
      explicitUrls: ["https://www.yangsupply.com/zh"],
    }),
    [
      "https://www.yangsupply.com/",
      "https://www.yangsupply.com/zh",
      "https://www.yangsupply.com/old-page",
    ],
  );
});

test("pull requests and Vercel previews are refused before any request", () => {
  assert.throws(
    () => assertSubmissionContext({ GITHUB_EVENT_NAME: "pull_request" }),
    /pull request/,
  );
  assert.throws(
    () => assertSubmissionContext({ VERCEL_ENV: "preview" }),
    /preview/,
  );
  assert.doesNotThrow(() =>
    assertSubmissionContext({ VERCEL_ENV: "production", GITHUB_EVENT_NAME: "push" }),
  );
});

test("a mismatched live key does not reach the IndexNow API", async () => {
  const calls = [];
  const fetchImpl = async (url, init) => {
    calls.push({ url: String(url), method: init?.method ?? "GET" });
    return textResponse("not-the-key");
  };
  await assert.rejects(
    () =>
      assertProductionReady({
        key: KEY,
        fetchImpl,
        timeoutMs: 0,
      }),
    /Not submitting/,
  );
  assert.deepEqual(
    calls.map((call) => call.method),
    ["GET"],
  );
  assert.equal(calls.some((call) => call.url === INDEXNOW_ENDPOINT), false);
});

test("submission waits for the live key and posts only sitemap URLs", async () => {
  const publicDir = publicDirWithKey();
  const posts = [];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset>
      <url><loc>https://www.yangsupply.com/</loc></url>
      <url><loc>https://www.yangsupply.com/en-us</loc></url>
      <url><loc>https://www.yangsupply.com/zh</loc></url>
      <xhtml:link href="https://example.com/not-in-sitemap"/>
    </urlset>`;
  try {
    const result = await runSubmission({
      publicDir,
      sitemap: true,
      previousFile: join(publicDir, "missing-previous.txt"),
      savePreviousFile: join(publicDir, "saved.txt"),
      env: {},
      fetchImpl: async (url, init) => {
        const target = String(url);
        if (init?.method === "POST") {
          posts.push(JSON.parse(init.body));
          return textResponse("", 202);
        }
        if (target.endsWith(`/${KEY}.txt`)) return textResponse(KEY);
        if (target.endsWith("/sitemap.xml")) {
          return textResponse(sitemap, 200, "application/xml");
        }
        return textResponse("missing", 404);
      },
    });
    assert.equal(result.dryRun, false);
    assert.equal(result.status, 202);
    assert.deepEqual(posts, [
      {
        host: PRODUCTION_HOST,
        key: KEY,
        keyLocation: `${PRODUCTION_ORIGIN}/${KEY}.txt`,
        urlList: [
          "https://www.yangsupply.com/",
          "https://www.yangsupply.com/en-us",
          "https://www.yangsupply.com/zh",
        ],
      },
    ]);
    assert.equal(
      readFileSync(join(publicDir, "saved.txt"), "utf8"),
      "https://www.yangsupply.com/\nhttps://www.yangsupply.com/en-us\nhttps://www.yangsupply.com/zh\n",
    );
  } finally {
    rmSync(publicDir, { recursive: true, force: true });
  }
});

test("GitHub Actions does not post before this deploy stamp is live", async () => {
  const publicDir = publicDirWithKey();
  const posts = [];
  try {
    await assert.rejects(
      () =>
        runSubmission({
          publicDir,
          sitemap: true,
          env: { GITHUB_ACTIONS: "true", GITHUB_SHA: "a".repeat(40) },
          timeoutMs: 0,
          fetchImpl: async (url, init) => {
            if (init?.method === "POST") posts.push(String(url));
            if (String(url).endsWith(`/${KEY}.txt`)) return textResponse(KEY);
            return textResponse("old-deploy", 200);
          },
        }),
      /Not submitting/,
    );
    assert.deepEqual(posts, []);
  } finally {
    rmSync(publicDir, { recursive: true, force: true });
  }
});

test("dry run does not post", async () => {
  const publicDir = publicDirWithKey();
  const methods = [];
  try {
    const result = await runSubmission({
      publicDir,
      explicitUrls: ["https://www.yangsupply.com/san-pham"],
      dryRun: true,
      env: {},
      fetchImpl: async (url, init) => {
        methods.push(init?.method ?? "GET");
        if (String(url).endsWith(`/${KEY}.txt`)) return textResponse(KEY);
        return textResponse("", 404);
      },
    });
    assert.equal(result.dryRun, true);
    assert.deepEqual(methods, ["GET"]);
  } finally {
    rmSync(publicDir, { recursive: true, force: true });
  }
});

test("deploy stamp is a commit SHA or the local development marker", () => {
  const dir = mkdtempSync(join(tmpdir(), "indexnow-stamp-"));
  try {
    writeDeployStamp(dir, { VERCEL_GIT_COMMIT_SHA: "b".repeat(40) });
    assert.equal(readFileSync(join(dir, STAMP_FILE), "utf8"), "b".repeat(40));
    assert.throws(() => writeDeployStamp(dir, { VERCEL_GIT_COMMIT_SHA: "b".repeat(40) + "\n" }));
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
