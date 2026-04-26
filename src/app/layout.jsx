import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { SITE_CONFIG } from "@/features/shared/config/site.config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  openGraph: SITE_CONFIG.openGraph,
};

/**
 * Root layout — wraps all pages with font, Navbar, Footer and Toaster.
 * @param {{ children: React.ReactNode }} props
 */
export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <Navbar />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
        <Toaster
          position={SITE_CONFIG.toaster.position}
          richColors
          toastOptions={{
            style: {
              fontFamily: "var(--font-inter)",
              fontSize: SITE_CONFIG.toaster.fontSize,
            },
          }}
        />
      </body>
    </html>
  );
}
