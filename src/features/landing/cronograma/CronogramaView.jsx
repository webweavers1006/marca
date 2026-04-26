"use client";

import { CRONOGRAMA_CONTENT } from "./config/cronograma.content.config";
import { CronogramaHeader } from "./components/CronogramaHeader";
import { MilestonePath } from "./components/MilestonePath";

/**
 * CronogramaView — Serpentine milestones timeline section.
 * Dark-themed section matching the brand palette (secondary → background gradient).
 */
export function CronogramaView() {
  const { label, sectionId, titulo, tituloHighlight, subtitulo } =
    CRONOGRAMA_CONTENT;

  return (
    <section
      id={sectionId}
      aria-labelledby="cronograma-heading"
      className="relative overflow-hidden bg-secondary"
    >
      {/* ── Decorative gradient background ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "#1a1525",
        }}
      />

      {/* ── Ambient orb — top right ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full"
        style={{
          background:
            "#1a1525",
        }}
      />

      {/* ── Ambient orb — bottom left ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full"
        style={{
          background:
            "#1a1525",
        }}
      />

      {/* ── Subtle grid pattern overlay ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 section-inner">
        <CronogramaHeader
          label={label}
          titulo={titulo}
          tituloHighlight={tituloHighlight}
          subtitulo={subtitulo}
          darkMode
        />

        <MilestonePath />
      </div>
    </section>
  );
}
