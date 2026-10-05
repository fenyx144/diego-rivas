import type { Metadata, Viewport } from "next";
import { DM_Mono, Instrument_Serif, Source_Sans_3 } from "next/font/google";
import "./globals.css";

// Serif con carácter para titulares; sans limpia para cuerpo; mono para etiquetas.
const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});
const sans = Source_Sans_3({
  variable: "--font-sans-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
const mono = DM_Mono({
  variable: "--font-mono-body",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://diego-rivas.vercel.app";
const titulo = "Diego Rivas Revilla — Desarrollo de software para negocios";
const descripcion =
  "Aplicaciones web, apps móviles con Flutter y automatizaciones con IA que reducen trabajo manual y errores. Arequipa, Perú · remoto.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: titulo,
  description: descripcion,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "/",
    siteName: "Diego Rivas Revilla",
    title: titulo,
    description: descripcion,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Diego Rivas Revilla" }],
  },
  twitter: { card: "summary_large_image", title: titulo, description: descripcion, images: ["/og.jpg"] },
};

export const viewport: Viewport = { themeColor: "#f7f4ec" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
