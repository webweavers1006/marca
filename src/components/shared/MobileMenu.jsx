"use client";

import Link from "next/link";
import { useActiveLink } from "@/features/shared/hooks/use-active-link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MAIN_NAV_LINKS } from "@/features/shared/config/routes.config";
import { NAVBAR_CONFIG } from "@/features/shared/config/navbar.config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Mobile Navigation Menu Overlay.
 * Extracted for SOLID compliance and cleaner Navbar.
 * 
 * @param {Object} props
 * @param {boolean} props.isOpen - Whether the menu is open.
 * @param {Function} props.onClose - Callback to close the menu.
 */
export function MobileMenu({ isOpen, onClose }) {
  const { isLinkActive, setCurrentHash } = useActiveLink();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl nav:hidden overflow-hidden"
        >
          <ul className="flex flex-col p-6 gap-4" role="list">
            {MAIN_NAV_LINKS.map((link) => {
              const isActive = isLinkActive(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => {
                      if (link.href.includes("#")) {
                        setCurrentHash(`#${link.href.split("#")[1]}`);
                      }
                      onClose();
                    }}
                    className={cn(
                      "block text-lg font-medium p-2 rounded-lg transition-colors",
                      isActive 
                        ? "text-secondary bg-secondary/5 font-bold" 
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-4 border-t border-border">
              <Button
                render={<Link href={NAVBAR_CONFIG.cta.href} onClick={onClose} />}
                nativeButton={false}
                className="w-full bg-secondary text-primary-foreground py-6 rounded-xl font-semibold text-lg hover:bg-secondary/90 transition-colors"
              >
                {NAVBAR_CONFIG.cta.label}
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
