import { Fragment, type ReactNode } from "react";

/**
 * Keep a number with its unit, and a dimension expression, on one line.
 * The source strings stay unchanged; only the rendered spans differ.
 */
const measured =
  /(\babout\s+\d+\s+business\s+days\b|\babout\s+\d+(?:\.\d+)?\s+days\b|\d+(?:\.\d+)?\s×\s\d+(?:\.\d+)?\s(?:in|mm)\b|\d+\s+business\s+days\b|\$\d[\d,]*|\(?\d+(?:\.\d+)?\s+(?:in|mm|days)\b\)?|(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4})/g;

const pairedSizes = /^Large: (.+); small: (.+)$/;

function renderPieces(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(new RegExp(measured.source, "g"))) {
    const start = match.index ?? 0;
    if (start > last) nodes.push(text.slice(last, start));
    nodes.push(
      <span key={start} className="us-keep">
        {match[0]}
      </span>,
    );
    last = start + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function renderMeasuredText(text: string): ReactNode {
  if (text === "") return null;
  const paired = pairedSizes.exec(text);
  if (!paired) return renderPieces(text);
  return (
    <Fragment>
      <span className="us-keep">{renderPieces(`Large: ${paired[1]}`)}</span>
      <br />
      <span className="us-keep">{renderPieces(`small: ${paired[2]}`)}</span>
    </Fragment>
  );
}
