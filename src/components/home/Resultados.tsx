"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { Zap, Gauge, HeartPulse, ShieldCheck } from "lucide-react";

type ResultCard = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const RESULTS: ResultCard[] = [
  {
    title: "Más potencia",
    description:
      "Sentirte más explosivo en saltos, arranques y gestos propios de tu deporte.",
    icon: Zap,
  },
  {
    title: "Más velocidad",
    description:
      "Moverte mejor, acelerar mejor y responder con más calidad en cancha.",
    icon: Gauge,
  },
  {
    title: "Más capacidad para sostener esfuerzo",
    description:
      "Rendir con más consistencia sin sentir que te apagás a mitad del trabajo.",
    icon: HeartPulse,
  },
  {
    title: "Menor riesgo de lesión",
    description:
      "Entrenar con mejor base, más control y una progresión que tenga sentido.",
    icon: ShieldCheck,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function Resultados() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="resultados" className="relative py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <m.div
              className="lg:col-span-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="section-label">RESULTADOS</p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Lo que se nota cuando entrenás con método.
              </h2>

              <p className="mt-4 text-white/70">
                En Peak no buscamos cansarte por cansarte. Buscamos que te muevas
                mejor, rindas mejor y sostengas ese progreso en el tiempo.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/80">
                  Más estructura. Más control. Mejor transferencia al rendimiento
                  real.
                </p>
              </div>

              <div className="mt-6">
                <a
                  href="#contacto"
                  className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-[rgba(var(--peak),0.4)] hover:text-[rgb(var(--peak))]"
                >
                  Consultar
                </a>
              </div>
            </m.div>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {RESULTS.map((item, idx) => {
                  const Icon = item.icon;

                  return (
                    <m.article
                      key={item.title}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: "-120px" }}
                      transition={{
                        duration: 0.55,
                        ease: "easeOut",
                        delay: idx * 0.06,
                      }}
                      whileHover={{ y: -4 }}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 transition will-change-transform"
                    >
                      <div className="flex items-start gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl border border-[rgba(var(--peak),0.25)] bg-[rgba(var(--peak),0.10)] text-[rgb(var(--peak))]">
                          <Icon className="h-5 w-5" />
                        </span>

                        <div className="min-w-0">
                          <h3 className="text-base font-semibold text-white">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-white/70">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </m.article>
                  );
                })}
              </div>

              <m.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="mt-4 rounded-2xl border border-white/10 bg-black/40 p-5"
              >
                <div className="grid gap-3 sm:grid-cols-3">
                  <div>
                    <p className="text-xs text-white/60">Método</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Evaluación + estructura
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-white/60">Proceso</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Carga y progresión
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-white/60">Objetivo</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Rendimiento sostenible
                    </p>
                  </div>
                </div>
              </m.div>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}