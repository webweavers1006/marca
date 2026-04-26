"use client";

import { useRef, useEffect, useState } from "react";
import { FASES_VIDEO_CONFIG } from "@/features/landing/fases/config/fases.config";

/**
 * FasesVideoBackground — lazy-loaded full-section background video.
 *
 * Loading strategy (identical to HeroVideoBackground pattern):
 *  1. IntersectionObserver monitors the section from `lazyOffset` away.
 *  2. When near viewport: sets preload="auto" and calls .load().
 *  3. Fades in via opacity transition ONLY when `onCanPlay` fires.
 *     Until then the section background color is fully visible.
 *
 * Positioned absolute inset-0 — must be child of a `relative` container.
 */
export function FasesVideoBackground() {
  const { src, lazyOffset, showOverlay, ariaLabel } = FASES_VIDEO_CONFIG;
  const wrapperRef = useRef(null);
  const videoRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  // Lazy-load: only start downloading when near viewport
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
    <div
      ref={wrapperRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
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
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-opacity duration-1000
          ${isReady ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Scrim overlay to ensure content readability */}
      {showOverlay && (
        <div className="absolute inset-0 bg-transparent-bg" />
      )}
    </div>
  );
}
