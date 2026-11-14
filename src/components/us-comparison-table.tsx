/**
 * US cooperation comparison table. English copy only.
 * Source links stay visible and open in a new tab.
 */

import { Fragment } from "react";
import { renderMeasuredText } from "@/components/us-table-text";

type SourceLink = { label: string; href: string };
type CellPart = string | SourceLink;

const faireRetailerTerms = "https://www.faire.com/support/articles/18525251461915";
const faireOrderMinimums = "https://www.faire.com/support/articles/360016302912";
const faireCheckout = "https://www.faire.com/support/articles/30453332777883";
const faireSixtyDayTerms = "https://www.faire.com/support/articles/360016658851";
const faireRetailerPayments = "https://www.faire.com/support/articles/30874207730331";
const etsyProcessingTimes =
  "https://help.etsy.com/hc/en-us/articles/115015588087-How-to-Set-Processing-Times-Processing-Profiles-and-Ship-By-Dates";
const etsyPaymentMethods =
  "https://help.etsy.com/hc/en-us/articles/360026831353-What-Payment-Methods-Can-I-Use-to-Check-Out-on-Etsy";
const etsyWholesaleUpdate =
  "https://www.etsy.com/seller-handbook/article/319339570254";

const headers = ["", "Yang Supply", "Faire", "Etsy"] as const;

const rows: readonly {
  label: string;
  cells: readonly (readonly CellPart[])[];
}[] = [
  {
    label: "Minimum order",
    cells: [
      ["$500 per order"],
      [
        "Set by each brand in US dollars; a brand can set one minimum for first orders and another for reorders (",
        { label: "Faire retailer terms 5.2", href: faireRetailerTerms },
        ", ",
        { label: "Faire order minimums", href: faireOrderMinimums },
        ")",
      ],
      [
        "Each shop sets its own, for example with minimum-order coupons or private listings (",
        { label: "An Update on Etsy Wholesale", href: etsyWholesaleUpdate },
        ")",
      ],
    ],
  },
  {
    label: "Mixing designs",
    cells: [
      ["Mix designs and colors in one order toward the $500 minimum"],
      [
        "Combine items from one brand to reach that brand's minimum; each brand in the cart has its own minimum (",
        { label: "Faire order minimums", href: faireOrderMinimums },
        ", ",
        { label: "Faire checkout", href: faireCheckout },
        ")",
      ],
      [
        "Each shop sets its own wholesale terms (",
        { label: "An Update on Etsy Wholesale", href: etsyWholesaleUpdate },
        ")",
      ],
    ],
  },
  {
    label: "When you pay",
    cells: [
      ["100% of the order total before shipment"],
      [
        "Net 60 for approved retailers, or payment when the order ships (",
        { label: "Faire 60-day terms", href: faireSixtyDayTerms },
        ", ",
        { label: "Faire retailer terms 6.3", href: faireRetailerTerms },
        ")",
      ],
      [
        "At checkout; Klarna Installments is available on eligible US orders (",
        { label: "Etsy payment methods", href: etsyPaymentMethods },
        ")",
      ],
    ],
  },
  {
    label: "Payment methods",
    cells: [
      ["PayPal, SWIFT bank transfer, USDT/USDC"],
      [
        "Visa, Mastercard and American Express cards, US bank transfer, and Faire Pay for pre-approved retailers (",
        { label: "Faire retailer payments", href: faireRetailerPayments },
        ")",
      ],
      [
        "Cards, bank account through Stripe Link, PayPal, Apple Pay, Google Pay, Etsy gift cards and credits, and Klarna Installments on eligible orders; each seller picks which methods to accept (",
        { label: "Etsy payment methods", href: etsyPaymentMethods },
        ")",
      ],
    ],
  },
];

function isSourceLink(part: CellPart): part is SourceLink {
  return typeof part !== "string";
}

const tableNotes: readonly (readonly CellPart[])[] = [
  [
    "Etsy closed its separate wholesale marketplace, Etsy Wholesale, on July 31, 2018. Shops now handle bulk orders in their own stores (",
    { label: "An Update on Etsy Wholesale", href: etsyWholesaleUpdate },
    ").",
  ],
  [
    "On Etsy, one order can hold several items, and the ship-by date follows the longest processing time among them (",
    { label: "Etsy processing times", href: etsyProcessingTimes },
    ").",
  ],
];

function ComparisonCell({ parts }: { parts: readonly CellPart[] }) {
  return parts.map((part, index) =>
    isSourceLink(part) ? (
      <a
        key={index}
        href={part.href}
        target="_blank"
        rel="noopener nofollow"
        className="link-under is-active"
      >
        {part.label}
      </a>
    ) : (
      <Fragment key={index}>{renderMeasuredText(part)}</Fragment>
    ),
  );
}

export function UsWholesaleComparisonTable() {
  return (
    <div className="min-w-0 max-w-full">
      <div className="us-card-scroll">
        <table className="us-compare-table">
        <caption className="heading-2 text-ink">
          How Yang Supply wholesale terms compare with Faire and Etsy
        </caption>
        <colgroup>
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={header || "corner"} scope="col">
                {index === 0 ? null : header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              {row.cells.map((cell, index) => (
                <td key={headers[index + 1]} data-label={headers[index + 1]}>
                  <ComparisonCell parts={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        </table>
      </div>
      <ul className="mt-8 flex max-w-[65ch] flex-col gap-4 text-pretty text-[14px] break-normal">
        {tableNotes.map((note) => (
          <li key={typeof note[0] === "string" ? note[0] : note[0].href}>
            <ComparisonCell parts={note} />
          </li>
        ))}
      </ul>
    </div>
  );
}
