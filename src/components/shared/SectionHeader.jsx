"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Heading } from "@/components/shared/Heading";
import {
  sectionContainerVariants,
  sectionItemVariants,
} from "@/features/shared/config/animations.config";

/**
 * SectionHeader — Unified heading block for all landing sections.
 * Replaces ConcursoHeader, CronogramaHeader, FasesHeader, JuradoHeader, CountryBrandHeader.
 *
 * @param {{
 *   label: string,
 *   title: string,
 *   theme: object,
 *   highlights?: string[],
 *   subtitle?: string,
 *   variant?: "dark" | "light",
 *   align?: "left" | "center" | "right",
 *   animate?: boolean,
 *   id?: string,
 *   className?: string,
 * }} props
 */
export function SectionHeader({
  label,
  title,
  theme,
  highlights = [],
  subtitle,
  variant = "dark",
  align = "left",
  animate = false,
  id,
  className = "",
}) {
  const isDark = variant === "dark";

  const labelVariant = isDark ? "inverse" : "default";
  const textColor = isDark ? "text-foreground-inverse" : "text-foreground";
  const subtitleColor = isDark
    ? "text-foreground-inverse/80"
    : "text-muted-foreground";

  const alignMap = { left: "", center: "text-center", right: "text-right" };
  const labelAlignMap = {
    left: "",
    center: "justify-center",
    right: "justify-end",
  };

  const alignClass = alignMap[align] || "";
  const labelAlignClass = labelAlignMap[align] || "";
  const headingAlign = align === "right" ? "right" : align;

  const Wrapper = animate ? motion.div : "div";
  const wrapperProps = animate
    ? {
        variants: sectionContainerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.2 },
      }
    : {};

  /**
   * Highlights matching words in the title using theme accent color.
   * Supports multiple highlight strings via regex split.
   */
  function renderTitle() {
    if (!highlights.length) return title;

    const escaped = highlights.map((h) =>
      String(h).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );
    const pattern = new RegExp(`(${escaped.join("|")})`, "gi");
    const parts = title.split(pattern);

    return parts.map((part, i) =>
      highlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
        <span
          key={i}
          className={`font-bold ${theme?.accentText || ""} transition-colors duration-500`}
        >
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  }

  return (
    <Wrapper
      {...wrapperProps}
      className={`${alignClass} ${className}`}
    >
      <div className={`flex ${labelAlignClass}`}>
        <SectionLabel
          label={label}
          variant={labelVariant}
          animate={animate}
          className="mb-6"
        />
      </div>

      <Heading
        as="h2"
        variant="section"
        align={headingAlign}
        animate={animate}
        id={id}
        className={`${textColor} ${subtitle ? "mb-6" : ""}`}
      >
        {renderTitle()}
      </Heading>

      {subtitle &&
        (animate ? (
          <motion.p
            variants={sectionItemVariants}
            className={`text-base md:text-lg ${subtitleColor} leading-relaxed`}
          >
            {subtitle}
          </motion.p>
        ) : (
          <p
            className={`text-base md:text-lg ${subtitleColor} leading-relaxed`}
          >
            {subtitle}
          </p>
        ))}
    </Wrapper>
  );
}
