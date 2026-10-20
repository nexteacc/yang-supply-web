import { contacts, series, productImage, type Lang } from "@/lib/content";
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
            contactType: "sales",
            availableLanguage: ["vi", "zh"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "YANG SUPPLY",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: ["vi", "zh-Hans"],
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
  const pageUrl = `${SITE_URL}${lang === "zh" ? "/zh/products" : "/products"}`;
  const homeUrl = `${SITE_URL}${lang === "zh" ? "/zh" : "/"}`;

  const items = series.map((item, index) => {
    const text = item[lang];
    const photos = productImage[item.id] || [];
    const firstPhoto = photos[0]?.src ? `${SITE_URL}${photos[0].src}` : undefined;

    return {
      "@type": "ListItem",
      position: index + 1,
      name: text.name,
      description: `${text.summary} ${text.detail}`,
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
        name: lang === "zh" ? "YANG SUPPLY 批发产品系列" : "Danh mục sản phẩm sỉ YANG SUPPLY",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: lang === "zh" ? "zh-Hans" : "vi",
        mainEntity: {
          "@type": "ItemList",
          name: lang === "zh" ? "YANG SUPPLY 批发产品系列" : "Danh mục sản phẩm sỉ YANG SUPPLY",
          numberOfItems: items.length,
          itemListElement: items,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: lang === "zh" ? "首页" : "Trang chủ",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: lang === "zh" ? "产品" : "Sản phẩm",
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
