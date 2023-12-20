import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryzz",
  description: "Send Anonymous Messages to your Friends!",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ryzz.vercel.app",
    images: [
      {
        url: "https://i.imgur.com/22Bvx0El.png",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#6C47FF" },
      }}
    >
      <html lang="en">
        <body>{children}</body>
        <Toaster />
      </html>
    </ClerkProvider>
  );
}
