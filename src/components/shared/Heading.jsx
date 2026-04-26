"use client";

import { motion } from "framer-motion";
import { HEADING_CONFIG } from "@/features/shared/config/typography.config";
import { sectionItemVariants } from "@/features/shared/config/animations.config";


/**
 * Heading - Unified typography component for titles across the platform.
 * Driven by HEADING_CONFIG for global consistency.
 * 
 * @param {object} props
 * @param {'h1'|'h2'|'h3'|'h4'|'h5'|'h6'} [props.as] - The HTML tag to render.
 * @param {'hero'|'section'|'subsection'|'card'} [props.variant] - The visual style to apply.
 * @param {'left'|'center'|'right'} [props.align='left'] - Text and block alignment.
 * @param {boolean} [props.animate=false] - Whether to use motion variants.
 * @param {object} [props.variants] - Motion variants for animation.
 * @param {string} [props.className] - Additional classes for styling/spacing.
 */
export function Heading({ 
  as: Tag = HEADING_CONFIG.defaults.tag, 
  variant = HEADING_CONFIG.defaults.variant, 
  align = "left",
  children, 
  className = "", 
  animate = false,
  variants = sectionItemVariants,
  ...props 
}) {
  const alignments = {
    left: "text-left mr-auto",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  const baseClasses = HEADING_CONFIG.variants[variant] || HEADING_CONFIG.variants.section;
  const alignmentClasses = alignments[align] || alignments.left;
  const combinedClasses = `${baseClasses} ${alignmentClasses} ${className}`;



  const MotionTag = animate ? motion[Tag] : Tag;
  
  return (
    <MotionTag 
      className={combinedClasses} 
      variants={animate ? variants : undefined}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
