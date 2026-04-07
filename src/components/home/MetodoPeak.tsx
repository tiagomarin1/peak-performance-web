"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Evaluación Inicial",
    description:
      "Definimos el punto de partida con pruebas de fuerza, control y capacidad. Las decisiones se toman con datos.",
  },
  {
    number: "02",
    title: "Planificación personalizada",
    description:
      "Cada atleta tiene un plan adaptado a su deporte, objetivo y contexto. No hay plantillas genéricas.",
  },
  {
    number: "03",
    title: "Seguimiento y ajuste",
    description:
      "Se monitorea el progreso de forma constante para ajustar cargas y garantizar evolución real.",
  },
  {
    number: "04",
    title: "Monitoreo con tecnología",
    description:
      "Medimos potencia, saltos, fuerza y velocidad para tomar decisiones con datos objetivos.",
  },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function MetodoPeak() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          
          <m.header
            className="max-w-2xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="section-label">Método</p>

            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              ¿Cómo se trabaja en Peak?
            </h2>

            <p className="mt-4 text-white/70">
              Entrenamiento estructurado, medible y progresivo.
            </p>
          </m.header>

          {/* CARDS */}
          <div className="mt-16 grid gap-12 md:grid-cols-2">
            {STEPS.map((step, idx) => (
              <m.div
                key={step.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-120px" }}
                transition={{
                  duration: 0.55,
                  ease: "easeOut",
                  delay: idx * 0.08,
                }}
                whileHover={{ y: -4 }}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-8"
              >
                <span className="absolute right-6 top-6 text-5xl font-bold text-white/10">
                  {step.number}
                </span>

                <h3 className="text-lg font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {step.description}
                </p>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </m.div>
            ))}
          </div>

          {/* TEXTO FINAL */}
          <m.div
            className="mt-16 max-w-3xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <p className="text-sm leading-relaxed text-white/70">
              El trabajo en Peak complementa el entrenamiento en el club.
              Se gestionan y ajustan las cargas para potenciar el rendimiento
              dentro de la cancha, evitando sobrecargas y optimizando cada sesión.
            </p>
          </m.div>

        </div>
      </section>
    </LazyMotion>
  );
}