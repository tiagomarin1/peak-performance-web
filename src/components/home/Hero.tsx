import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";

const WHATSAPP_NUMBER = "5491113797637";
const WHATSAPP_TEXT =
  "Hola! Quiero empezar a entrenar en Peak Performance.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/brand/hero.webp"
          alt="Entrenamiento de alto rendimiento"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-black/60" />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/60 via-black/40 to-black" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 text-white">
        <div className="max-w-2xl space-y-6">
          <Reveal y={18}>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Elevá tu rendimiento.
              <br />
              <span className="text-neutral-300">
                Entrená con propósito.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-lg text-neutral-200 md:text-xl">
              Fuerza, velocidad y prevención con planificación profesional.
              Entrenamiento medible para atletas reales.
            </p>
          </Reveal>

          <Stagger className="flex flex-col gap-4 pt-4 sm:flex-row">
            <StaggerItem>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl bg-white px-8 py-4 text-center font-semibold text-black transition hover:bg-neutral-200"
              >
                Reservar por WhatsApp
              </a>
            </StaggerItem>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
