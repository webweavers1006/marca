import Link from "next/link";
import Image from "next/image";
import { FOOTER_CONFIG } from "@/features/shared/config/footer.config";
import { BrandIcon } from "./BrandIcon";
import { cn } from "@/lib/utils";

/**
 * Site footer — Editorial, organic design system.
 * Uses a full background image with a secondary brand overlay.
 */
export function Footer() {
  const { brand, contact, socials, copyright } = FOOTER_CONFIG;

  return (
    <footer
      role="contentinfo"
      id="site-footer"
      className="relative overflow-hidden w-full bg-secondary text-foreground-inverse pb-10"
    >
      {/* Background Image Layer */}
      {FOOTER_CONFIG.background?.enabled && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src={FOOTER_CONFIG.background.src}
            alt="Fondo Footer"
            fill
            className="object-cover object-center"
            priority={false}
          />
          {/* Brand color overlay to blend the image into the UI */}
          <div className={cn("absolute inset-0 bg-secondary", FOOTER_CONFIG.background.overlayClass)} />
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto pt-24 px-8 md:px-16 flex flex-col gap-24">

        {/* Top Section: Brand Centered Layout */}
        <div className="flex flex-col items-center justify-center gap-10 w-full">

          <div className="flex flex-col md:flex-row items-center justify-center w-full px-4">
            {brand.useLogoComponent ? (
              <BrandIcon
                icon={brand.logoComponent}
                className="w-full max-w-[12rem] !h-[8rem] sm:max-w-[16rem] md:max-w-lg lg:max-w-2xl h-auto text-foreground-inverse drop-shadow-md"
              />
            ) : brand.logoImage ? (
              <Image
                src={brand.logoImage}
                alt={brand.logoText}
                width={800}
                height={200}
                className="w-full max-w-[10rem] sm:max-w-sm md:max-w-2xl lg:max-w-sm xl:max-w-sm h-auto object-contain drop-shadow-md"
              />
            ) : null}
          </div>

          {/* Subtitle with wide tracking (TU VISION, NUESTRA MARCA) */}
          <p className="text-sm md:text-base lg:text-xl font-bold uppercase tracking-[0.5em] md:tracking-[1em] text-center mt-4 drop-shadow-sm ml-[0.5em] md:ml-[1em]">
            {Array.isArray(brand.subtitle) ? (
              brand.subtitle.map((segment, index) => (
                <span key={index} className={segment.highlight ? "text-primary" : "text-foreground-inverse"}>
                  {segment.text}
                </span>
              ))
            ) : (
              brand.subtitle
            )}
          </p>

        </div>

        {/* Bottom Section: Contact & Socials (Minimalist) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 border-t border-foreground-inverse/20 pt-16 mt-8">

          <div className="flex flex-col gap-8">
            <h3 className="text-xs tracking-[0.3em] uppercase font-bold text-primary">
              {contact.title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-24">
              {contact.columns.map((col) => (
                <div key={col.id} className="flex flex-col gap-6">
                  {col.items.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      {!item.isHiddenLabel && (
                        <span className="text-[10px] tracking-widest uppercase font-bold opacity-50">
                          {item.label}
                        </span>
                      )}
                      <span className="whitespace-pre-line leading-relaxed font-medium opacity-90 text-sm md:text-base">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="p-3 rounded-full bg-foreground-inverse/10 hover:bg-foreground-inverse/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  aria-label={social.name}
                >
                  <Icon
                    size={24}
                    className="text-foreground-inverse"
                  />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-foreground-inverse/10 text-xs font-bold uppercase tracking-widest opacity-40">
          <p>
            © {copyright.year} {copyright.holder}.
          </p>
          <p>
            {copyright.text}
          </p>
        </div>

      </div>
    </footer>
  );
}
