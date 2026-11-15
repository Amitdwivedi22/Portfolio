import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { profile } from "@/content/portfolio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
});

const pageTitle = `${profile.name} | ${profile.positioning}`;
const description = `${profile.name}: Software Engineer in ${profile.locations}, open-source contributor to openSUSE DocBuild, and B.Tech student at ${profile.university}, graduating in ${profile.graduation}.`;

export const metadata: Metadata = {
  title: pageTitle,
  description,
  keywords:
    "Amit Kumar Dwivedi, Software Engineer, Bengaluru, Next.js, TypeScript, Python",
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: profile.name,
    title: pageTitle,
    description,
  },
  twitter: { card: "summary", title: pageTitle, description },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
