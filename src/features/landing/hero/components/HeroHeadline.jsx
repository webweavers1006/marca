"use client";

import { motion } from "framer-motion";
import { heroItemVariants } from "../config/hero.animations.config";
import { Typewriter } from "@/components/shared/Typewriter";
import { Heading } from "@/components/shared/Heading";


/**
 * HeroHeadline — the main title of the hero rendered in two lines.
 * Uses MADE TOMMY Bold with tighter tracking for a unified, modern look.
 * Line 2 features a typewriter effect with a primary background highlight.
 * @param {{ titleLine1: string, titleLine2: string }} props
 */
export function HeroHeadline({ titleLine1, titleLine2 }) {
  return (
    <Heading
      as="h1"
      variant="hero"
      animate
      variants={heroItemVariants}
      className="text-foreground mb-5 relative z-10"
    >
      <span className="block text-foreground-inverse">{titleLine1}</span>

      <span className="inline-block text-primary whitespace-nowrap">
        <Typewriter text={titleLine2} loop={true} />
      </span>
    </Heading>
  );
}
