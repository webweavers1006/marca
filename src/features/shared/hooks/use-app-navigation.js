import { useActiveTheme } from "@/components/shared/providers/active-theme-provider";

/**
 * Hook to handle smooth scroll navigation and URL history updates.
 * This separates routing side-effects from the global theme provider.
 */
export function useAppNavigation() {
  const { setActiveSection } = useActiveTheme();

  const navigateToSection = (href) => {
    setActiveSection(href);
    const hash = href.includes("#") ? `#${href.split("#")[1]}` : "";
    
    // Silently update the URL history without causing jumps
    if (hash) {
      window.history.pushState(null, "", hash);
    } else if (href === "/") {
      window.history.pushState(null, "", window.location.pathname);
    }
  };

  return { navigateToSection };
}
