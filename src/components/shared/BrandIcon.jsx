import { cn } from "@/lib/utils";

/**
 * BrandIcon — A wrapper for SVG brand assets.
 * Allows logos and icons to be treated as dynamic components with Tailwind support.
 * 
 * @param {Object} props
 * @param {React.ElementType} props.icon - The SVG component to render.
 * @param {string} [props.className] - Optional Tailwind classes for sizing and coloring.
 */
export function BrandIcon({ icon: Icon, className, ...props }) {
  if (!Icon) return null;

  return (
    <Icon 
      className={cn(
        "w-auto h-12 transition-all duration-300 ease-in-out", 
        className
      )} 
      {...props} 
    />
  );
}
