"use client";

import { m, useReducedMotion } from "framer-motion";
import { CalendarDays, ChevronRight, ImageIcon } from "lucide-react";
import ReelsGallery from "@/components/pretemporada/ReelsGallery";

const easePremium: [number, number, number, number] = [0.22, 1, 0.36, 1];

const WHATSAPP_NUMBER = "5491131979637";
const WHATSAPP_TEXT =
  "Hola! Quiero sumarme a la pretemporada en Peak. Me gustaría recibir mas info.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;

type Props = {
  startLabel?: string;
  spotsLabel?: string;
};

export default function Pretemporada({
  startLabel = "Verano · Pretemporada",
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
        <div className="absolute bottom-[-10%] left-1/2 h-72 w-[56rem] -translate-x-1/2 rounded-full bg-[rgba(var(--peak),0.10)] blur-3xl" />
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
                Un bloque de trabajo serio para llegar mejor a la temporada.
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
                title: "Semana 1 · Mediciones de fuerza",
                url: "https://instagram.com/reel/DSyZOovjhHE",
                featured: true,
              },
              {
                id: "s2",
                label: "Semana 2",
                title: "Semana 2 · Progreso",
                url: "https://instagram.com/reel/DTG2n7JDtNY",
              },
              {
                id: "s3",
                label: "Semana 3",
                title: "Semana 3 · Mayor rendimiento",
                url: "https://instagram.com/reel/DTY-Qvmjl7a",
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
                Un proceso pensado para llegar mejor preparado al inicio de la
                temporada.
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                Durante este bloque se trabaja sobre una base física real:
                desarrollo de fuerza, potencia, velocidad y control de cargas
                para llegar en mejores condiciones al deporte.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                El objetivo no es solamente entrenar más, sino entrenar con
                criterio para construir una mejor base física y rendir mejor en
                cancha.
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
                  <span>Menor riesgo de arrancar mal preparado</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--peak))]" />
                  <span>Un proceso mucho más profesional y ordenado</span>
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

        {/* IMAGENES */}
        <m.div
          className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: easePremium }}
        >
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-wider text-[rgb(var(--peak))]">
              IMÁGENES
            </p>

            <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Imágenes de la pretemporada
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
              Jornadas reales, trabajo en equipo y sesiones con foco en rendimiento.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              "/pretemporada/img_prete01.webp",
              "/pretemporada/img_prete02.webp",
              "/pretemporada/img_prete03.webp",
              "/pretemporada/img_prete04.webp",
              "/pretemporada/img_prete05.webp",
              "/pretemporada/img_prete06.webp",
              "/pretemporada/img_prete07.webp",
              "/pretemporada/img_prete08.webp",
              "/pretemporada/img_prete09.webp",
            ].map((src, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-xl border border-white/10"
              >
                <img
                  src={src}
                  alt="Pretemporada Peak Performance"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />

                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}