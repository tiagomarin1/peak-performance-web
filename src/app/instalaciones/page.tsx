import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Entrenamientos | Peak Performance",
  description:
    "Entrenamientos grupales, personalizados y online en Peak Performance.",
  alternates: { canonical: "/instalaciones" },
};

const WHATSAPP_NUMBER = "5491131979637";
const WHATSAPP_TEXT =
  "Hola! Quiero recibir información sobre los entrenamientos de Peak Performance.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;

export default function EntrenamientosPage() {
  return (
    <main className="pt-24 pb-20">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.18em] text-[rgb(var(--peak))] uppercase">
            Entrenamientos
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Distintas formas de entrenar, un mismo criterio profesional.
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            En Peak trabajamos con diferentes formatos según el objetivo, el
            punto de partida y el contexto de cada persona.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-[rgb(var(--peak))] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[rgb(var(--peak-hover))]"
          >
            Consultar por WhatsApp
          </a>

          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Ver contacto <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="mx-auto mt-12 h-px w-full max-w-6xl bg-white/10" />

      {/* BLOQUE 1 */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <div className="relative aspect-[4/3]">
              <Image
                src="/pretemporada/img_prete04.jpg"
                alt="Entrenamiento grupal"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.18em] text-[rgb(var(--peak))] uppercase">
              01 · Grupal
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Entrenamientos dentro del horario del centro
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
              Pensados para quienes buscan mejorar su rendimiento dentro de un
              entorno exigente, con estructura, progresión y acompañamiento.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
              Permite sostener intensidad, compartir el proceso y entrenar con
              una lógica profesional.
            </p>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="mx-auto h-px w-full max-w-6xl bg-white/10" />

      {/* BLOQUE 2 */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="text-xs tracking-[0.18em] text-[rgb(var(--peak))] uppercase">
              02 · Personalizado
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Adaptado a cada persona
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
              Ideal para quienes empiezan, vuelven a entrenar o están en
              rehabilitación.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
              Se ajusta a tu punto de partida, limitaciones y objetivos.
            </p>
          </div>

          <div className="order-1 lg:order-2 relative overflow-hidden rounded-2xl border border-white/10">
            <div className="relative aspect-[4/3]">
              <Image
                src="/pretemporada/img_prete01.jpg"
                alt="Entrenamiento personalizado"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="mx-auto h-px w-full max-w-6xl bg-white/10" />

      {/* BLOQUE 3 */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <div className="relative aspect-[4/3]">
              <Image
                src="/entrenamientos/entrenamientoonlinepeak.png"
                alt="Entrenamiento online"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.18em] text-[rgb(var(--peak))] uppercase">
              03 · Online
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Programa personalizado con seguimiento online
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
              Plan de entrenamiento adaptado a tu contexto, con seguimiento
              continuo.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
              Incluye posibilidad de entrenar presencialmente para ajustes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-xl font-semibold text-white">
            Elegí el formato que mejor se adapte a vos
          </h3>

          <p className="mt-3 text-sm text-white/70">
            El objetivo cambia, el criterio de trabajo no.
          </p>

          <div className="mt-6">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[rgb(var(--peak))] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[rgb(var(--peak-hover))]"
            >
              Consultar entrenamiento
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}