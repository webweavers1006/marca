import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

/**
 * Hook to determine if a link is active based on the current pathname and hash.
 * Particularly useful for landing pages with anchor links and multi-page routing.
 * 
 * @returns {Object} { isLinkActive, currentHash, setCurrentHash }
 */
export function useActiveLink() {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleSync = () => {
      setCurrentHash(window.location.hash || "");
    };
    
    // Sync on mount and whenever the path changes (handles returning to "/" from a hash)
    handleSync();
    
    window.addEventListener("hashchange", handleSync);
    window.addEventListener("popstate", handleSync);
    
    return () => {
      window.removeEventListener("hashchange", handleSync);
      window.removeEventListener("popstate", handleSync);
    };
  }, [pathname]); // Re-sync if the path changes

  /**
   * Checks if a specific href is currently active.
   * Handles both absolute paths and hash-based anchor links.
   * 
   * @param {string} href - The link target to check.
   * @returns {boolean}
   */
  const isLinkActive = useCallback((href) => {
    // Extract hash from href if present (e.g., "/#section" -> "#section")
    const linkHash = href.includes("#") ? `#${href.split("#")[1]}` : "";
    
    if (linkHash) {
      // Anchor link is active if we are on home and hash matches
      return pathname === "/" && currentHash === linkHash;
    }
    
    // Standard link is active if path matches 
    // SPECIAL CASE: "/" is only active if there is NO hash
    return pathname === href && (href !== "/" || !currentHash);
  }, [pathname, currentHash]);

  return { isLinkActive, currentHash, setCurrentHash };
}
