"use client";

import { useEffect, useRef, useState } from "react";

/**
 * HeroVideoBackground — non-blocking background video layer.
 *
 * Loading strategy (does NOT block initial page render):
 *  1. Mounts with `preload="none"` — browser fetches zero video bytes on load.
 *  2. After mount (useEffect), switches to `preload="auto"` and calls .load()
 *     so the download starts only after the main thread is free.
 *  3. Fades in via opacity transition ONLY when `onCanPlay` fires.
 *     Until then, the existing background color (cream) is fully visible.
 *
 * @param {{ src: string, showOverlay: boolean }} props
 */
export function HeroVideoBackground({ src, showOverlay }) {
  const videoRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  // Defer video loading until after initial paint
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.preload = "auto";
    video.load();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* The video itself — invisible until ready */}
      <video
        ref={videoRef}
        src={src}
        preload="none"
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setIsReady(true)}
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-opacity duration-1000
          ${isReady ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Scrim overlay — always present to ensure text contrast */}
      {showOverlay && (
        <div className="absolute inset-0 bg-transparent-bg" />
      )}
    </div>
  );
}
