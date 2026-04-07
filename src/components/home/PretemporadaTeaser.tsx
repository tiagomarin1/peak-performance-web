"use client";

import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { CalendarDays, ChevronRight, Sparkles } from "lucide-react";

const easePremium: [number, number, number, number] = [0.22, 1, 0.36, 1];

const WHATSAPP_NUMBER = "5491131979637";
const WHATSAPP_TEXT =
  "Hola! Me gustaría recibir más info sobre la pretemporada en Peak Performance.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;

export default function PretemporadaTeaser() {
  const reduce = useReducedMotion();

  return (
    <section aria-label="Teaser pretemporada" className="relative py-10 sm:py-12">
      {/* separador ultra sutil */}
      <div className="mx-auto mb-8 h-px w-full max-w-6xl bg-linear-to-r from-transparent via-white/10 to-transparent" />

      {/* glow suave */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-30%] h-64 w-[46rem] -translate-x-1/2 rounded-full bg-[rgba(var(--peak),0.12)] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: easePremium }}
          className={[
            "relative overflow-hidden rounded-2xl border border-white/10",
            "bg-gradient-to-br from-white/[0.06] via-white/[0.035] to-white/[0.02]",
            "p-5 backdrop-blur sm:p-6",
          ].join(" ")}
        >
          {/* acento editorial + micro glow */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-[rgb(var(--peak))] opacity-80" />
          <div className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[rgba(var(--peak),0.18)] blur-3xl" />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              {/* Eyebrow + Título (lo que antes faltaba) */}
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[rgb(var(--peak))]">
                VERANO EN PEAK PERFORMANCE
              </p>

              <h3 className="mt-2 text-lg font-semibold leading-tight text-white sm:text-xl">
                Pretemporada OFF-SEASON 
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-base">
                Un ciclo de 6 semanas con método y métricas. 
              </p>

              {/* Metadata pills */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/75">
                  <CalendarDays className="h-4 w-4 text-white/50" />
                  Ventana estimada: mitad de dic → comienzos de ene
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(var(--peak),0.40)] bg-[rgba(var(--peak),0.10)] px-3 py-1.5 text-xs font-semibold text-[rgb(var(--peak))] shadow-[0_0_0_1px_rgba(var(--peak),0.10)]">
                  Cupos limitados
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:self-center">
              <Link
                href="/pretemporada"
                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(var(--peak),0.35)]"
              >
                Ver pretemporada <ChevronRight className="ml-1 h-4 w-4" />
              </Link>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-transparent px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(var(--peak),0.35)]"
              >
                Consultar cupos
              </a>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}