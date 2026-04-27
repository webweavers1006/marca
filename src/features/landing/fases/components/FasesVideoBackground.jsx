"use client";

import { useRef, useEffect, useState } from "react";
import { FASES_CONFIG } from "@/features/landing/fases/config/fases.config";

/**
 * FasesVideoBackground — lazy-loaded full-section background video.
 */
export function FasesVideoBackground({ theme }) {
  const { src, lazyOffset, overlayClass, ariaLabel } = FASES_CONFIG.background;
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

      {/* Brand color overlay to ensure content readability */}
      <div className={`absolute inset-0 ${theme.bg} ${overlayClass}`} />
    </div>
  );
}
