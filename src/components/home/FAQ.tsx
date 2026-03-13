import Link from "next/link";
import { Reveal, Stagger, StaggerItem, HoverLift } from "@/components/ui/motion";

const WHATSAPP_NUMBER = "5491113797637";
const WHATSAPP_TEXT =
  "Hola! Tengo unas consultas sobre Peak Performance antes de arrancar.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;

type FAQItem = { q: string; a: string };

const FAQS: FAQItem[] = [
  {
    q: "¿Necesito experiencia previa para entrenar en Peak Performance?",
    a: "No. Ajustamos el plan a tu nivel real. Si estás arrancando, priorizamos técnica, progresión y adherencia. Si ya entrenás, optimizamos rendimiento con estructura y métricas.",
  },
  {
    q: "¿Qué pasa si vengo con una lesión o dolor recurrente?",
    a: "Primero evaluamos. Identificamos limitaciones, adaptamos cargas y trabajamos patrones/movilidad según corresponda. La idea es que progreses sin agravar molestias y con un plan seguro.",
  },
  {
    q: "¿Cuántas veces por semana se recomienda entrenar?",
    a: "Depende de tu objetivo y disponibilidad. Como base: 2–3 sesiones semanales para progresar en fuerza y composición, y 3–5 si buscás rendimiento más específico. Lo definimos en la evaluación.",
  },
  {
    q: "¿Cómo es el seguimiento?",
    a: "Hay control de carga y ajustes según tu respuesta: cómo te sentís, rendimiento en ejercicios clave y consistencia. La planificación se adapta para sostener progreso sin estancarte.",
  },
  {
    q: "¿Cuánto tarda en verse progreso?",
    a: "En general, en 3–4 semanas ya se nota mejora en técnica, energía y consistencia. Cambios fuertes en rendimiento o composición suelen verse entre 8–12 semanas, según punto de partida.",
  },
  {
    q: "¿Qué incluye la evaluación inicial?",
    a: "Objetivo e historial, revisión de movilidad/patrones y una medición base (fuerza/capacidades según tu caso). Con eso armamos el plan recomendado y los próximos pasos.",
  },
];

export default function FAQ() {
  const peakText = "text-[rgb(var(--peak))]";
  const peakBg10 = "bg-[rgba(var(--peak),0.10)]";
  const peakBg12 = "bg-[rgba(var(--peak),0.12)]";
  const peakBorder35 = "border-[rgba(var(--peak),0.35)]";

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute left-1/2 top-0 h-72 w-\[46rem\] -translate-x-1/2 rounded-full ${peakBg12} blur-3xl`}
        />
        <div
          className={`absolute left-1/2 bottom-0 h-72 w-\[46rem\] -translate-x-1/2 rounded-full ${peakBg10} blur-3xl`}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <p className="section-label">
                FAQ
              </p>
            </Reveal>

            <Reveal delay={0.03}>
              <h2
                id="faq-title"
                className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
              >
                Resolvemos dudas antes de arrancar.
              </h2>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                Respuestas claras a las preguntas que más se repiten. Si querés,
                nos escribís y te guiamos según tu caso.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(var(--peak),0.35)]"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        <Stagger className="mt-10 grid gap-3 sm:mt-12">
          {FAQS.map((item) => (
            <StaggerItem key={item.q}>
              <HoverLift>
                <details
                  className={`group rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur transition hover:${peakBorder35} hover:bg-white/7`}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="text-sm font-medium text-white/85 sm:text-base">
                      {item.q}
                    </span>

                    <span
                      aria-hidden
                      className={`inline-flex h-8 w-8 items-center justify-center rounded-xl border ${peakBorder35} ${peakBg10} ${peakText} transition group-open:rotate-45 group-open:bg-[rgb(var(--peak))] group-open:text-white`}
                    >
                      +
                    </span>
                  </summary>

                  <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                    {item.a}
                  </p>
                </details>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.02}>
          <div className="mt-12 rounded-2xl border border-white/10 bg-black/20 px-6 py-6 text-white/70 backdrop-blur">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-relaxed">
                Si te queda alguna duda, te respondemos en 1 mensaje.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contacto"
                  className={`inline-flex items-center justify-center rounded-xl border ${peakBorder35} ${peakBg10} px-4 py-2 text-sm font-medium ${peakText} transition hover:bg-[rgb(var(--peak))] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(var(--peak),0.35)]`}
                >
                  Ir a contacto
                </Link>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(var(--peak),0.35)]"
                >
                  WhatsApp <span aria-hidden className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
