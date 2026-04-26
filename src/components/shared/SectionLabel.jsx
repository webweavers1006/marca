"use client";

import { motion } from "framer-motion";
import { SECTION_LABEL_CONFIG } from "@/features/shared/config/typography.config";
import { sectionItemVariants } from "@/features/shared/config/animations.config";

/**
 * SectionLabel - Unified label/eyebrow component with the Duna-style accent line.
 * Driven by SECTION_LABEL_CONFIG for global consistency.
 * 
 * @param {object} props
 * @param {string} props.label - The text to display.
 * @param {'default' | 'inverse' | 'hero'} [props.variant] - Visual style variant.
 * @param {string} [props.className] - Additional classes for the container.
 * @param {boolean} [props.animate=false] - Whether to wrap in a motion.div.
 * @param {object} [props.variants] - Motion variants to use if animate is true.
 */
export function SectionLabel({ 
  label, 
  variant = SECTION_LABEL_CONFIG.defaults.variant, 
  className = "", 
  animate = false,
  variants = sectionItemVariants
}) {
  const containerClasses = `flex items-center gap-3 ${className}`;
  
  const currentStyle = SECTION_LABEL_CONFIG.variants[variant] || SECTION_LABEL_CONFIG.variants.default;

  const Content = (
    <>
      <span className={`block h-px w-8 ${currentStyle.line}`} aria-hidden="true" />
      <span className={`${SECTION_LABEL_CONFIG.shared.text} ${currentStyle.text}`}>
        {label}
      </span>
    </>
  );

  if (animate) {
    return (
      <motion.div variants={variants} className={containerClasses}>
        {Content}
      </motion.div>
    );
  }

  return (
    <div className={containerClasses}>
      {Content}
    </div>
  );
}
