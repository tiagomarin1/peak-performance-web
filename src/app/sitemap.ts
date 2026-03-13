import type { MetadataRoute } from "next";

const SITE_URL = "https://peakperformance.com.ar"; // cambialo cuando tengas dominio real

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date() },
    { url: `${SITE_URL}/evaluaciones`, lastModified: new Date() },
    { url: `${SITE_URL}/equipo`, lastModified: new Date() },
    { url: `${SITE_URL}/instalaciones`, lastModified: new Date() },
    { url: `${SITE_URL}/contacto`, lastModified: new Date() },
  ];
}
// SEO