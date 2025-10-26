import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Load your fonts properly using next/font/google
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amit Kumar Dwivedi - Full Stack Developer",
  description:
    "Portfolio of Amit Kumar Dwivedi, a Full Stack Developer specializing in MERN stack with expertise in Next.js, React, Node.js, and modern web technologies.",
  keywords:
    "Full Stack Developer, MERN Stack, Next.js, React, Node.js, TypeScript, Portfolio, GTA Theme",
  authors: [{ name: "Amit Kumar Dwivedi" }],
};

export const viewport = {
  'inline-size': "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
