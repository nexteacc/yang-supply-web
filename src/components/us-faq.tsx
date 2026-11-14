/**
 * Visible US FAQs. The same strings feed the page and the FAQPage JSON-LD.
 */

type FaqItem = { question: string; answer: string };

const productFaqs: readonly FaqItem[] = [
  {
    question: "What is the standard width of your Italian charm links?",
    answer:
      "Our Italian charm links are 9 mm wide (about 0.35 in), the standard size for Italian charm bracelets.",
  },
  {
    question: "What are the Italian charm links made of, and how do they connect?",
    answer:
      "Each link is 304 stainless steel with a plated or enamel finish. The links press-fit together, so you can lengthen or shorten a bracelet one link at a time.",
  },
  {
    question: "Which Italian charm designs can I order?",
    answer:
      "You can order from more than 2,000 mixed designs, including letters, words, flowers and fruit, flags, and team badges, plus Christmas, ocean, and heart themes. Email us the designs you want to stock.",
  },
  {
    question: "What size are the Acrylic Petals, and what do they go with?",
    answer:
      "Each petal is lily-shaped, 1.8 × 1.6 in. Petals come by the pack in 9 colors and are designed to go with our Acrylic Flower Vase Frames.",
  },
  {
    question: "What size are the rhinestone sticker sheets?",
    answer:
      "Large sheets measure 3 × 5.1 in, and each gem has its own adhesive. Large-sheet designs come with 126, 96, 90, 88, 80 or 65 gems, among others. Small sheets come in four designs: colorful hearts, pink-and-white hearts, colorful plum blossoms, and colorful stars. Both are sold by the sheet.",
  },
  {
    question: "What is the Acrylic Flower Vase Frame for?",
    answer:
      "It holds water and fresh flowers. The frame measures 7.1 × 5.9 in, comes in gray, sky blue, pink, or clear, and ships wrapped in bubble wrap.",
  },
  {
    question: "What sizes do the Resin Starfish come in?",
    answer:
      "Two sizes: large at 2 in and small at 1 in. Colors are ivory, light blue, light purple, navy blue, pink, and white.",
  },
];

const orderingFaqs: readonly FaqItem[] = [
  {
    question: "What is the minimum order amount?",
    answer: "The minimum is $500 for each order.",
  },
  {
    question: "Can I mix designs and colors in one order?",
    answer: "Yes. Any mix of designs and colors counts toward the $500 minimum.",
  },
  {
    question: "When is payment due, and how can I pay?",
    answer:
      "Payment of the full order total is due before shipment, by PayPal, SWIFT bank transfer, or USDT/USDC.",
  },
  {
    question: "How long does an order take to ship?",
    answer:
      "Small orders leave in about 3 business days, and large or custom orders in about 14 days. Transit comes on top, and shipping time and cost depend on how soon you need the goods.",
  },
  {
    question: "What should I include when I request a quote?",
    answer:
      "Email max@yangsupply.com with the designs you want, the quantity of each design and color, your ship-to location, and your target date. We reply with the product price and a separate shipping quote, valid for 7 days.",
  },
  {
    question: "Are samples available?",
    answer: "Yes. We send samples at your cost.",
  },
];

function faqJsonLd(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function FaqSection({ items }: { items: readonly FaqItem[] }) {
  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(items)) }}
      />
      <div className="border-t border-line">
        {items.map((item) => (
          <details key={item.question} className="border-b border-line">
            <summary className="cursor-pointer py-5 text-ink heading-3">
              {item.question}
            </summary>
            <p className="max-w-[65ch] pb-6 text-mute">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function UsProductFaq() {
  return <FaqSection items={productFaqs} />;
}

export function UsOrderingFaq() {
  return <FaqSection items={orderingFaqs} />;
}
