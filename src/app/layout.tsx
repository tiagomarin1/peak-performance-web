import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import Providers from "./providers";
import BackgroundFX from "@/components/BackgroundFX";

const SITE_URL = "https://peakperformance.com.ar"; // IMPORTANTE: agregar dominio real
const MAPS_URL = "https://maps.app.goo.gl/i3wyMMCQiMhcCupD8";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Peak Performance | Centro de Entrenamiento de Alto Rendimiento",
    template: "%s | Peak Performance",
  },

  description:
    "Centro de entrenamiento en Villa Santa Rita (CABA). Fuerza, rendimiento y prevención de lesiones con evaluación inicial y seguimiento real.",

  keywords: [
    "entrenamiento personalizado",
    "alto rendimiento deportivo",
    "preparación física",
    "entrenamiento de fuerza",
    "gimnasio alto rendimiento",
    "evaluación física deportiva",
    "entrenamiento villa santa rita",
    "entrenamiento caba",
    "entrenamiento capital federal",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Peak Performance | Entrenamiento de Alto Rendimiento",
    description:
      "Entrená con estructura, progresión y métricas reales. Fuerza, potencia y prevención con planificación profesional.",
    url: SITE_URL,
    siteName: "Peak Performance",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/brand/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Peak Performance - Entrenamiento de alto rendimiento en CABA",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Peak Performance | Alto Rendimiento",
    description:
      "Centro de entrenamiento en Villa Santa Rita (CABA). Fuerza, rendimiento y prevención con planificación profesional.",
    images: ["/brand/hero.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Coordenadas extraídas del embed
  const GEO = {
    lat: -34.61723527283659,
    lng: -58.48180268792413,
  };

  // Dirección (lo dejamos genérico si no querés publicar calle/número todavía)
  const ADDRESS = {
    "@type": "PostalAddress",
    addressLocality: "Villa Santa Rita",
    addressRegion: "CABA",
    addressCountry: "AR",
  };

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SportsActivityLocation",
      "@id": `${SITE_URL}/#sports-location`,
      name: "Peak Performance",
      url: SITE_URL,
      description:
        "Centro de entrenamiento enfocado en rendimiento, fuerza y prevención de lesiones. Evaluación inicial y seguimiento real.",
      areaServed: "Villa Santa Rita, CABA",
      hasMap: MAPS_URL,
      address: ADDRESS,
      geo: {
        "@type": "GeoCoordinates",
        latitude: GEO.lat,
        longitude: GEO.lng,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#local-business`,
      name: "Peak Performance",
      url: SITE_URL,
      description:
        "Centro de entrenamiento en Villa Santa Rita (CABA). Planificación profesional, evaluación inicial y seguimiento.",
      hasMap: MAPS_URL,
      address: ADDRESS,
      geo: {
        "@type": "GeoCoordinates",
        latitude: GEO.lat,
        longitude: GEO.lng,
      },
      // telephone: "+54 9 11 xxxx-xxxx",
      // priceRange: "$$",
    },
  ];

  return (
    <html lang="es">
      <body className="min-h-screen bg-black text-white antialiased relative isolate">
        {/* ✅ Fondo premium: energía + Nike style (sutil, performant) */}
        <BackgroundFX />

        <Providers>
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
          <FloatingCTA />

          {/* SEO: Schema JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </Providers>
      </body>
    </html>
  );
}
