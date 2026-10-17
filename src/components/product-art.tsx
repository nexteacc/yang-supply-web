"use client";

import Image from "next/image";
import { useState } from "react";
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

export function ProductArt({ id }: { id: SeriesId }) {
  const { lang } = useLanguage();
  const photos = productImage[id];
  const [active, setActive] = useState(0);
  const photo = photos[active] ?? photos[0];
  const small = photos.every((item) => item.small);

  return (
    <div>
      <MainPanel photo={photo} alt={photo[lang]} small={small} />
      {photos.length > 1 ? (
        <ul className="mt-6 flex flex-wrap gap-6">
          {photos.map((item, index) => {
            const selected = index === active;
            return (
              <li key={item.src} className="w-20 md:w-24">
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  aria-pressed={selected}
                  aria-label={item[lang]}
                  className={`block w-full cursor-pointer ${selected ? "ring-1 ring-ink ring-offset-2" : ""}`}
                >
                  <SquareThumb src={item.src} alt="" sizes="96px" />
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
