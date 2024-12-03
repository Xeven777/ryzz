import type { Metadata, Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";
import "./globals.css";
import Clarity from "@/components/Clarity";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Ryzz",
  description: "Send Anonymous Messages to your Friends!",
  metadataBase: new URL("https://ryzz.vercel.app"),
  authors: [
    {
      name: "Anish",
      url: "https://anish7.me",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ryzz.vercel.app",
    images: [
      {
        url: "https://i.imgur.com/sRWGpL3l.png",
        width: 1200,
        height: 630,
        alt: "Ryzz",
      },
    ],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};
export const viewport: Viewport = {
  themeColor: "#744FEE",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
};
const myFont = localFont({
  src: "./assets/BeatifulVibes.ttf",
  display: "swap",
  variable: "--font-vibes",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          variables: { colorPrimary: "#6C47FF" },
        }}
      >
        <Clarity />
        <body>{children}</body>
        <Toaster richColors theme="light" />
      </ClerkProvider>
    </html>
  );
}
