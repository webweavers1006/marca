/**
 * Container — Standard horizontal padding wrapper for all landing sections.
 * Ensures consistent distance from viewport edges across the entire page.
 *
 * @param {{ children: React.ReactNode, className?: string }} props
 */
export function Container({ children, className = "" }) {
  return <div className={`mx-auto px-6 py-16 md:px-10 lg:px-16 ${className}`}>{children}</div>;
}