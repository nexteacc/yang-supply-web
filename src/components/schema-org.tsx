import { contacts, series, productImage, dictionary } from "@/lib/content";
import { guides, type GuideSlug } from "@/lib/guides";
import { markets, type Market, type MarketId } from "@/lib/markets";
import { SITE_URL } from "@/lib/seo";

function pageInLanguage(marketId: MarketId) {
  if (marketId === "zh") return "zh-Hans";
  if (marketId === "en-us") return "en-US";
  return "vi";
}

function contactPoints(market: Market) {
  const telephone = `+84-${contacts.zalo.replace(/^0/, "")}`;
  if (market.id === "vi") {
    return [
      {
        "@type": "ContactPoint",
        telephone,
        email: contacts.emails[0],
        contactType: "sales",
        areaServed: "VN",
        availableLanguage: ["vi", "zh", "en"],
      },
    ];
  }

  if (market.schema.telephone) {
    return [
      {
        "@type": "ContactPoint",
        telephone,
        email: contacts.emails[0],
        contactType: "sales",
        availableLanguage: market.schema.availableLanguage,
      },
      ...contacts.emails.slice(1).map((email) => ({
        "@type": "ContactPoint",
        email,
        contactType: "sales",
        availableLanguage: market.schema.availableLanguage,
      })),
    ];
  }

  return contacts.emails.map((email) => ({
    "@type": "ContactPoint",
    email,
    contactType: "sales",
    ...(market.schema.areaServed
      ? { areaServed: market.schema.areaServed.code }
      : {}),
    availableLanguage: market.schema.availableLanguage,
  }));
}

export function OrganizationSchema({ marketId }: { marketId: MarketId }) {
  const market = markets[marketId];
  const organization: Record<string, unknown> = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "YANG SUPPLY",
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    description: market.schema.orgDescription,
    address: {
      "@type": "PostalAddress",
      addressCountry: "CN",
    },
    contactPoint: contactPoints(market),
  };
  if (market.schema.areaServed) {
    organization.areaServed = {
      "@type": "Country",
      name: market.schema.areaServed.name,
    };
  }

  const graph: Record<string, unknown>[] = [organization];

  if (market.terms && market.pages.cooperation) {
    graph.push({
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      name: market.terms.serviceName,
      serviceType: "B2B Wholesale DIY Craft Materials Supply",
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      ...(market.schema.areaServed
        ? {
            areaServed: {
              "@type": "Country",
              name: market.schema.areaServed.name,
            },
          }
        : {}),
      description: market.terms.serviceDescription,
      termsOfService: `${SITE_URL}${market.pages.cooperation}`,
    });
  }

  graph.push({
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "YANG SUPPLY",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: ["vi", "zh-Hans", "en-US"],
  });

  const schema = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductsListSchema({ marketId }: { marketId: MarketId }) {
  const market = markets[marketId];
  const copy = market.copyLang;
  const pageUrl = `${SITE_URL}${market.pages.products}`;
  const homeUrl = `${SITE_URL}${market.pages.home}`;

  const items = series.map((item, index) => {
    const text = item[copy];
    const photos = (productImage[item.id] || []).filter(
      (photo) => !(photo.metricDiagram && market.units === "in"),
    );
    const firstPhoto = photos[0]?.src
      ? `${SITE_URL}${photos[0].src}`
      : undefined;
    const specsSummary = text.specs
      .map((spec) => `${spec.label}: ${spec.value}`)
      .join(" | ");

    return {
      "@type": "ListItem",
      position: index + 1,
      name: text.name,
      description: `${text.summary} ${text.detail} (${specsSummary})`,
      url: `${pageUrl}#${item.id}`,
      ...(firstPhoto ? { image: firstPhoto } : {}),
    };
  });

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${dictionary[copy].products.title} · YANG SUPPLY`,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: pageInLanguage(marketId),
        mainEntity: {
          "@type": "ItemList",
          name: `${dictionary[copy].products.title} · YANG SUPPLY`,
          numberOfItems: items.length,
          itemListElement: items,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        name: `${dictionary[copy].products.title} · YANG SUPPLY`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: dictionary[copy].nav[0]?.label,
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: dictionary[copy].products.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function CooperationPageSchema({ marketId }: { marketId: MarketId }) {
  const market = markets[marketId];
  const copy = market.copyLang;
  const pageUrl = `${SITE_URL}${market.pages.cooperation}`;
  const homeUrl = `${SITE_URL}${market.pages.home}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${dictionary[copy].cooperation.title} · YANG SUPPLY`,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#service`,
        },
        inLanguage: pageInLanguage(marketId),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        name: `${dictionary[copy].cooperation.title} · YANG SUPPLY`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: dictionary[copy].nav[0]?.label,
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: dictionary[copy].cooperation.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ContactPageSchema({ marketId }: { marketId: MarketId }) {
  const market = markets[marketId];
  const copy = market.copyLang;
  const pageUrl = `${SITE_URL}${market.pages.contact}`;
  const homeUrl = `${SITE_URL}${market.pages.home}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${dictionary[copy].contact.title} · YANG SUPPLY`,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        mainEntity: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: pageInLanguage(marketId),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        name: `${dictionary[copy].contact.title} · YANG SUPPLY`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: dictionary[copy].nav[0]?.label,
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: dictionary[copy].contact.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function GuideArticleSchema({ slug }: { slug: GuideSlug }) {
  const guide = guides[slug];
  const pageUrl = `${SITE_URL}${guide.href}`;
  const homeUrl = `${SITE_URL}/`;
  const imageUrl = `${SITE_URL}${guide.heroImage.src}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${pageUrl}#webpage`,
        },
        headline: guide.title,
        description: guide.description,
        image: [imageUrl],
        datePublished: guide.datePublished,
        dateModified: guide.dateModified,
        author: {
          "@id": `${SITE_URL}/#organization`,
        },
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: "vi",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        name: `${guide.title} · YANG SUPPLY`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: dictionary.vi.nav[0].label,
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: guide.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
