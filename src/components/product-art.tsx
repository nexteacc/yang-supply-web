"use client";

import Image from "next/image";
import { productImage, type SeriesId } from "@/lib/content";
import { useLanguage } from "@/components/language";

const sizes = "(min-width: 1024px) 320px, 92vw";

export function WellImage({
  src,
  alt,
  sizes: imageSizes,
  aspect = "square",
  insetClass = "inset-6 sm:inset-8",
  className = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  aspect?: "square" | "portrait";
  insetClass?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${aspect === "portrait" ? "aspect-[3/4]" : "aspect-square"} ${className}`}
    >
      <div className={`absolute ${insetClass}`}>
        <div className="relative h-full w-full">
          <Image
            src={src}
            alt={alt}
            fill
            quality={75}
            sizes={imageSizes}
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

  if (photos.every((photo) => photo.small)) {
    return (
      <div className="flex min-h-72 flex-wrap items-center justify-center gap-8 bg-well px-6 py-12 sm:gap-12 sm:px-10">
        {photos.map((photo) => (
          <figure key={photo.src} className="group overflow-hidden" style={{ width: photo.width, maxWidth: "100%" }}>
            <Image
              src={photo.src}
              alt={photo[lang]}
              width={photo.width}
              height={photo.height}
              quality={75}
              sizes={`${photo.width}px`}
              loading="eager"
              className="h-auto w-full media-zoom"
            />
          </figure>
        ))}
      </div>
    );
  }

  const columns =
    photos.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : photos.length === 2 ? "sm:grid-cols-2" : "grid-cols-1";

  return (
    <div className="bg-well p-3 sm:p-5">
      <div className={`grid items-start gap-4 ${columns}`}>
        {photos.map((photo) => (
          <figure key={photo.src} className="group">
            <WellImage
              src={photo.src}
              alt={photo[lang]}
              sizes={sizes}
              aspect={photo.portrait ? "portrait" : "square"}
              insetClass="inset-3 sm:inset-5"
            />
            {photo.label ? (
              <figcaption className="px-2 pb-2 pt-3 text-center text-[11px] uppercase tracking-[0.18em] text-mute">
                {photo.label[lang]}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </div>
  );
}
