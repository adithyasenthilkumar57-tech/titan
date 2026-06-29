import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buckler | Make your gym incomparable",
  description: "We are a complete ecosystem of high-quality fitness solutions. We offer high-standard equipment and a variety of services to build your gym from scratch.",
  openGraph: {
    title: "Buckler | Make your gym incomparable",
    description: "We are a complete ecosystem of high-quality fitness solutions.",
    images: ["https://cdn.prod.website-files.com/64bc1e3a2013e5d1f0ded954/64ddff69e4c1cd47c00e8875_buckler_open.jpg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
