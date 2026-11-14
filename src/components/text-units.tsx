import { Fragment, type ReactNode } from "react";

/**
 * Phrases that must stay on one line. Longest first so a short name
 * does not match inside a longer one.
 */
const phrases = [
  "Acrylic Flower Vase Frames",
  "Acrylic Flower Vase Frame",
  "Italian Charm Bracelets",
  "colorful plum blossoms",
  "pink-and-white hearts",
  "cherry blossom pink",
  "Rhinestone Stickers",
  "SWIFT bank transfer",
  "Klarna Installments",
  "in-store displays",
  "American Express",
  "US bank transfer",
  "stainless steel",
  "colorful hearts",
  "colorful stars",
  "plum blossoms",
  "teardrop gems",
  "fresh flowers",
  "bubble wrap",
  "gift cards",
  "team badges",
  "Resin Starfish",
  "Acrylic Petals",
  "$500 per order",
  "gems per sheet",
  "bank transfer",
  "Italian charm",
  "business days",
  "pink-and-white",
  "light purple",
  "Stripe Link",
  "$500 minimum",
  "navy blue",
  "light blue",
  "Apple Pay",
  "Google Pay",
  "Faire Pay",
  "sky blue",
  "USDT/USDC",
  "Net 60",
  "PayPal",
].sort((a, b) => b.length - a.length);

const unitSource =
  String.raw`\babout\s+\d+\s+business\s+days\b|\babout\s+\d+(?:\.\d+)?\s+days\b|\d+(?:\.\d+)?\s×\s\d+(?:\.\d+)?\s(?:in|mm)\b|\d+\s+business\s+days\b|\$\d[\d,]*|\(?\d+(?:\.\d+)?\s+(?:in|mm|days)\b\)?|\b[A-Za-z0-9]+(?:-[A-Za-z0-9]+)+\b`;

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const tokenSource = `${phrases.map(escapeRegExp).join("|")}|${unitSource}`;

const pairedSizes = /^(Large: .+); (Small: .+)$/;

function keepPieces(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(new RegExp(tokenSource, "g"))) {
    const start = match.index ?? 0;
    if (start > last) nodes.push(text.slice(last, start));
    nodes.push(
      <span key={start} data-keep="">
        {match[0]}
      </span>,
    );
    last = start + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

/** Number+unit values, and multi-word names, stay on one line. */
export function keepText(text: string): ReactNode {
  if (text === "") return null;
  const paired = pairedSizes.exec(text);
  if (!paired) return keepPieces(text);
  return (
    <Fragment>
      <span data-keep="">{keepPieces(paired[1])}</span>
      <br />
      <span data-keep="">{keepPieces(paired[2])}</span>
    </Fragment>
  );
}

/**
 * Inline list. Each item is unbreakable. The separator (comma + space)
 * is the only place a line may break.
 */
export function InlineList({
  items,
  separator = ", ",
}: {
  items: readonly ReactNode[];
  separator?: string;
}) {
  return items.map((item, index) => (
    <Fragment key={index}>
      {index > 0 ? separator : null}
      <span data-keep="">{item}</span>
    </Fragment>
  ));
}
