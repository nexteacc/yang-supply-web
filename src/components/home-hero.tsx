"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/language";

const slides = [
 ['01-overview','','Acrylic petals, rhinestone stickers and a silver Italian charm bracelet'],
 ['02-acrylic-petals','#petals','Five translucent acrylic flowers'],
 ['03-rhinestone-stickers','#stickers','Overlapping sheets of colorful rhinestone stickers'],
 ['04-charm-links','#charm','Six individual links: evil eye, cherries, letter A, seashell and starfish, flower, and paw print'],
 ['05-christmas','#charm','Christmas Italian charm bracelets and individual links']
];
const copy = {
 en: [
  ['DIY & Craft Supplies from China','Wholesale craft materials and accessories.','Browse Products'],
  ['Acrylic Petals','Translucent petals in a range of colors.','View Petals'],
  ['Rhinestone Stickers','Hearts, stars, flowers and more.','View Stickers'],
  ['Selected Charm Links','Six individual designs for modular bracelets.','View Charms'],
  ['Christmas Charms','Seasonal bracelet designs and individual links.','View Christmas Charms']
 ],
 zh: [
  ['中国手作材料供应','从中国采购手作材料与配件。','查看产品'],
  ['亚克力花瓣','多色半透明花瓣。','查看花瓣'],
  ['水钻贴纸','爱心、星星、花朵等款式。','查看水钻贴'],
  ['精选链节','六款独立图案，可搭配模块手链。','查看链节'],
  ['圣诞系列','圣诞主题手链与单颗链节。','查看圣诞系列']
 ],
 vi: [
  ['Nguyên liệu thủ công từ Trung Quốc','Cung cấp sỉ nguyên liệu và phụ kiện thủ công.','Xem sản phẩm'],
  ['Cánh hoa acrylic','Cánh hoa trong nhiều màu sắc.','Xem cánh hoa'],
  ['Sticker đính đá','Hình trái tim, ngôi sao, hoa và nhiều mẫu khác.','Xem sticker'],
  ['Mắt charm chọn lọc','Sáu mẫu mắt charm rời để phối vòng tay.','Xem mắt charm'],
  ['Charm Giáng sinh','Vòng tay và mắt charm theo chủ đề Giáng sinh.','Xem mẫu Giáng sinh']
 ]
};

const controls = {
  en: { label: "Product highlights", pause: "Pause slideshow", play: "Play slideshow" },
  zh: { label: "产品展示", pause: "暂停轮播", play: "播放轮播" },
  vi: { label: "Sản phẩm nổi bật", pause: "Dừng trình chiếu", play: "Phát trình chiếu" },
};

export function HomeHero() {
  const { copyLang, market } = useLanguage();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [interaction, setInteraction] = useState(0);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);
    const updateVisibility = () => setHidden(document.hidden);
    updatePreference();
    updateVisibility();
    preference.addEventListener("change", updatePreference);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      preference.removeEventListener("change", updatePreference);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (paused || hovered || focused || hidden || reducedMotion) return;
    const timer = window.setTimeout(() => setActive((index) => (index + 1) % slides.length), 6000);
    return () => window.clearTimeout(timer);
  }, [active, paused, hovered, focused, hidden, reducedMotion, interaction]);

  const [file, anchor, alt] = slides[active];
  const [title, description, cta] = copy[copyLang][active];
  const labels = controls[copyLang];

  function choose(index: number) {
    setActive(index);
    setInteraction((count) => count + 1);
  }

  return (
    <section
      aria-label={labels.label}
      className="relative mx-auto max-w-[1920px] bg-white md:grid md:aspect-[16/9] md:items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => setFocused(event.currentTarget.contains(event.relatedTarget))}
    >
      <div className="relative z-10 px-5 pb-3 pt-10 sm:px-8 md:w-[42%] md:pl-[6vw] md:pr-0 md:pt-0">
        <h1 className={copyLang === "zh"
          ? "whitespace-nowrap text-[clamp(1.65rem,3.55vw,3.65rem)] leading-[1.1] font-semibold"
          : "text-balance text-[clamp(2.1rem,4.4vw,4.9rem)] leading-[1.03] tracking-tight font-semibold"}>
          {title}
        </h1>
        <p className="mt-4 max-w-[30ch] text-mute md:mt-5">{description}</p>
        <Link href={market.pages.products + anchor} className="mt-5 inline-block bg-ink px-5 py-3 text-sm text-white md:mt-7">
          {cta}
        </Link>
      </div>
      <picture
        className="block md:absolute md:inset-0"
        onTouchStart={(event) => { touchStart.current = event.changedTouches[0].clientX; }}
        onTouchCancel={() => { touchStart.current = null; }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return;
          const distance = event.changedTouches[0].clientX - touchStart.current;
          touchStart.current = null;
          if (Math.abs(distance) > 45) choose((active + (distance < 0 ? 1 : slides.length - 1)) % slides.length);
        }}
      >
        <source media="(max-width: 767px)" srcSet={`/hero/${file}-mobile.webp`} />
        <Image
          src={`/hero/${file}.webp`}
          alt={copyLang === "en" ? alt : title}
          width={1920}
          height={1080}
          priority={active === 0}
          unoptimized
          className="aspect-[6/5] w-full object-cover md:aspect-video md:h-full"
        />
      </picture>
      <div className="relative z-10 flex justify-end px-4 pb-3 md:absolute md:bottom-2 md:right-2 md:pb-0">
        {slides.map(([name], index) => (
          <button
            key={name}
            type="button"
            aria-label={copy[copyLang][index][0]}
            aria-pressed={active === index}
            onClick={() => choose(index)}
            className="grid size-11 cursor-pointer place-items-center"
          >
            <span aria-hidden className={`size-2.5 rounded-full border border-ink ${active === index ? "bg-ink" : "bg-white"}`} />
          </button>
        ))}
        {!reducedMotion && (
          <button
            type="button"
            aria-label={paused ? labels.play : labels.pause}
            onClick={() => setPaused((value) => !value)}
            className="grid size-11 cursor-pointer place-items-center"
          >
            <span aria-hidden>{paused ? "▶" : "Ⅱ"}</span>
          </button>
        )}
      </div>
    </section>
  );
}
