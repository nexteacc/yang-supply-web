"use client";

import Image from "next/image";
import { productImage, type SeriesId } from "@/lib/content";
import { useLanguage } from "@/components/language";

const sizes = "(min-width: 768px) 280px, (min-width: 640px) 45vw, 92vw";

export function ProductArt({
  id,
  alt,
  size = "lg",
}: {
  id: SeriesId;
  alt: string;
  size?: "sm" | "lg";
}) {
  const { lang } = useLanguage();
  const photos = productImage[id];
  const lead = photos[0];

  if (size === "sm") {
    return (
      <div className="relative aspect-square w-16 overflow-hidden border border-amber/20 bg-soft sm:w-20">
        <Image src={lead.src} alt={alt} fill sizes="80px" className="object-cover" />
      </div>
    );
  }

  if (photos.every((photo) => photo.small)) {
    return (
      <div className="flex flex-wrap items-start gap-3">
        {photos.map((photo) => (
          <div key={photo.src} className="relative size-24 overflow-hidden border border-amber/20 bg-soft sm:size-28">
            <Image
              src={photo.src}
              alt={photo[lang]}
              fill
              quality={75}
              sizes="112px"
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {photos.map((photo) => (
        <figure key={photo.src} className="border border-amber/20 bg-soft">
          {photo.portrait ? (
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={photo.src}
                alt={photo[lang]}
                fill
                quality={75}
                sizes={sizes}
                className="object-contain transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          ) : (
            <div className="overflow-hidden">
              <Image
                src={photo.src}
                alt={photo[lang]}
                width={photo.width}
                height={photo.height}
                quality={75}
                sizes={sizes}
                className="h-auto w-full transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          )}
          {photo.label ? (
            <figcaption className="px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-dim">
              {photo.label[lang]}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}
