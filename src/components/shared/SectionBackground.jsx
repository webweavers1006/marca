"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * SectionBackground — Reusable full-bleed background layer for landing sections.
 * Supports both static images and video backgrounds with a brand color overlay.
 *
 * @param {{
 *   type?: "image" | "video",
 *   src: any,
 *   alt?: string,
 *   themeBg?: string,
 *   overlayClass?: string,
 *   videoProps?: { lazyOffset?: string, ariaLabel?: string },
 *   enabled?: boolean,
 * }} props
 */
export function SectionBackground({
  type = "image",
  src,
  alt = "",
  themeBg = "bg-background",
  overlayClass = "opacity-80",
  videoProps,
  enabled = true,
}) {
  if (!enabled || !src) return null;

  if (type === "video") {
    return <SectionVideoBackground src={src} themeBg={themeBg} overlayClass={overlayClass} videoProps={videoProps} />;
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        priority={false}
      />
      <div className={cn("absolute inset-0", themeBg, overlayClass)} />
    </div>
  );
}

/**
 * Internal video variant with lazy-loading support.
 */
function SectionVideoBackground({ src, themeBg, overlayClass, videoProps = {} }) {
  const { lazyOffset = "400px", ariaLabel } = videoProps;

  return (
    <SectionVideoLazy
      src={src}
      themeBg={themeBg}
      overlayClass={overlayClass}
      lazyOffset={lazyOffset}
      ariaLabel={ariaLabel}
    />
  );
}

import { useRef, useEffect, useState } from "react";

function SectionVideoLazy({ src, themeBg, overlayClass, lazyOffset, ariaLabel }) {
  const wrapperRef = useRef(null);
  const videoRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const video = videoRef.current;
        if (video) {
          video.preload = "auto";
          video.load();
        }
        observer.disconnect();
      },
      { rootMargin: lazyOffset }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [lazyOffset]);

  return (
    <div ref={wrapperRef} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <video
        ref={videoRef}
        src={src}
        preload="none"
        autoPlay
        muted
        loop
        playsInline
        aria-label={ariaLabel}
        onCanPlay={() => setIsReady(true)}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
          isReady ? "opacity-100" : "opacity-0"
        )}
      />
      <div className={cn("absolute inset-0", themeBg, overlayClass)} />
    </div>
  );
}
