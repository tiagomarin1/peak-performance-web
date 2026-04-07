import type { Metadata } from "next";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { Reveal, Stagger, StaggerItem, HoverLift } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacto Peak Performance en Villa Santa Rita (CABA). Consultá por WhatsApp y encontrá la ubicación en Google Maps.",
  alternates: { canonical: "/contacto" },
};

const WHATSAPP_NUMBER = "5491131979637";
const WHATSAPP_TEXT = "Hola! Quiero empezar a entrenar en Peak Performance.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;

const MAPS_URL = "https://maps.app.goo.gl/i3wyMMCQiMhcCupD8";

export default function ContactoPage() {
  const peakBtn =
    "bg-[rgb(var(--peak))] hover:bg-[rgb(var(--peak-hover))] focus-visible:ring-[rgba(var(--peak),0.35)]";

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <Reveal>
        <p className="text-xs font-semibold tracking-widest text-white/60">
          CONTACTO
        </p>
      </Reveal>

      <Reveal delay={0.04}>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Coordinemos tu primera sesión.
        </h1>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
          Contanos tu objetivo, disponibilidad e historial de lesiones. Te
          orientamos para que arranques con un proceso ordenado y acorde a tu
          perfil.
        </p>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 ${peakBtn}`}
          >
            <MessageCircle className="h-4 w-4" />
            Consultar por WhatsApp <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
          >
            <MapPin className="h-4 w-4 text-[rgb(var(--peak))]" />
            Ver ubicación <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Stagger className="space-y-4">
          <StaggerItem>
            <HoverLift>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold text-white">Ubicación</p>
                <p className="mt-2 text-sm text-white/70">
                  Villa Santa Rita, CABA — Buenos Aires, Argentina
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-white/20 underline-offset-4 hover:decoration-white/60"
                >
                  Abrir en Google Maps <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </HoverLift>
          </StaggerItem>

          <StaggerItem>
            <HoverLift>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold text-white">Horario</p>
                <p className="mt-2 text-sm text-white/70">
                  Coordinación por WhatsApp en horario laboral.
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--peak))] hover:text-white"
                >
                  Escribir por WhatsApp <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </HoverLift>
          </StaggerItem>

          <StaggerItem>
            <HoverLift>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-6 text-sm text-white/70">
                Contanos tu objetivo, tu disponibilidad semanal y si venís
                de alguna molestia o lesión para orientarte mejor.
              </div>
            </HoverLift>
          </StaggerItem>
        </Stagger>

        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="p-4">
              <p className="text-sm font-semibold text-white">
                Mapa (Villa Santa Rita, CABA)
              </p>
              <p className="mt-1 text-sm text-white/60">
                Referencia: World Padel Center CABA
              </p>
            </div>

            <div className="aspect-[16/11] w-full">
              <iframe
                title="Mapa Peak Performance"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.4828964803996!2d-58.48180268792413!3d-34.61723527283659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9b46cb4a393%3A0xf242e4262b8cf20d!2sWorld%20Padel%20Center%20CABA!5e0!3m2!1ses!2sar!4v1771093095210!5m2!1ses!2sar"
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}