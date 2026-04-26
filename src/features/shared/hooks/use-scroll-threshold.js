"use client";

import { useState, useEffect } from "react";

/**
 * Hook to detect if the user has scrolled past a certain threshold.
 * If threshold is "viewport", it uses window.innerHeight.
 * @param {number|'viewport'} threshold - The scroll pixel value or 'viewport' keyword.
 * @param {number} offset - Offset to subtract from the threshold (e.g. navbar height).
 * @returns {boolean} - True if window.scrollY > threshold.
 */
export function useScrollThreshold(threshold = 50, offset = 80) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const getThreshold = () => {
      if (threshold === "viewport") {
        return window.innerHeight - offset;
      }
      return threshold;
    };

    const handleScroll = () => {
      const currentThreshold = getThreshold();
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > currentThreshold);
    };

    // Initialize
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    if (threshold === "viewport") {
      window.addEventListener("resize", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [threshold, offset]);

  return isScrolled;
}
