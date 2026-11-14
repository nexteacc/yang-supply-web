/**
 * English wholesale tables for the US site. Copy is the approved en-US text.
 * This module stays free of client hooks so the markup is server-rendered.
 */

import { UsWholesaleComparisonTable } from "@/components/us-comparison-table";

type TableProps = {
  caption: string;
  headers: readonly string[];
  rows: readonly (readonly string[])[];
  /** Wide tables scroll inside the page instead of stretching the layout. */
  scroll: boolean;
};

function WholesaleTable({ caption, headers, rows, scroll }: TableProps) {
  return (
    <div
      className={
        scroll
          ? "@container min-w-0 max-w-full overflow-x-auto"
          : "min-w-0 max-w-full"
      }
    >
      <table
        className={`w-full border-collapse text-left text-[14px] leading-normal ${
          scroll ? "min-w-[720px]" : "table-fixed"
        }`}
      >
        <caption
          className={`caption-top mb-8 text-left text-ink heading-2 ${
            scroll ? "w-[100cqi] max-w-full" : ""
          }`}
        >
          {caption}
        </caption>
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className="border-b border-line py-3 pr-6 align-bottom font-normal text-mute last:pr-0"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, index) =>
                index === 0 ? (
                  <th
                    key={headers[index]}
                    scope="row"
                    className={`border-b border-line py-4 pr-6 align-top font-normal text-ink ${
                      scroll ? "min-w-[10rem]" : "w-[42%] sm:w-[16rem]"
                    }`}
                  >
                    {cell}
                  </th>
                ) : (
                  <td
                    key={headers[index]}
                    className="border-b border-line py-4 pr-6 align-top font-normal break-words text-ink last:pr-0"
                  >
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

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
    "Large sheets: hearts, plum blossoms, stars, round, square, oval, octagon and teardrop gems, 65 to 126 gems per sheet. Small sheets: colorful hearts, pink-and-white hearts, colorful plum blossoms, colorful stars",
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
    "Large: 2 in; small: 1 in",
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
    <WholesaleTable
      caption="Yang Supply wholesale product specifications"
      headers={productSpecHeaders}
      rows={productSpecRows}
      scroll
    />
  );
}

export function UsWholesaleTermsTable() {
  return (
    <WholesaleTable
      caption="Yang Supply US wholesale terms"
      headers={wholesaleTermHeaders}
      rows={wholesaleTermRows}
      scroll={false}
    />
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
