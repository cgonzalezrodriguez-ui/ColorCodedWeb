import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Color Coded | Read piano music in color",
  description:
    "COLOR Coded turns sheet music into a color-based system to help you recognize notes faster and play with confidence.",
  icons: {
    icon: [
      { url: "/browsericon.png", type: "image/png", sizes: "32x32" },
      { url: "/browsericon.png", type: "image/png", sizes: "16x16" },
      { url: "/browsericon.png", type: "image/png", sizes: "192x192" },
      { url: "/browsericon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/browsericon.png",
    apple: [
      { url: "/browsericon.png", type: "image/png", sizes: "180x180" },
      { url: "/browsericon.png", type: "image/png", sizes: "192x192" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
