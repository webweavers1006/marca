import localFont from "next/font/local";
import { Inter } from "next/font/google";

/**
 * MADE TOMMY font configuration
 * Primary brand font with multiple weights
 */
export const madeTommy = localFont({
  src: [
    {
      path: "../../../assets/fonts/made_tommy/MADE TOMMY Thin_PERSONAL USE.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../../assets/fonts/made_tommy/MADE TOMMY Light_PERSONAL USE.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../assets/fonts/made_tommy/MADE TOMMY Regular_PERSONAL USE.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../assets/fonts/made_tommy/MADE TOMMY Medium_PERSONAL USE.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../assets/fonts/made_tommy/MADE TOMMY Bold_PERSONAL USE.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../assets/fonts/made_tommy/MADE TOMMY ExtraBold_PERSONAL USE.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../../assets/fonts/made_tommy/MADE TOMMY Black_PERSONAL USE.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-made-tommy",
  display: "swap",
});

/**
 * MADE TOMMY Outline font configuration
 * Used for specific stylistic headings
 */
export const madeTommyOutline = localFont({
  src: [
    {
      path: "../../../assets/fonts/made_tommy/MADE TOMMY Regular Outline_PERSONAL USE.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../assets/fonts/made_tommy/MADE TOMMY Bold Outline_PERSONAL USE.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../assets/fonts/made_tommy/MADE TOMMY Black Outline_PERSONAL USE.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-made-tommy-outline",
  display: "swap",
});

/**
 * Inter font configuration
 * Primary body & UI font — optimized for readability at small sizes
 */
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
