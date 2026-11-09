/**
 * IndexNow submission for https://www.yangsupply.com.
 *
 * The key file in public/ is the source of truth. This script never posts to
 * IndexNow until that exact file is being served at the production key URL.
 * Pull requests, Vercel previews, and a missing production key all stop here.
 *
 * Protocol: https://www.indexnow.org/documentation
 * One POST to https://api.indexnow.org/indexnow is shared with the other
 * participating engines.
 */

import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export const PRODUCTION_ORIGIN = "https://www.yangsupply.com";
export const PRODUCTION_HOST = "www.yangsupply.com";
export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
export const SITEMAP_URL = `${PRODUCTION_ORIGIN}/sitemap.xml`;
export const STAMP_FILE = "indexnow-stamp.txt";
export const STAMP_URL = `${PRODUCTION_ORIGIN}/${STAMP_FILE}`;
export const MAX_URLS_PER_REQUEST = 10_000;
export const DEPLOY_WAIT_MS = 15 * 60 * 1000;

const KEY_FILE_NAME = /^([A-Za-z0-9-]{8,128})\.txt$/;
const LOC_PATTERN = /<loc>([^<]*)<\/loc>/gi;

export function keyLocation(key) {
  return `${PRODUCTION_ORIGIN}/${key}.txt`;
}

export function repoRoot() {
  return fileURLToPath(new URL("..", import.meta.url));
}

export function assertSubmissionContext(env = process.env) {
  const event = env.GITHUB_EVENT_NAME ?? "";
  const ref = env.GITHUB_REF ?? "";
  if (
    event === "pull_request" ||
    event === "pull_request_target" ||
    ref.startsWith("refs/pull/")
  ) {
    throw new Error("Refusing to submit IndexNow from a pull request.");
  }
  if (env.VERCEL_ENV && env.VERCEL_ENV !== "production") {
    throw new Error(
      `Refusing to submit IndexNow from Vercel ${env.VERCEL_ENV}.`,
    );
  }
}

export function loadIndexNowKey(publicDir) {
  const names = readdirSync(publicDir, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name);
  const keys = [];
  for (const name of names) {
    const match = KEY_FILE_NAME.exec(name);
    if (!match) continue;
    const key = match[1];
    const body = readFileSync(join(publicDir, name));
    if (Buffer.compare(body, Buffer.from(key, "utf8")) !== 0) continue;
    keys.push(key);
  }
  if (keys.length !== 1) {
    throw new Error(
      `Expected exactly one IndexNow key file in ${publicDir}, found ${keys.length}.`,
    );
  }
  return keys[0];
}

export function writeDeployStamp(publicDir, env = process.env) {
  const sha = env.VERCEL_GIT_COMMIT_SHA || env.GITHUB_SHA || "development";
  if (!/^(?:[0-9a-f]{40}|development)$/.test(sha)) {
    throw new Error("Refusing to write an unexpected IndexNow deploy stamp.");
  }
  writeFileSync(join(publicDir, STAMP_FILE), sha);
}

export function decodeXml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'");
}

/** URLs inside <loc> only. Alternate-link hrefs in the same document are ignored. */
export function parseSitemapLocs(xml) {
  const urls = [];
  for (const match of xml.matchAll(LOC_PATTERN)) {
    const loc = decodeXml(match[1].trim());
    if (loc) urls.push(loc);
  }
  return urls;
}

export function assertProductionUrl(value) {
  if (typeof value !== "string" || value.trim() !== value || value.includes(" ")) {
    throw new Error(`Refusing malformed IndexNow URL: ${value}`);
  }
  let url;
  try {
    url = new URL(value);
  } catch {
    throw new Error(`Refusing malformed IndexNow URL: ${value}`);
  }
  if (url.protocol !== "https:" || url.host !== PRODUCTION_HOST) {
    throw new Error(`Refusing non-production IndexNow URL: ${value}`);
  }
  if (url.username || url.password) {
    throw new Error(`Refusing IndexNow URL with credentials: ${value}`);
  }
  return value;
}

export function dedupe(urls) {
  const seen = new Set();
  const unique = [];
  for (const url of urls) {
    if (seen.has(url)) continue;
    seen.add(url);
    unique.push(url);
  }
  return unique;
}

