import { BRAND_BAND_CONFIG } from "@/features/shared/config/brand-color-band.config";

/**
 * BrandColorBand — A shared UI component that renders the 6 brand colors.
 * Can be positioned on any edge of a relative container (top, bottom, left, right).
 * Uses purely Tailwind classes (Config-Driven UI architecture).
 *
 * @param {Object} props
 * @param {"top"|"bottom"|"left"|"right"} [props.position="right"] - The edge to attach the band to
 * @param {string} [props.thickness] - Optional Tailwind class to override thickness (e.g., "h-4" or "w-4")
 * @param {string} [props.className] - Optional extra Tailwind classes
 */
export function BrandColorBand({
  position = "right",
  thickness,
  className = "",
}) {
  const layoutClass = BRAND_BAND_CONFIG.positions[position] || BRAND_BAND_CONFIG.positions.right;
  const thicknessClass = thickness || BRAND_BAND_CONFIG.defaultThickness[position] || "w-2";

  return (
    <div className={`${layoutClass} ${thicknessClass} ${className}`} aria-hidden="true">
      <div className="flex-1 bg-primary" />
      <div className="flex-1 bg-secondary" />
      <div className="flex-1 bg-tertiary" />
      <div className="flex-1 bg-quaternary" />
      <div className="flex-1 bg-quinary" />
    </div>
  );
}
