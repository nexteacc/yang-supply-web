"use client";

import { useLayoutEffect } from "react";

declare global {
  interface Window {
    __fitProse?: () => void;
  }
}

type Word = {
  top: number;
  right: number;
  left: number;
  node: Text;
};

function wordsOf(el: HTMLElement): Word[] {
  const words: Word[] = [];
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    const text = node as Text;
    const re = /\S+/g;
    let match: RegExpExecArray | null;
    while ((match = re.exec(text.textContent ?? ""))) {
      if (!match[0].trim()) continue;
      const range = document.createRange();
      range.setStart(text, match.index);
      range.setEnd(text, match.index + match[0].length);
      const rects = range.getClientRects();
      if (!rects.length) continue;
      words.push({
        top: rects[0].top,
        right: rects[rects.length - 1].right,
        left: rects[0].left,
        node: text,
      });
    }
    node = walker.nextNode();
  }
  return words;
}

function brokenByBr(from: Text, to: Text) {
  const range = document.createRange();
  range.setStartAfter(from);
  range.setEndBefore(to);
  return Boolean(range.cloneContents().querySelector("br"));
}

/** True when a block has a short last line, or a gap wider than 25%. */
function lineIssue(el: HTMLElement) {
  const words = wordsOf(el);
  if (words.length < 2) return false;
  const lines: Word[][] = [];
  for (const word of words) {
    const last = lines[lines.length - 1];
    if (last && Math.abs(last[0].top - word.top) < 5) last.push(word);
    else lines.push([word]);
  }
  if (lines.length < 2) return false;
  const onlyBreaks = lines.slice(1).every((line, index) =>
    brokenByBr(lines[index][lines[index].length - 1].node, line[0].node),
  );
  if (onlyBreaks) return false;
  const style = getComputedStyle(el);
  const box = el.getBoundingClientRect();
  const padLeft = parseFloat(style.paddingLeft) || 0;
  const padRight = parseFloat(style.paddingRight) || 0;
  const contentRight = box.right - padRight;
  const contentWidth = contentRight - (box.left + padLeft);
  if (contentWidth <= 0) return false;
  const widths = lines.map((line) => line[line.length - 1].right - line[0].left);
  const widest = Math.max(...widths);
  const last = lines[lines.length - 1];
  if (last.length === 1 || widths[widths.length - 1] < 0.35 * widest) return true;
  const probe = document.createElement("span");
  probe.style.cssText = `position:absolute;visibility:hidden;white-space:pre;font:${style.font}`;
  probe.textContent = " ";
  document.body.appendChild(probe);
  const space = probe.getBoundingClientRect().width || 4;
  probe.remove();
  for (let index = 0; index < lines.length - 1; index += 1) {
    const prev = lines[index][lines[index].length - 1];
    const next = lines[index + 1][0];
    if (brokenByBr(prev.node, next.node)) continue;
    const keep = next.node.parentElement?.closest("[data-keep]");
    const nextWidth =
      keep && el.contains(keep) ? keep.getBoundingClientRect().width : next.right - next.left;
    const leftover = contentRight - prev.right;
    if (leftover > contentWidth * 0.25 && space + nextWidth <= leftover + 0.5) return true;
  }
  return false;
}

function fitElement(el: HTMLElement) {
  if (el.closest("nav, header")) return;
  if (el.offsetParent === null) return;
  const display = getComputedStyle(el).display;
  if (display === "table-cell" || display === "table-row" || display === "inline") return;
  el.style.maxWidth = "";
  if (!lineIssue(el)) return;
  const start = el.getBoundingClientRect().width;
  let min = 160;
  el.querySelectorAll<HTMLElement>("[data-keep]").forEach((keep) => {
    min = Math.max(min, keep.getBoundingClientRect().width + 8);
  });
  for (let width = Math.floor(start) - 2; width >= min; width -= 4) {
    el.style.maxWidth = `${width}px`;
    if (!lineIssue(el)) return;
  }
  el.style.maxWidth = "";
}

function fitTargets() {
  const seen = new Set<HTMLElement>();
  const visit = (el: Element) => {
    if (!(el instanceof HTMLElement) || seen.has(el)) return;
    seen.add(el);
    fitElement(el);
  };
  document.querySelectorAll(".measure").forEach((el) => {
    if (el.matches("ul, ol")) el.querySelectorAll(":scope > li").forEach(visit);
    else if (el.matches("dl")) el.querySelectorAll("dd").forEach(visit);
    else visit(el);
  });
  document
    .querySelectorAll(
      ".us-spec-table td, .us-terms-table td, .us-compare-table td, th[scope='row']",
    )
    .forEach(visit);
}

export function FitProse() {
  useLayoutEffect(() => {
    const run = () => fitTargets();
    window.__fitProse = run;
    run();
    document.fonts.ready.then(run).catch(() => undefined);
    const onToggle = (event: Event) => {
      const target = event.target;
      if (target instanceof HTMLDetailsElement && target.open) run();
    };
    window.addEventListener("resize", run);
    document.addEventListener("toggle", onToggle, true);
    return () => {
      window.removeEventListener("resize", run);
      document.removeEventListener("toggle", onToggle, true);
    };
  }, []);
  return null;
}
