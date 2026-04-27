import { Toaster } from "sonner";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { SITE_CONFIG } from "@/features/shared/config/site.config";
import { madeTommy, madeTommyOutline, inter } from "@/features/shared/config/fonts.config";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ActiveThemeProvider } from "@/components/shared/providers/active-theme-provider";
import "./globals.css";

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
    <html lang="es" className={`${madeTommy.variable} ${madeTommyOutline.variable} ${inter.variable}`}>
      <body className="antialiased">
        <ActiveThemeProvider>
          <Navbar />
          <SpeedInsights />
          <main id="main-content" role="main">
            {children}
          </main>
          <Footer />
          <Toaster
            position={SITE_CONFIG.toaster.position}
            richColors
            toastOptions={{
              style: {
                fontFamily: "var(--font-made-tommy)",
                fontSize: SITE_CONFIG.toaster.fontSize,
              },
            }}
          />
        </ActiveThemeProvider>
      </body>
    </html>
  );
}
