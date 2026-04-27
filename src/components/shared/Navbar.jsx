"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, Fragment } from "react";
import { Menu, X, Globe } from "lucide-react";
import { MAIN_NAV_LINKS } from "@/features/shared/config/routes.config";
import { SITE_CONFIG } from "@/features/shared/config/site.config";
import { NAVBAR_CONFIG } from "@/features/shared/config/navbar.config";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MobileMenu } from "./MobileMenu";
import { useScrollThreshold } from "@/features/shared/hooks/use-scroll-threshold";
import { BrandIcon } from "./BrandIcon";
import { useActiveTheme } from "@/components/shared/providers/active-theme-provider";
import { useAppNavigation } from "@/features/shared/hooks/use-app-navigation";

/**
 * Premium Navigation Bar using native CSS sticky positioning and Shadcn UI.
 * Features: Sticky glassmorphism, Shadcn Navigation Menu, and premium CTA.
 * Uses brand tokens: cream, ink, border.
 */
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollThreshold("viewport", NAVBAR_CONFIG.scrollThreshold || 80);
  const { activeSection, setActiveSection, activeTheme } = useActiveTheme();
  const { navigateToSection } = useAppNavigation();

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 ease-in-out bg-transparent",
        isScrolled ? "py-1 bg-foreground/60" : "py-2"
      )}
      role="banner"
    >
      <nav
        className="container mx-auto px-6 flex items-center justify-between"
        aria-label={NAVBAR_CONFIG.navAriaLabel}
      >
        {/* Left: Logo */}
        <Link
          href="/"
          onClick={() => setActiveSection("/")}
          className="flex items-center gap-2 group transition-transform hover:scale-105"
          aria-label={NAVBAR_CONFIG.logoAriaLabel}
        >
          {NAVBAR_CONFIG.logo?.useImage ? (
            <Image
              src={NAVBAR_CONFIG.logo.src}
              alt={NAVBAR_CONFIG.logo.alt}
              width={NAVBAR_CONFIG.logo.width}
              height={NAVBAR_CONFIG.logo.height}
              className={NAVBAR_CONFIG.logo.className || "object-contain w-[150px] h-[100px]"}
              priority
            />
          ) : (
            <BrandIcon
              icon={NAVBAR_CONFIG.logo.component}
              className={cn(
                NAVBAR_CONFIG.logo.className || "object-contain w-[150px] h-[60px]",
                "transition-colors duration-500 text-foreground-inverse"
              )}
            />
          )}
        </Link>

        {/* Center: Main Links (Desktop) - Using Shadcn NavigationMenu */}
        <div className="hidden nav:block">
          <NavigationMenu>
            <NavigationMenuList className="bg-foreground-inverse/70 p-2 rounded-full gap-4 border border-white/10">
              {MAIN_NAV_LINKS.map((link, index) => {
                const isActive = activeSection === link.href;

                return (
                  <Fragment key={link.href}>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        render={
                          <Link
                            href={link.href}
                            aria-current={isActive ? "page" : undefined}
                            onClick={() => navigateToSection(link.href)}
                            className={cn(
                              "inline-flex h-auto w-max items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
                              "bg-transparent text-foreground rounded-full px-4 py-2 transition-all border-none focus:outline-none",
                              !isActive && link.theme?.navHover,
                              isActive && link.theme?.navActive
                            )}
                          >
                            {link.label}
                          </Link>
                        }
                      />
                    </NavigationMenuItem>
                    {index < MAIN_NAV_LINKS.length - 1 && (
                      <div className="w-1 h-1 bg-foreground/30 rounded-full self-center" aria-hidden="true" />
                    )}
                  </Fragment>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right: CTA Button (Desktop) - Using Shadcn Button */}
        <div className="hidden nav:block">
          <Button
            render={<Link href={NAVBAR_CONFIG.cta.href} />}
            nativeButton={false}
            variant="ghost"
            className={cn(
              "h-auto px-6 py-3 text-sm rounded-3xl font-semibold transition-all active:scale-95 shadow-sm hover:opacity-90 bg-foreground-inverse text-foreground hover:bg-foreground-inverse/90",
            )}
          >
            {NAVBAR_CONFIG.cta.label}
          </Button>
        </div>

        {/* Mobile: Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          className={cn(
            "nav:hidden p-2 rounded-lg transition-colors text-foreground-inverse hover:bg-foreground-inverse/10",
          )}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? NAVBAR_CONFIG.hamburger.closeLabel : NAVBAR_CONFIG.hamburger.openLabel}
          id="navbar-hamburger-btn"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </header>
  );
}





