import { useState, useCallback } from "react";

/**
 * useMilestoneExpand — manages which milestone card is expanded.
 * Clicking an already-open card collapses it (toggle behavior).
 *
 * @returns {{ expandedId: string|null, toggle: (id: string) => void }}
 */
export function useMilestoneExpand() {
  const [expandedId, setExpandedId] = useState(null);

  const toggle = useCallback((id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  return { expandedId, toggle };
}
