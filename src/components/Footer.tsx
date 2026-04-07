import Image from "next/image";
import Link from "next/link";
import { MapPin, MessageCircle, Instagram } from "lucide-react";

const WHATSAPP_NUMBER = "5491131979637";
const WHATSAPP_TEXT = "Hola! Quiero empezar a entrenar en Peak Performance.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;

const MAPS_URL = "https://maps.app.goo.gl/i3wyMMCQiMhcCupD8";
const INSTAGRAM_URL = "https://www.instagram.com/peak_pfm/";

const SECCIONES = [
  { href: "/pretemporada", label: "Pretemporada" },
  { href: "/equipo", label: "Equipo" },
  { href: "/instalaciones", label: "Entrenamientos" },
  { href: "/contacto", label: "Contacto" },
  { href: "/#metodo", label: "Método" },
  { href: "/#resultados", label: "Resultados" },
  { href: "/#evaluaciones", label: "Evaluaciones" },
  { href: "/#beneficios", label: "Beneficios" },
] as const;

export default function Footer() {
  const peakBg = "bg-[rgb(var(--peak))]";
  const peakBgHover = "hover:bg-[rgb(var(--peak-hover))]";
  const peakRing = "focus-visible:ring-[rgba(var(--peak),0.35)]";
  const peakText = "text-[rgb(var(--peak))]";

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/brand/isologo.webp"
                alt="Peak Performance"
                width={30}
                height={30}
              />
              <span className="text-sm font-semibold tracking-tight text-white">
                Peak Performance
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              Centro de alto rendimiento orientado a fuerza, potencia,
              prevención de lesiones y entrenamiento estructurado en Villa Santa
              Rita, CABA.
            </p>

            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <MapPin className={`h-4 w-4 ${peakText}`} />
                <span>Villa Santa Rita, CABA</span>
              </div>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-sm text-white/90 underline decoration-white/20 underline-offset-4 hover:decoration-white/60"
              >
                Ver ubicación en Google Maps
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold text-white">Secciones</p>

            <ul className="grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2">
              {SECCIONES.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold text-white">Empezá hoy</p>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm leading-relaxed text-white/80">
                Entrenamiento serio, estructura real y seguimiento para mejorar
                tu rendimiento.
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className={[
                    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-sm focus:outline-none focus-visible:ring-2",
                    peakBg,
                    peakBgHover,
                    peakRing,
                  ].join(" ")}
                >
                  <MessageCircle className="h-4 w-4" />
                  Consultar por WhatsApp
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-transparent px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/5"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Peak Performance. Todos los derechos
            reservados.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-white/50">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white/80"
            >
              Ubicación
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white/80"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}