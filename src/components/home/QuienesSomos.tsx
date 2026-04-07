"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function QuienesSomos() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          
          <m.div
            className="max-w-3xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="section-label">Peak Performance</p>

            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              ¿Quiénes somos?
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Peak Performance es un centro de entrenamiento orientado al
              desarrollo de deportistas de alto rendimiento y personas que
              buscan mejorar su capacidad física con un enfoque profesional.
            </p>
          </m.div>

          <m.div
            className="mt-12 max-w-3xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-white">
              ¿Con quién trabajamos?
            </h3>

            <p className="mt-4 text-white/70 leading-relaxed">
              Trabajamos con deportistas que buscan mejorar su rendimiento,
              procesos de rehabilitación de lesiones y personas que quieren
              entrenar de forma personalizada para mejorar su salud y condición física.
            </p>
          </m.div>

        </div>
      </section>
    </LazyMotion>
  );
}