/**
 * Current sitemap URLs cover pages that were added or updated.
 * URLs present last time but missing now are removals and are submitted too.
 */
export function urlsToSubmit({ sitemapUrls = [], previousUrls = [], explicitUrls = [] }) {
  const current = sitemapUrls.map(assertProductionUrl);
  const currentSet = new Set(current);
  const removed = previousUrls
    .map(assertProductionUrl)
    .filter((url) => !currentSet.has(url));
  return dedupe([
    ...current,
    ...removed,
    ...explicitUrls.map(assertProductionUrl),
  ]);
}

export function buildPayload(key, urlList) {
  if (!KEY_FILE_NAME.test(`${key}.txt`)) {
    throw new Error("IndexNow key does not match the protocol character rules.");
  }
  const urls = urlList.map(assertProductionUrl);
  if (urls.length === 0) throw new Error("No URLs to submit.");
  if (urls.length > MAX_URLS_PER_REQUEST) {
    throw new Error(`IndexNow accepts at most ${MAX_URLS_PER_REQUEST} URLs per request.`);
  }
  return {
    host: PRODUCTION_HOST,
    key,
    keyLocation: keyLocation(key),
    urlList: urls,
  };
}

export function readUrlList(file) {
  if (!existsSync(file)) return [];
  return readFileSync(file, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

export function writeUrlList(file, urls) {
  mkdirSync(dirname(file), { recursive: true });
  const body = urls.length === 0 ? "" : `${urls.join("\n")}\n`;
  writeFileSync(file, body);
}

async function readPublicBody(fetchImpl, url) {
  try {
    const response = await fetchImpl(url, {
      redirect: "manual",
      cache: "no-store",
      headers: {
        Accept: "text/plain,application/xml,text/xml",
        "Cache-Control": "no-cache",
      },
    });
    const body = await response.text();
    const type = response.headers.get("content-type") ?? "";
    if (response.status !== 200) {
      return { ok: false, body: "", summary: `HTTP ${response.status}` };
    }
    if (type.includes("text/html")) {
      return { ok: false, body: "", summary: "HTML response" };
    }
    return { ok: true, body, summary: "HTTP 200" };
  } catch (error) {
    const message = error instanceof Error ? error.message : "fetch failed";
    return { ok: false, body: "", summary: message };
  }
}

export async function assertProductionReady({
  key,
  gitSha,
  fetchImpl = globalThis.fetch,
  timeoutMs = 0,
  intervalMs = 10_000,
  now = Date.now,
  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
  log = () => {},
}) {
  const deadline = now() + timeoutMs;
  const keyUrl = keyLocation(key);
  let last = "not checked";
  for (;;) {
    const keyState = await readPublicBody(fetchImpl, keyUrl);
    const stampState = gitSha
      ? await readPublicBody(fetchImpl, STAMP_URL)
      : { ok: true, body: "", summary: "not required" };
    const keyMatches = keyState.ok && keyState.body === key;
    const stampMatches = !gitSha || (stampState.ok && stampState.body === gitSha);
    if (keyMatches && stampMatches) return { keyLocation: keyUrl };
    last = `key file ${keyState.summary}; deploy stamp ${stampState.summary}`;
    if (now() >= deadline) break;
    log(`Waiting until the production IndexNow key is live (${last}).`);
    const remaining = deadline - now();
    await sleep(Math.min(intervalMs, Math.max(remaining, 0)));
  }
  throw new Error(
    `Production IndexNow key is not live yet (${last}). Not submitting.`,
  );
}

export async function fetchSitemapUrls(fetchImpl = globalThis.fetch) {
  const state = await readPublicBody(fetchImpl, SITEMAP_URL);
  if (!state.ok) {
    throw new Error(
      `Could not read ${SITEMAP_URL} (${state.summary}). Not submitting.`,
    );
  }
  const urls = dedupe(parseSitemapLocs(state.body).map(assertProductionUrl));
  if (urls.length === 0) {
    throw new Error("Production sitemap listed no URLs. Not submitting.");
  }
  return urls;
}

export async function submitIndexNow({
  key,
  urlList,
  dryRun = false,
  fetchImpl = globalThis.fetch,
  endpoint = INDEXNOW_ENDPOINT,
}) {
  const batches = [];
  for (let index = 0; index < urlList.length; index += MAX_URLS_PER_REQUEST) {
    batches.push(urlList.slice(index, index + MAX_URLS_PER_REQUEST));
  }
  const payloads = batches.map((batch) => buildPayload(key, batch));
  if (dryRun) return { dryRun: true, status: null, payloads };

  const live = await readPublicBody(fetchImpl, keyLocation(key));
  if (!live.ok || live.body !== key) {
    throw new Error(
      "Production IndexNow key file did not match immediately before submission. Not submitting.",
    );
  }

  const results = [];
  for (const payload of payloads) {
    const response = await fetchImpl(endpoint, {
      method: "POST",
      redirect: "manual",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });
    const body = await response.text();
    if (response.status !== 200 && response.status !== 202) {
      throw new Error(
        `IndexNow responded HTTP ${response.status}: ${body.slice(0, 500)}`,
      );
    }
    results.push({ status: response.status, body });
  }
  return {
    dryRun: false,
    status: results.at(-1)?.status ?? null,
    payloads,
    results,
  };
}

export async function runSubmission({
  publicDir,
  sitemap = false,
  explicitUrls = [],
  previousFile,
  savePreviousFile,
  dryRun = false,
  env = process.env,
  fetchImpl = globalThis.fetch,
  timeoutMs,
  intervalMs,
  now,
  sleep,
  log = console.log,
}) {
  assertSubmissionContext(env);
  const key = loadIndexNowKey(publicDir);
  const gitSha = env.GITHUB_ACTIONS === "true" ? env.GITHUB_SHA : undefined;
  if (env.GITHUB_ACTIONS === "true" && !/^[0-9a-f]{40}$/.test(gitSha ?? "")) {
    throw new Error("Refusing to submit IndexNow from GitHub Actions without a commit SHA.");
  }
  await assertProductionReady({
    key,
    gitSha,
    fetchImpl,
    timeoutMs: timeoutMs ?? (gitSha ? DEPLOY_WAIT_MS : 0),
    intervalMs,
    now,
    sleep,
    log,
  });

  const sitemapUrls = sitemap ? await fetchSitemapUrls(fetchImpl) : [];
  const previousUrls =
    sitemap && previousFile ? readUrlList(previousFile) : [];
  const urlList = urlsToSubmit({
    sitemapUrls,
    previousUrls,
    explicitUrls,
  });
  const result = await submitIndexNow({ key, urlList, dryRun, fetchImpl });
  if (savePreviousFile && sitemap && !dryRun) {
    writeUrlList(savePreviousFile, sitemapUrls);
  }
  return { ...result, urlList, keyLocation: keyLocation(key) };
}

export function parseArgs(argv) {
  const options = {
    writeStamp: false,
    sitemap: false,
    dryRun: false,
    urls: [],
    previous: undefined,
    savePrevious: undefined,
  };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--write-stamp") options.writeStamp = true;
    else if (arg === "--sitemap") options.sitemap = true;
    else if (arg === "--dry-run") options.dryRun = true;
    else if (arg === "--url") {
      const value = argv[index + 1];
      if (!value) throw new Error("--url requires a URL.");
      options.urls.push(value);
      index += 1;
    } else if (arg === "--previous") {
      const value = argv[index + 1];
      if (!value) throw new Error("--previous requires a file path.");
      options.previous = value;
      index += 1;
    } else if (arg === "--save-previous") {
      const value = argv[index + 1];
      if (!value) throw new Error("--save-previous requires a file path.");
      options.savePrevious = value;
      index += 1;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }
  if (!options.writeStamp && !options.sitemap && options.urls.length === 0) {
    options.sitemap = true;
  }
  return options;
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const publicDir = join(repoRoot(), "public");
  if (options.writeStamp) {
    writeDeployStamp(publicDir);
    return;
  }
  const result = await runSubmission({
    publicDir,
    sitemap: options.sitemap,
    explicitUrls: options.urls,
    previousFile: options.previous,
    savePreviousFile: options.savePrevious,
    dryRun: options.dryRun,
  });
  console.log(
    JSON.stringify({
      dryRun: result.dryRun,
      status: result.status,
      count: result.urlList.length,
      keyLocation: result.keyLocation,
    }),
  );
}

const invokedDirectly =
  process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;

if (invokedDirectly) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
