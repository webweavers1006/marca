"use client";

import { motion } from "framer-motion";
import { heroItemVariants } from "../config/hero.animations.config";
import { SectionLabel } from "@/components/shared/SectionLabel";


/**
 * HeroLabel — eyebrow/badge text above the main headline.
 * Renders the institution label with a subtle separator line (Duna style).
 * @param {{ label: string }} props
 */
export function HeroLabel({ label }) {
  return (
    <SectionLabel 
      label={label} 
      variant="hero" 
      animate 
      variants={heroItemVariants}
      className="mb-4 md:mb-8" 
    />


  );
}
