/**
 * SectionLayout — Flexible layout wrapper for landing sections.
 *
 * Supports three layout modes controlled via the `layout` prop:
 * - "left":   Two-column grid, header on the left, content on the right.
 * - "right":  Two-column grid, header on the right, content on the left.
 * - "center": Single centered column, header above content.
 *
 * @param {{
 *   layout: "left" | "right" | "center",
 *   header: React.ReactNode,
 *   children: React.ReactNode,
 *   className?: string,
 *   headerClassName?: string,
 *   contentClassName?: string,
 *   titleWidth?: string,
 *   gridCols?: string,
 * }} props
 */
export function SectionLayout({
  layout = "left",
  header,
  children,
  className = "",
  headerClassName = "",
  contentClassName = "",
  titleWidth = "max-w-2xl",
  gridCols = "lg:grid-cols-2",
}) {
  if (layout === "center") {
    return (
      <div className={`mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20 lg:py-24 ${titleWidth} ${className}`}>
        <div className="flex flex-col items-center text-center gap-8">
          <div className={headerClassName}>{header}</div>
          <div className={contentClassName}>{children}</div>
        </div>
      </div>
    );
  }

  const headerOrder = layout === "right" ? "lg:order-last" : "";
  const contentOrder = layout === "right" ? "lg:order-first" : "";

  return (
    <div className={`grid grid-cols-1 ${gridCols || "lg:grid-cols-2"} gap-8 lg:gap-12 ${className}`}>
      <div
        className={`${headerOrder} relative md:py-20 lg:py-24 flex flex-col justify-center lg:min-h-[460px] ${headerClassName}`}
      >
        {header}
      </div>
      <div
        className={`${contentOrder} relative md:py-20 lg:py-24 flex flex-col justify-center ${contentClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
