import Link from "next/link";
import { Reveal, Stagger, StaggerItem, HoverLift } from "@/components/ui/motion";

type Person = {
  name: string;
  role: string;
  bio: string;
  badges: string[];
  focus: string[];
};

const TEAM: Person[] = [
  {
    name: "Entrenador/a Principal",
    role: "Performance Coach",
    bio: "Planificación orientada a rendimiento: fuerza, potencia y prevención. Progresión con métricas y técnica limpia.",
    badges: ["Fuerza & acondicionamiento", "Prevención de lesiones", "Planificación"],
    focus: ["Evaluación inicial", "Progresiones por bloque", "Seguimiento semanal"],
  },
  {
    name: "Especialista en Rehabilitación",
    role: "Kinesiología / Readaptación",
    bio: "Volver a entrenar fuerte sin volver a lesionarte. Readaptación progresiva, control de carga y retorno al deporte.",
    badges: ["Readaptación", "Movilidad", "Control de carga"],
    focus: ["Dolores recurrentes", "Estabilidad y patrones", "Retorno al juego"],
  },
  {
    name: "Preparador/a Físico",
    role: "Acondicionamiento & Resistencia",
    bio: "Capacidad física específica: motor, intervalos y eficiencia. Mejor rendimiento sin destruirte en el proceso.",
    badges: ["Resistencia", "Velocidad", "Agilidad"],
    focus: ["Zonas / umbrales", "Cambios de dirección", "Acondicionamiento"],
  },
];

export default function PreviewEquipo() {
  const peakText = "text-[rgb(var(--peak))]";
  const peakBg10 = "bg-[rgba(var(--peak),0.10)]";
  const peakBg12 = "bg-[rgba(var(--peak),0.12)]";
  const peakBg20 = "bg-[rgba(var(--peak),0.20)]";
  const peakBorder35 = "border-[rgba(var(--peak),0.35)]";
  const peakDot = "bg-[rgb(var(--peak))]";

  return (
    <section
      id="equipo"
      aria-labelledby="equipo-title"
      className="relative overflow-hidden py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute left-1/2 top-1/2 h-80 w-\[52rem\] -translate-x-1/2 -translate-y-1/2 rounded-full ${peakBg12} blur-3xl`}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-xs font-medium tracking-wider text-white/60">
                EQUIPO
              </p>
            </Reveal>

            <Reveal delay={0.03}>
              <h2
                id="equipo-title"
                className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
              >
                Profesionales. Método. Seguimiento real.
              </h2>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                Peak Performance no es “rutina y listo”. Trabajamos con estructura,
                técnica y control de carga. El equipo te guía para mejorar sin
                improvisar.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="flex items-center gap-3">
              <Link
                href="/equipo"
                className={`inline-flex items-center justify-center rounded-xl border ${peakBorder35} ${peakBg10} px-4 py-2 text-sm font-medium ${peakText} backdrop-blur transition hover:bg-[rgb(var(--peak))] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(var(--peak),0.35)]`}
              >
                Conocer el equipo <span aria-hidden className="ml-2">→</span>
              </Link>
            </div>
          </Reveal>
        </div>

        <Stagger className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-3">
          {TEAM.map((p) => (
            <StaggerItem key={p.name}>
              <HoverLift>
                <article
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:${peakBorder35} hover:bg-white/7`}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                    <div
                      className={`absolute -left-24 -top-24 h-56 w-56 rounded-full ${peakBg20} blur-2xl`}
                    />
                  </div>

                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div
                        className={`relative h-12 w-12 shrink-0 rounded-2xl border ${peakBorder35} ${peakBg10}`}
                      >
                        <div
                          className={`absolute inset-0 grid place-items-center text-xs font-semibold ${peakText}`}
                        >
                          PP
                        </div>
                      </div>

                      <div className="min-w-0">
                        <h3 className="truncate text-base font-semibold tracking-tight text-white sm:text-lg">
                          {p.name}
                        </h3>
                        <p className="mt-0.5 text-sm text-white/60">{p.role}</p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                      {p.bio}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.badges.map((b) => (
                        <span
                          key={b}
                          className={`rounded-full border ${peakBorder35} ${peakBg10} px-2.5 py-1 text-[11px] font-medium ${peakText}`}
                        >
                          {b}
                        </span>
                      ))}
                    </div>

                    <ul className="mt-5 space-y-2">
                      {p.focus.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-white/75"
                        >
                          <span
                            aria-hidden
                            className={`inline-block h-1.5 w-1.5 rounded-full ${peakDot}`}
                          />
                          <span>{f}</span>
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
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-relaxed">
                <span className="font-medium text-white/85">
                  ¿Tenés una meta específica o venís de una lesión?
                </span>{" "}
                Te guiamos con una evaluación y un plan a medida.
              </p>

              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(var(--peak),0.35)]"
              >
                Hablar con el equipo <span aria-hidden className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
