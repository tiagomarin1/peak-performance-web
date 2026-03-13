"use client";

import { m } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Evaluación Inicial",
    description:
      "Definimos el punto de partida con pruebas de fuerza, control y capacidad. Las decisiones se toman con datos.",
  },
  {
    number: "02",
    title: "Planificación por Bloques",
    description:
      "Organización estructurada según objetivo y disponibilidad. Cada sesión tiene intención y progresión.",
  },
  {
    number: "03",
    title: "Estructura Funcional",
    description:
      "Trabajo generalmente dividido en 3 bloques de 4 ejercicios combinando fuerza y potencia.",
  },
  {
    number: "04",
    title: "Seguimiento y Ajuste",
    description:
      "Re-evaluación periódica para ajustar carga y sostener progreso real.",
  },
] as const;

export default function MetodoPeak() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="max-w-2xl">
          <p className="section-label">
            Método
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            ¿Cómo se trabaja en Peak?
          </h2>

          <p className="mt-4 text-white/70">
            Entrenamiento estructurado, medible y progresivo.
          </p>
        </header>

        {/* 4 pasos */}
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {STEPS.map((step) => (
            <m.div
              key={step.number}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <span className="absolute right-6 top-6 text-5xl font-bold text-white/10">
                {step.number}
              </span>

              <h3 className="text-lg font-semibold text-white">{step.title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {step.description}
              </p>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </m.div>
          ))}
        </div>

        {/* Visual técnico */}
        <div className="mt-20 rounded-2xl border border-white/10 bg-white/5 p-8">
          <p className="text-sm font-semibold text-white">
            Estructura habitual de sesión
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { block: 1, label: "Bloque 1" },
              { block: 2, label: "Bloque 2" },
              { block: 3, label: "Bloque 3" },
            ].map((b) => (
              <div
                key={b.block}
                className="rounded-xl border border-sky-500/25 bg-black/30 p-4"
              >
                <p className="text-xs uppercase tracking-wide text-sky-300/80">
                  {b.label}
                </p>

                <ul className="mt-3 space-y-2 text-sm text-white/75">
                  <li>Ejercicio 1</li>
                  <li>Ejercicio 2</li>
                  <li>Ejercicio 3</li>
                  <li>Ejercicio 4</li>
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-white/50">
            *La selección de ejercicios y la carga se ajustan según evaluación, objetivo y disponibilidad.
          </p>
        </div>
      </div>
    </section>
  );
}
