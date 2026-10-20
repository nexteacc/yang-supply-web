import {
  contacts,
  series,
  productImage,
  dictionary,
  type Lang,
} from "@/lib/content";
import { localizedPath } from "@/lib/i18n";
import { SITE_URL } from "@/lib/seo";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "YANG SUPPLY",
        url: SITE_URL,
        logo: `${SITE_URL}/icon.svg`,
        description:
          "Nhà cung cấp nguyên liệu DIY từ Trung Quốc cho xưởng thủ công, cửa hàng và trường học tại Việt Nam.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Shenzhen",
          addressCountry: "CN",
        },
        areaServed: {
          "@type": "Country",
          name: "Vietnam",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: `+84-${contacts.zalo.replace(/^0/, "")}`,
            email: contacts.emails[0],
            contactType: "sales",
            areaServed: "VN",
            availableLanguage: ["vi", "zh", "en"],
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service`,
        name: "Cung cấp sỉ nguyên liệu DIY từ Trung Quốc về Việt Nam",
        serviceType: "B2B Wholesale DIY Craft Materials Supply",
        provider: {
          "@id": `${SITE_URL}/#organization`,
        },
        areaServed: {
          "@type": "Country",
          name: "Vietnam",
        },
        description:
          "Báo giá theo quy cách và số lượng, đặt cọc 80%, vận chuyển từ Thâm Quyến về Việt Nam, thanh toán 20% khi nhận hàng. Bù hàng nếu bể vỡ trong vận chuyển (báo kèm ảnh trong 1 ngày sau khi nhận).",
        termsOfService: `${SITE_URL}/cooperation`,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "YANG SUPPLY",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: ["vi", "zh-Hans", "en"],
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

export function ProductsListSchema({ lang }: { lang: Lang }) {
  const pageUrl = `${SITE_URL}${localizedPath(lang, "/products")}`;
  const homeUrl = `${SITE_URL}${localizedPath(lang)}`;

  const items = series.map((item, index) => {
    const text = item[lang];
    const photos = productImage[item.id] || [];
    const firstPhoto = photos[0]?.src
      ? `${SITE_URL}${photos[0].src}`
      : undefined;
    const specsSummary = text.specs
      .map((s) => `${s.label}: ${s.value}`)
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
        name: `${dictionary[lang].products.title} · YANG SUPPLY`,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: lang === "zh" ? "zh-Hans" : lang,
        mainEntity: {
          "@type": "ItemList",
          name: `${dictionary[lang].products.title} · YANG SUPPLY`,
          numberOfItems: items.length,
          itemListElement: items,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        name: `${dictionary[lang].products.title} · YANG SUPPLY`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: dictionary[lang].nav[0].label,
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: dictionary[lang].products.title,
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

export function CooperationPageSchema({ lang }: { lang: Lang }) {
  const pageUrl = `${SITE_URL}${localizedPath(lang, "/cooperation")}`;
  const homeUrl = `${SITE_URL}${localizedPath(lang)}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${dictionary[lang].cooperation.title} · YANG SUPPLY`,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#service`,
        },
        inLanguage: lang === "zh" ? "zh-Hans" : lang,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        name: `${dictionary[lang].cooperation.title} · YANG SUPPLY`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: dictionary[lang].nav[0].label,
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: dictionary[lang].cooperation.title,
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

export function ContactPageSchema({ lang }: { lang: Lang }) {
  const pageUrl = `${SITE_URL}${localizedPath(lang, "/contact")}`;
  const homeUrl = `${SITE_URL}${localizedPath(lang)}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${dictionary[lang].contact.title} · YANG SUPPLY`,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        mainEntity: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: lang === "zh" ? "zh-Hans" : lang,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        name: `${dictionary[lang].contact.title} · YANG SUPPLY`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: dictionary[lang].nav[0].label,
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: dictionary[lang].contact.title,
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
