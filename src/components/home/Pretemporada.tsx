"use client";

import { m, useReducedMotion } from "framer-motion";
import { CalendarDays, ChevronRight } from "lucide-react";
import ReelsGallery from "@/components/pretemporada/ReelsGallery";

const easePremium: [number, number, number, number] = [0.22, 1, 0.36, 1];

const WHATSAPP_NUMBER = "5491113797637";
const WHATSAPP_TEXT =
  "Hola! Quiero sumarme a la pretemporada OFF-SEASON (6 semanas) en Peak. ¿Me pasan fecha de arranque y cupos disponibles?";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;

type Props = {
  startLabel?: string;
  spotsLabel?: string;
};

export default function Pretemporada({
  startLabel = "Verano · Off-season",
  spotsLabel = "Cupos limitados",
}: Props) {
  const reduce = useReducedMotion();

  return (
    <section
      id="pretemporada"
      aria-labelledby="pretemporada-title"
      className="relative py-16 sm:py-20"
    >
      <div className="mx-auto mb-10 h-px w-full max-w-6xl bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-10%] h-72 w-[56rem] -translate-x-1/2 rounded-full bg-[rgba(var(--peak),0.12)] blur-3xl" />
        <div className="absolute left-1/2 bottom-[-10%] h-72 w-[56rem] -translate-x-1/2 rounded-full bg-[rgba(var(--peak),0.10)] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: easePremium }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="section-label">PRETEMPORADA</p>

              <h2
                id="pretemporada-title"
                className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
              >
                Un verano de trabajo serio para llegar mejor a la temporada.
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                La pretemporada de Peak está pensada para construir base,
                desarrollar fuerza y potencia, mejorar la velocidad y preparar el
                cuerpo para competir con más seguridad.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/75">
                  <CalendarDays className="h-4 w-4 text-white/50" />
                  {startLabel}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(var(--peak),0.35)] bg-[rgba(var(--peak),0.10)] px-3 py-1.5 text-xs font-semibold text-[rgb(var(--peak))]">
                  {spotsLabel}
                </span>
              </div>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(var(--peak),0.35)]"
            >
              Consultar cupos <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </m.div>

        <div className="mt-10">
          <ReelsGallery
            items={[
              {
                id: "s1",
                label: "Semana 1",
                title: "Semana 1 · Arranque, base y estándares",
                url: "https://instagram.com/reel/DSyZOovjhHE",
                featured: true,
              },
              {
                id: "s2",
                label: "Semana 2",
                title: "Semana 2 · Fuerza base y progresión",
                url: "https://instagram.com/reel/DTG2n7JDtNY",
              },
              {
                id: "s3",
                label: "Semana 3",
                title: "Semana 3 · Potencia transferible",
                url: "https://instagram.com/reel/DTY-Qvmjl7a",
              },
              {
                id: "spr",
                label: "Sprints",
                title: "Día de sprints · Exposición + técnica",
                url: "https://instagram.com/reel/DTRNOqbjshY",
                featured: true,
              },
              {
                id: "day",
                label: "Un día",
                title: "Un día de pretemporada · Piso real",
                url: "https://instagram.com/reel/DTlkcCaDii2",
              },
              {
                id: "s4",
                label: "Semana 4",
                title: "Semana 4 · Velocidad y mecánica",
                url: "https://instagram.com/reel/DTq2RJWDt2t",
              },
              {
                id: "s5",
                label: "Semana 5",
                title: "Semana 5 · COD, tolerancia y monitoreo",
                url: "https://instagram.com/reel/DT6ONLeDmKL",
              },
              {
                id: "s6",
                label: "Semana 6",
                title: "Semana 6 · Testeos de velocidad y saltos",
                url: "https://instagram.com/reel/DUmSZMzDn7x",
              },
            ]}
          />
        </div>

        <m.div
          className="mt-10 rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: easePremium }}
        >
          <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-medium tracking-wider text-white/60">
                CÓMO FUNCIONA
              </p>

              <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
                Seis semanas para ordenar el trabajo y llegar mejor preparado.
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                Durante el verano se trabaja sobre una base física real:
                evaluación inicial, progresión de fuerza, desarrollo de potencia,
                velocidad y re-test final para ver cómo llegaste al cierre del
                ciclo.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                El resultado no es solamente “sentirse cansado”: es llegar a la
                temporada con mejor estructura, mejor capacidad de respuesta y
                más confianza física para competir o entrenar fuerte.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">
                Qué te deja una buena pretemporada
              </p>

              <ul className="mt-4 space-y-3 text-sm text-white/75">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--peak))]" />
                  <span>Más base física para sostener la temporada</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--peak))]" />
                  <span>Más fuerza, potencia y velocidad útil</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--peak))]" />
                  <span>Menor riesgo de arrancar “duro” o mal preparado</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--peak))]" />
                  <span>Un proceso medido y mucho más profesional</span>
                </li>
              </ul>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Consultar cupos <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}