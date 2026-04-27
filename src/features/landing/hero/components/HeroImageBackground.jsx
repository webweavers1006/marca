import Image from "next/image";

/**
 * HeroImageBackground — static image background for the Hero section.
 * Uses Next.js <Image> with a static import for automatic optimization.
 * The overlay uses a directional gradient: dense on the left (text side),
 * fading to transparent on the right (where brand circles live).
 * @param {{ src: object, showOverlay: boolean }} props
 */
export function HeroImageBackground({ src, showOverlay }) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <Image
        src={src}
        alt=""
        fill
        priority
        placeholder="blur"
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Directional scrim: heavy on text side, fades right */}
      {showOverlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-quaternary/85 via-quaternary/60 to-quaternary/20" />
      )}
    </div>
  );
}

