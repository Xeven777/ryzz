import { Funnel_Sans, Space_Mono } from "next/font/google";

export const funnel = Funnel_Sans({
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "system-ui", "sans-serif"],
});

export const mono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  fallback: ["monospace"],
  weight: ["400", "700"],
});
