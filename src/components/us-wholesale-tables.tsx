/**
 * English wholesale tables for the US site. Copy is the approved en-US text.
 * This module stays free of client hooks so the markup is server-rendered.
 */

import { UsWholesaleComparisonTable } from "@/components/us-comparison-table";
import { renderMeasuredText } from "@/components/us-table-text";

const productSpecHeaders = [
  "Product",
  "Size (inches)",
  "Colors / designs",
  "Notes",
] as const;

const productSpecRows = [
  [
    "Acrylic Petals",
    "1.8 × 1.6 in lily petal, 0.08 in hole",
    "9 colors: purple, yellow, green, blue, pink, cherry blossom pink, red, white, clear",
    "Sold by the pack. Pair with our Acrylic Flower Vase Frames.",
  ],
  [
    "Rhinestone Stickers",
    "Large sheets: 3 × 5.1 in",
    "Large sheets: hearts, plum blossoms, stars, round, square, oval, octagon and teardrop gems, in designs with 126, 96, 90, 88, 80 or 65 gems per sheet, among others. Small sheets: colorful hearts, pink-and-white hearts, colorful plum blossoms, colorful stars",
    "Sold by the sheet. Each gem has its own adhesive backing.",
  ],
  [
    "Acrylic Flower Vase Frames",
    "7.1 × 5.9 in",
    "Gray, sky blue, pink, clear",
    "Holds water for fresh flowers. Shipped in bubble wrap. Pair with our Acrylic Petals.",
  ],
  [
    "Resin Starfish",
    "Large: 2 in; Small: 1 in",
    "Ivory, light blue, light purple, navy blue, pink, white",
    "",
  ],
  [
    "Italian Charm Bracelets",
    "Standard 0.35 in (9 mm) link width",
    "Mixed designs (2,000+: letters, words, flowers and fruit, flags, team badges), Christmas, ocean, hearts",
    "Press-fit links in 304 stainless steel, plated or enamel finish. Add or remove links as needed.",
  ],
] as const;

const wholesaleTermHeaders = ["Term", "Details"] as const;

const wholesaleTermRows = [
  ["Minimum order", "$500 per order"],
  ["Mix and match", "Mix designs and colors in one order"],
  ["Payment", "100% of the order total before shipment"],
  ["Payment methods", "PayPal, SWIFT bank transfer, USDT/USDC"],
  [
    "Lead time",
    "Small orders ship in about 3 business days; large or custom orders take about 14 days. Transit time is extra.",
  ],
  ["Samples", "Available at your cost"],
  ["Quote validity", "7 days"],
  ["Shipping cost", "Quoted separately from the product price"],
] as const;

export function UsProductSpecTable() {
  return (
    <div className="us-card-scroll">
      <table className="us-spec-table">
        <caption className="heading-2 text-ink">
          Yang Supply wholesale product specifications
        </caption>
        <colgroup>
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            {productSpecHeaders.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {productSpecRows.map((row) => (
            <tr key={row[0]}>
              <th scope="row">{row[0]}</th>
              {row.slice(1).map((cell, index) => (
                <td key={productSpecHeaders[index + 1]} data-label={productSpecHeaders[index + 1]}>
                  {renderMeasuredText(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function UsWholesaleTermsTable() {
  return (
    <table className="us-terms-table">
      <caption className="heading-2 text-ink">Yang Supply US wholesale terms</caption>
      <colgroup>
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          {wholesaleTermHeaders.map((header) => (
            <th key={header} scope="col">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {wholesaleTermRows.map((row) => (
          <tr key={row[0]}>
            <th scope="row">{row[0]}</th>
            <td>{renderMeasuredText(row[1])}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function UsCooperationTables() {
  return (
    <div className="flex min-w-0 max-w-full flex-col gap-12 md:gap-20">
      <UsWholesaleTermsTable />
      <UsWholesaleComparisonTable />
    </div>
  );
}
