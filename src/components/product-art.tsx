"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";
import { productImage, type ProductPhoto, type SeriesId } from "@/lib/content";
import { useLanguage } from "@/components/language";

export function SquareThumb({
  src,
  alt,
  className = "",
  sizes = "180px",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`relative aspect-square overflow-hidden bg-well ${className}`}>
      <div className="absolute inset-[12%]">
        <div className="relative h-full w-full">
          <Image
            src={src}
            alt={alt}
            fill
            quality={75}
            sizes={sizes}
            loading="eager"
            className="object-contain media-zoom"
          />
        </div>
      </div>
    </div>
  );
}

function MainPanel({ photo, alt, small }: { photo: ProductPhoto; alt: string; small: boolean }) {
  if (small) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center bg-well px-[12%] py-[12%]">
        <Image
          src={photo.src}
          alt={alt}
          width={photo.width}
          height={photo.height}
          quality={75}
          sizes={`${photo.width}px`}
          loading="eager"
          className="h-auto max-h-full w-auto max-w-full"
        />
      </div>
    );
  }

  return (
    <div className="group relative aspect-[4/3] overflow-hidden bg-well">
      <div className="absolute inset-[12%]">
        <div className="relative h-full w-full">
          <Image
            src={photo.src}
            alt={alt}
            fill
            quality={75}
            sizes="(min-width: 768px) 880px, 100vw"
            loading="eager"
            className="object-contain media-zoom"
          />
        </div>
      </div>
    </div>
  );
}

function moveThumb(
  event: KeyboardEvent<HTMLButtonElement>,
  index: number,
  count: number,
  setActive: (index: number) => void,
) {
  if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
  event.preventDefault();
  const next = event.key === "ArrowRight" ? (index + 1) % count : (index - 1 + count) % count;
  setActive(next);
  const buttons = event.currentTarget.closest("ul")?.querySelectorAll("button");
  buttons?.[next]?.focus();
}

export function ProductArt({ id }: { id: SeriesId }) {
  const { lang } = useLanguage();
  const photos = productImage[id];
  const [active, setActive] = useState(0);
  const photo = photos[active] ?? photos[0];
  if (!photo) return null;
  const small = photos.every((item) => item.small);

  return (
    <div>
      <MainPanel photo={photo} alt={photo[lang]} small={small} />
      {photos.length > 1 ? (
        <ul className="mt-6 flex gap-4 overflow-x-auto px-0.5 py-1 md:flex-wrap md:gap-6">
          {photos.map((item, index) => {
            const selected = index === active;
            const alt = item[lang];
            return (
              <li key={item.src} className="w-20 shrink-0 md:w-24">
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => moveThumb(event, index, photos.length, setActive)}
                  aria-pressed={selected}
                  aria-current={selected ? "true" : undefined}
                  aria-label={alt}
                  className={`block w-full cursor-pointer focus-visible:ring-1 focus-visible:ring-ink focus-visible:ring-offset-2 ${selected ? "ring-1 ring-ink ring-offset-2" : ""}`}
                >
                  <SquareThumb src={item.src} alt={alt} sizes="96px" />
                </button>
                {item.label ? <p className="eyebrow mt-2 text-center text-mute">{item.label[lang]}</p> : null}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
