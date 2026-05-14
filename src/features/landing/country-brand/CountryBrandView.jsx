"use client";

import { motion } from "framer-motion";
import { COUNTRY_BRAND_CONTENT } from "./config/country-brand.content.config";
import { COUNTRY_BRAND_CONFIG } from "./config/country-brand.config";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SectionDescription } from "@/components/shared/SectionDescription";
import { AccentCharacter } from "@/components/shared/AccentCharacter";
import { SectionLayout } from "@/components/shared/SectionLayout";
import { DecorativeCircles } from "@/components/shared/DecorativeCircles";
import { SectionBackground } from "@/components/shared/SectionBackground";
import { Container } from "@/components/shared/Container";
import { BRAND_THEMES } from "@/features/shared/config/theme.config";
import { sectionContainerVariants } from "@/features/shared/config/animations.config";
import { useSectionObserver } from "@/features/shared/hooks/use-section-observer";

/** CountryBrand module — Green/Quinary for accents */
const MODULE_THEME = BRAND_THEMES[4];

/**
 * CountryBrandView — "Marca País Venezuela" section.
 * Light variant, cream background, dark text. Header left, content right.
 */
export function CountryBrandView() {
  const { label, sectionId, titulo, tituloHighlights, descripcion, backgroundAlt } =
    COUNTRY_BRAND_CONTENT;
  const { layout, decorative, headerAlign, background, variant } = COUNTRY_BRAND_CONFIG;
  const sectionRef = useSectionObserver("/#" + sectionId, { threshold: 0.3 });

  return (
    <section
      id={sectionId}
      ref={sectionRef}
      aria-labelledby="marca-pais-heading"
      className="relative overflow-hidden bg-background text-foreground"
    >
      {/* Optional Background Image */}
      <SectionBackground
        src={background.src}
        alt={backgroundAlt}
        themeBg="bg-background"
        overlayClass={background.overlayClass}
        enabled={background.enabled}
      />

      {/* Decorative Brand Accent (ghost text watermark) */}
      <AccentCharacter
        char={decorative.accentChar}
        className="top-[10%] right-0 translate-x-[20%] opacity-10"
      />

      {/* Decorative circles */}
      <DecorativeCircles circles={decorative.circles} />

      <Container>
        <motion.div
          variants={sectionContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative z-10 w-full"
        >
          <SectionLayout
            layout={layout}
            gridCols="lg:grid-cols-[55fr_45fr]"
            header={
              <SectionHeader
                label={label}
                title={titulo}
                highlights={tituloHighlights}
                theme={MODULE_THEME}
                variant={variant}
                align={headerAlign}
                animate={true}
                id="marca-pais-heading"
              />
            }
          >
            <div className="flex flex-col gap-10 w-full">
              <SectionDescription
                variant={variant}
                animate
                align={headerAlign}
                maxWidth="max-w-none"
              >
                {descripcion}
              </SectionDescription>
            </div>
          </SectionLayout>
        </motion.div>
      </Container>
    </section>
  );
}
