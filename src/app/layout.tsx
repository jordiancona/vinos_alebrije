import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vinosalebrije.com"),
  title: "Vinos Alebrije | Arte • Tierra • Vino | Vino Frizzante Chile",
  description:
    "Descubre Vinos Alebrije: Vino frizzante artesanal nacido al pie de los Andes, Chile. Arte, tierra y vino en cada burbuja. Despierta tu espíritu.",
  keywords: [
    "Vinos Alebrije",
    "Vino Frizzante",
    "Vino Artesanal Chile",
    "Vino Espumoso",
    "Baja Grado Frizzante",
    "Vino Chileno",
    "Arte Tierra Vino",
  ],
  openGraph: {
    title: "Vinos Alebrije | Arte • Tierra • Vino",
    description: "Vino frizzante artesanal chileno. Despierta tu espíritu con el equilibrio perfecto entre arte y tierra.",
    url: "https://instagram.com/vinos_alebrije",
    siteName: "Vinos Alebrije",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Vinos Alebrije - Viñedos en la Cordillera de los Andes",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#0b0809] text-[#f5f2f0] antialiased selection:bg-[#881632] selection:text-[#f7e2a9]">
        {children}
      </body>
    </html>
  );
}
