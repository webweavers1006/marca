"use client";

import { createContext, useContext, useState, useMemo } from "react";
import { BRAND_THEMES } from "@/features/shared/config/theme.config";
import { NAV_LINKS } from "@/features/shared/config/routes.config";

const ActiveThemeContext = createContext(null);

/**
 * Global provider for the active brand theme based on the current section.
 * Allows components (Navbar, Modules, etc.) to share and synchronize the current color palette.
 */
export function ActiveThemeProvider({ children }) {
  const [activeSection, setActiveSection] = useState("/");

  // Determine current theme based on activeSection mapping in routes config
  const activeTheme = useMemo(() => {
    const route = NAV_LINKS.find((link) => link.href === activeSection);
    return route?.theme || BRAND_THEMES[0]; // Default to primary if not found
  }, [activeSection]);

  const value = useMemo(
    () => ({
      activeSection,
      setActiveSection,
      activeTheme,
    }),
    [activeSection, activeTheme]
  );

  return (
    <ActiveThemeContext.Provider value={value}>
      {children}
    </ActiveThemeContext.Provider>
  );
}

/**
 * Hook to access the current active theme and section.
 */
export function useActiveTheme() {
  const context = useContext(ActiveThemeContext);
  if (!context) {
    throw new Error("useActiveTheme must be used within an ActiveThemeProvider");
  }
  return context;
}
