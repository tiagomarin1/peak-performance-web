"use client";

import { m } from "framer-motion";
import {
  ClipboardCheck,
  Target,
  Layers,
  Gauge,
  ShieldCheck,
  Users,
} from "lucide-react";

const BENEFICIOS = [
  {
    icon: ClipboardCheck,
    title: "Evaluación inicial",
    desc: "Arrancás con criterio, no con algo genérico.",
  },
  {
    icon: Layers,
    title: "Entrenamiento estructurado",
    desc: "Cada sesión tiene lógica y progresión real.",
  },
  {
    icon: Gauge,
    title: "Calidad técnica",
    desc: "Buscamos rendir mejor sin romperte.",
  },
  {
    icon: Target,
    title: "Adaptado a tu objetivo",
    desc: "Se ajusta a tu deporte, nivel y contexto.",
  },
  {
    icon: ShieldCheck,
    title: "Prevención integrada",
    desc: "Movilidad, estabilidad y fuerza dentro del proceso.",
  },
  {
    icon: Users,
    title: "Entorno profesional",
    desc: "Un espacio serio para entrenar con intención.",
  },
] as const;

export default function Beneficios() {
  return (
    <section id="beneficios" className="relative py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="section-label">BENEFICIOS</p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Qué te encontrás cuando entrenás en Peak.
            </h2>

            <p className="mt-4 text-white/70">
              Un sistema claro, un entorno serio y una forma de entrenar pensada
              para progresar de verdad.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {BENEFICIOS.map((b) => {
                const Icon = b.icon;

                return (
                  <m.article
                    key={b.title}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(var(--peak),0.25)] bg-[rgba(var(--peak),0.10)]">
                        <Icon className="h-5 w-5 text-[rgb(var(--peak))]" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-white">
                          {b.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/70">
                          {b.desc}
                        </p>
                      </div>
                    </div>
                  </m.article>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5 text-sm text-white/70">
              Peak está pensado para quienes quieren entrenar mejor, no solamente
              entrenar más.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}