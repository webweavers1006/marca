"use client";

import { useMilestonePath } from "../hooks/useMilestonePath";
import { useMilestoneExpand } from "../hooks/useMilestoneExpand";
import { MilestonePathDesktop } from "./MilestonePathDesktop";
import { MilestonePathMobile } from "./MilestonePathMobile";

/**
 * MilestonePath — Render component for the roadmap.
 * Displays a straight timeline on mobile and a serpentine timeline on desktop.
 */
export function MilestonePath({ theme }) {
  const data = useMilestonePath();
  const { expandedId, toggle } = useMilestoneExpand();

  return (
    <>
      {/* ── MOBILE LAYOUT (Straight Timeline) ── */}
      <MilestonePathMobile 
        theme={theme} 
        data={data} 
        expandedId={expandedId} 
        onToggle={toggle} 
      />

      {/* ── DESKTOP LAYOUT (Serpentine Timeline) ── */}
      <MilestonePathDesktop 
        theme={theme} 
        data={data} 
        expandedId={expandedId} 
        onToggle={toggle} 
      />
    </>
  );
}
