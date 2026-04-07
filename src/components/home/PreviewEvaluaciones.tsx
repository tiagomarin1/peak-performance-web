import { Reveal, Stagger, StaggerItem, HoverLift } from "@/components/ui/motion";

const WHATSAPP_NUMBER = "5491131979637";
const WHATSAPP_TEXT =
  "Hola! Quiero agendar una evaluación inicial en Peak Performance.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;

type EvalCard = {
  title: string;
  description: string;
  points: string[];
};

const CARDS: EvalCard[] = [
  {
    title: "Evaluación inicial",
    description:
      "Definimos tu punto de partida para entrenar con criterio desde el primer día.",
    points: [
      "Objetivo e historial",
      "Movilidad y patrones",
      "Base de fuerza y estabilidad",
    ],
  },
  {
    title: "Tests de rendimiento",
    description:
      "Medimos lo que importa según tu deporte o meta para orientar mejor el proceso.",
    points: [
      "Potencia y salto",
      "Velocidad y cambios de dirección",
      "Capacidad de sostener esfuerzo",
    ],
  },
  {
    title: "Seguimiento y re-test",
    description:
      "Volvemos a medir para ajustar la carga y validar que el progreso sea real.",
    points: [
      "Evolución por métricas",
      "Ajustes del plan",
      "Prevención de sobrecargas",
    ],
  },
];

export default function PreviewEvaluaciones() {
  const peakBg = "bg-[rgb(var(--peak))]";
  const peakBg10 = "bg-[rgba(var(--peak),0.10)]";
  const peakBg12 = "bg-[rgba(var(--peak),0.12)]";
  const peakBg20 = "bg-[rgba(var(--peak),0.20)]";
  const peakBorder35 = "border-[rgba(var(--peak),0.35)]";

  return (
    <section
      id="evaluaciones"
      aria-labelledby="evaluaciones-title"
      className="relative overflow-hidden py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute left-1/2 top-0 h-64 w-[44rem] -translate-x-1/2 rounded-full ${peakBg12} blur-3xl`}
        />
        <div
          className={`absolute left-1/2 bottom-0 h-64 w-[44rem] -translate-x-1/2 rounded-full ${peakBg10} blur-3xl`}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <p className="section-label">EVALUACIONES</p>
            </Reveal>

            <Reveal delay={0.03}>
              <h2
                id="evaluaciones-title"
                className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
              >
                Medimos primero. Entrenamos mejor.
              </h2>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                Antes de empezar, evaluamos tu punto de partida para ordenar el
                proceso y entrenar con una lógica real.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(var(--peak),0.35)]"
            >
              Agendar evaluación
            </a>
          </Reveal>
        </div>

        <Stagger className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <StaggerItem key={c.title}>
              <HoverLift>
                <article
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:${peakBorder35} hover:bg-white/7`}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                    <div
                      className={`absolute -right-24 -top-24 h-56 w-56 rounded-full ${peakBg20} blur-2xl`}
                    />
                  </div>

                  <div className="relative">
                    <h3 className="text-base font-semibold tracking-tight text-white sm:text-lg">
                      {c.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      {c.description}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {c.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-center gap-2 text-sm text-white/75"
                        >
                          <span
                            aria-hidden
                            className={`inline-block h-1.5 w-1.5 rounded-full ${peakBg}`}
                          />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.02}>
          <div className="mt-10 rounded-2xl border border-white/10 bg-black/20 px-5 py-5 text-white/70 backdrop-blur sm:mt-12">
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-sm font-semibold text-white/85">
                  Evaluación
                </p>
                <p className="mt-1 text-sm leading-relaxed">
                  Vemos tu punto de partida antes de exigir.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-white/85">
                  Plan a medida
                </p>
                <p className="mt-1 text-sm leading-relaxed">
                  Ordenamos el entrenamiento según objetivo y contexto.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-white/85">
                  Seguimiento
                </p>
                <p className="mt-1 text-sm leading-relaxed">
                  Ajustamos con criterio para sostener el progreso.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}