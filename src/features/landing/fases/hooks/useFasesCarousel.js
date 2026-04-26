"use client";

import { useState, useEffect, useCallback } from "react";
import { SELECTION_CYCLES } from "@/features/landing/fases/config/fases.content.config";
import { ACTIVE_CYCLE_ROTATION_CONFIG } from "@/features/landing/fases/config/fases.config";

/**
 * useFasesCarousel — Custom hook to manage the rotation logic of selection phases.
 * Separates "Business/UI Logic" from "Presentation".
 */
export function useFasesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % SELECTION_CYCLES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + SELECTION_CYCLES.length) % SELECTION_CYCLES.length);
  }, []);

  const goToId = useCallback((id) => {
    const index = SELECTION_CYCLES.findIndex((c) => c.id === id);
    if (index !== -1) setActiveIndex(index);
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    const timer = setInterval(handleNext, ACTIVE_CYCLE_ROTATION_CONFIG.intervalMs);
    return () => clearInterval(timer);
  }, [handleNext]);

  return {
    activeIndex,
    activeCycle: SELECTION_CYCLES[activeIndex],
    handleNext,
    handlePrev,
    goToId
  };
}
