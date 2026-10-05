import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const newsreader = Newsreader({ variable: "--font-newsreader", subsets: ["latin"], style: ["normal", "italic"] });

// Cambia SITE_URL en Vercel (variable NEXT_PUBLIC_SITE_URL) cuando tengas dominio propio.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://diego-rivas.vercel.app";
const titulo = "Diego Rivas — Desarrollador full-stack freelance";
const descripcion = "Construyo webs y apps que convierten procesos en herramientas simples. Arequipa, Perú · trabajo remoto.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: titulo,
  description: descripcion,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "/",
    siteName: "Diego Rivas",
    title: titulo,
    description: descripcion,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Diego Rivas — Desarrollador full-stack freelance" }],
  },
  twitter: { card: "summary_large_image", title: titulo, description: descripcion, images: ["/og.jpg"] },
};

export const viewport: Viewport = { themeColor: "#f6f4ef" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geist.variable} ${geistMono.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
