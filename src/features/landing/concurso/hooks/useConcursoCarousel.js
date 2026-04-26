"use client";

import { useState, useCallback, useEffect } from "react";

/**
 * useConcursoCarousel — Custom hook to manage the sliding logic for the concurso images.
 * Separates the rotation logic from the presentation layer.
 */
export function useConcursoCarousel(totalItems) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    if (totalItems <= 0) return;
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prev = useCallback(() => {
    if (totalItems <= 0) return;
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const goTo = useCallback((index) => {
    if (totalItems <= 0) return;
    setCurrentIndex(index % totalItems);
  }, [totalItems]);


  // Auto-rotation every 6 seconds
  useEffect(() => {
    if (totalItems <= 1) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, totalItems]);

  return {
    currentIndex,
    next,
    prev,
    goTo,
  };
}
