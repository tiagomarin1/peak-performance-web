import Link from "next/link";
import { Reveal, Stagger, StaggerItem, HoverLift } from "@/components/ui/motion";

const WHATSAPP_NUMBER = "5491131979637";
const WHATSAPP_TEXT =
  "Hola! Tengo unas consultas sobre Peak Performance antes de arrancar.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;

type FAQItem = {
  q: string;
  a: string[];
};

const FAQS: FAQItem[] = [
  {
    q: "¿Para quién es Peak Performance?",
    a: [
      "Peak Performance está pensado para deportistas que buscan mejorar su rendimiento.",
      "Trabajamos principalmente con jugadores y jugadoras de básquet, fútbol, hockey, handball y otros deportes de equipo e individuales.",
      "También acompañamos a deportistas en nivel competitivo o en proceso de llegar a ese nivel.",
      "Si tu objetivo es más general, como salud o fitness, también podés entrenar con nosotros a través de un formato personalizado.",
    ],
  },
  {
    q: "¿Necesito tener experiencia previa en entrenamiento?",
    a: [
      "Para sumarte a los turnos habituales, sí es importante contar con una base de entrenamiento.",
      "Trabajamos con una dinámica exigente y orientada al rendimiento, por lo que buscamos que los atletas ya tengan cierto recorrido previo.",
      "De todas formas, si no tenés esa base, podés empezar con un formato más personalizado, donde te acompañamos en ese proceso hasta que estés listo para integrarte a los grupos.",
    ],
  },
  {
    q: "¿Cómo son los entrenamientos?",
    a: [
      "Los entrenamientos duran aproximadamente 1:30 hs y están guiados por nuestro equipo.",
      "No trabajamos con rutinas genéricas: cada planificación se ajusta a tu deporte, tus objetivos y el momento de la temporada en el que estés.",
      "Durante las sesiones vas a trabajar sobre fuerza, potencia, velocidad y movimientos propios de tu deporte, siempre con la idea de que todo lo que hagas en el gimnasio tenga impacto en la cancha.",
    ],
  },
  {
    q: "¿Puedo entrenar en cualquier horario?",
    a: [
      "No. Trabajamos con horarios específicos para garantizar la calidad del servicio.",
      "Horarios de grupos: lunes a viernes de 8:00 a 11:00 y de 17:00 a 21:00.",
      "Sábados: de 10:00 a 11:30.",
      "Fuera de esos horarios se realizan entrenamientos personalizados o trabajos específicos.",
    ],
  },
  {
    q: "¿Cómo hago para empezar?",
    a: [
      "El primer paso es escribirnos para evaluar tu caso.",
      "Antes de arrancar, analizamos tu deporte y nivel, entendemos tus objetivos y definimos el formato de trabajo más adecuado.",
      "Buscamos que cada persona que entrene en Peak lo haga dentro de una estructura que realmente le aporte valor.",
    ],
  },
  {
    q: "¿Cuántas veces por semana debería entrenar?",
    a: [
      "Depende de tu nivel, tus objetivos y tu calendario competitivo.",
      "En general, los deportistas en competencia entrenan entre 2 y 4 veces por semana.",
      "En casos personalizados, la frecuencia se define según la necesidad específica.",
      "El objetivo no es entrenar más, sino entrenar mejor y con sentido.",
    ],
  },
  {
    q: "¿Puedo entrenar si estoy lesionado o en recuperación?",
    a: [
      "Sí. Trabajamos también con deportistas que están atravesando una lesión o volviendo a entrenar después de una.",
      "El objetivo no es solo que te recuperes, sino que vuelvas a tu deporte mejor preparado que antes.",
      "En estos casos, adaptamos completamente el entrenamiento a tu situación, respetamos los tiempos del proceso y trabajamos progresivamente para que vuelvas a la cancha con confianza.",
      "Dependiendo del caso, el proceso puede empezar con un formato más personalizado y, a medida que avanzás, integrarte al trabajo grupal.",
    ],
  },
  {
    q: "¿Puedo probar antes de empezar?",
    a: [
      "Sí. El primer entrenamiento es sin cargo.",
      "Una vez que te comunicás con nosotros, coordinamos un primer encuentro donde hacemos una evaluación para entender desde qué punto estás arrancando.",
      "En ese primer entrenamiento vemos tu nivel actual, detectamos fortalezas y debilidades, y analizamos tu deporte y tus objetivos.",
      "A partir de eso, te recomendamos el formato de trabajo que más te conviene para empezar, ya sea grupal o personalizado.",
    ],
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
          className={`absolute left-1/2 top-0 h-72 w-[46rem] -translate-x-1/2 rounded-full ${peakBg12} blur-3xl`}
        />
        <div
          className={`absolute bottom-0 left-1/2 h-72 w-[46rem] -translate-x-1/2 rounded-full ${peakBg10} blur-3xl`}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <p className="section-label">FAQ</p>
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
                Estas son algunas de las preguntas que más se repiten antes de
                empezar. Si querés, nos escribís y te guiamos según tu caso.
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

                  <div className="mt-3 space-y-3">
                    {item.a.map((paragraph, index) => (
                      <p
                        key={`${item.q}-${index}`}
                        className="text-sm leading-relaxed text-white/70 sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
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