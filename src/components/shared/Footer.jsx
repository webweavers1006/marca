import Link from "next/link";
import Image from "next/image";
import { FOOTER_CONFIG } from "@/features/shared/config/footer.config";

/**
 * Site footer — Matches the 'Duna' minimal aesthetic with specific Marca País content.
 * All strings are pulled from FOOTER_CONFIG.
 */
export function Footer() {
  const { brand, contact, socials, copyright } = FOOTER_CONFIG;

  return (
    <footer role="contentinfo" id="site-footer" className="bg-secondary/15 py-16 px-6 md:px-12 w-full text-foreground">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">

        {/* Left Section: Brand & Text */}
        <div className="flex flex-col gap-6 max-w-xl">
          {/* Logo representation with Image only */}
          <div className="flex flex-col gap-4 mb-2 items-start">
            {brand.logoImage && (
              <Image 
                src={brand.logoImage} 
                alt={brand.logoText} 
                width={140} 
                height={50} 
                className="h-12 w-auto object-contain object-left opacity-90"
              />
            )}
          </div>

          {/* Main Title with mixed colors */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight whitespace-pre-line leading-tight mt-2">
            {brand.title.map((segment, index) => (
              <span key={index} className={segment.highlight ? "text-primary" : ""}>
                {segment.text}
              </span>
            ))}
          </h2>

          <p className="text-sm md:text-base opacity-80 mt-2">
            {brand.subtitle}
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {socials.map((social) => {
              const Icon = social.icon;
              const socialColors = {
                instagram: "bg-social-instagram",
                youtube: "bg-social-youtube",
                twitter: "bg-social-twitter",
              };

              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className={`${socialColors[social.id] || "bg-foreground"} text-white p-3 rounded-md hover:opacity-90 transition-opacity`}
                  aria-label={social.name}
                >
                  <Icon size={24} />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right Section: Contact Info */}
        <div className="flex flex-col pt-8 lg:pt-0 lg:ml-auto w-full lg:w-auto">
          <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold mb-8 opacity-40">
            {contact.title}
          </h3>

          <div className="flex flex-col sm:flex-row gap-12 lg:gap-24">
            {contact.columns.map((col) => (
              <div key={col.id} className="flex flex-col gap-10">
                {col.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-3 text-sm">
                    <span className={`text-[10px] tracking-widest uppercase font-bold opacity-30 ${item.isHiddenLabel ? 'hidden' : ''}`}>
                      {item.label}
                    </span>
                    <span className="whitespace-pre-line leading-relaxed font-medium opacity-80 text-base">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-24 pt-6 border-t border-primary/10 text-xs opacity-50 flex justify-center text-center">
        <p>
          © {copyright.year} {copyright.holder}. {copyright.text}
        </p>
      </div>
    </footer>
  );
}
