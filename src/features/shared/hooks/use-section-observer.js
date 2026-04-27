"use client";

import { useEffect, useRef } from "react";
import { useActiveTheme } from "@/components/shared/providers/active-theme-provider";

/**
 * Hook to automatically update the global active section when this component comes into view.
 * 
 * @param {string} sectionHref - The href identifier for the section (e.g., "/#fases", "/")
 * @param {Object} options - IntersectionObserver options
 * @returns {React.RefObject} - Ref to attach to the section element
 */
export function useSectionObserver(sectionHref, _ignoredOptions) {
  const ref = useRef(null);
  const { setActiveSection } = useActiveTheme();

  useEffect(() => {
    // We enforce a detection box near the top third of the screen.
    // "-30% 0px -69% 0px" means the trigger zone is a narrow 1% band
    // exactly 30% from the top of the viewport.
    // This ensures the section has well and truly arrived on screen before changing colors.
    const observerOptions = {
      rootMargin: "-30% 0px -69% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionHref);
            // Optionally, update the URL hash silently
            if (sectionHref.includes("#")) {
              const hash = sectionHref.split("#")[1];
              window.history.replaceState(null, "", `#${hash}`);
            } else if (sectionHref === "/") {
              window.history.replaceState(null, "", window.location.pathname);
            }
          }
        });
      },
      observerOptions
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [sectionHref, setActiveSection]);

  return ref;
}
