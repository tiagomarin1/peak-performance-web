"use client";

import { useEffect, useState } from "react";
import { MessageCircle, MapPin, LayoutGrid, X } from "lucide-react";
import { AnimatePresence, m } from "framer-motion";

const WHATSAPP_NUMBER = "5491113797637";
const WHATSAPP_TEXT = "Hola! Quiero consultar por Peak Performance.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;

const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Peak%20Performance%20Gym";

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // ✅ defensa: si ALGÚN componente dejó overflow hidden colgado, lo limpiamos al cerrar
  useEffect(() => {
    if (!open) {
      // no tocamos si ya está normal; pero limpiamos por si quedó colgado
      if (document.body.style.overflow === "hidden") document.body.style.overflow = "";
      if (document.documentElement.style.overflow === "hidden")
        document.documentElement.style.overflow = "";
    }
  }, [open]);

  const peakBg = "bg-[rgb(var(--peak))]";
  const peakBgHover = "hover:bg-[rgb(var(--peak-hover))]";
  const peakRing = "focus-visible:ring-[rgba(var(--peak),0.35)]";
  const peakText = "text-[rgb(var(--peak))]";
  const peakBg10 = "bg-[rgba(var(--peak),0.10)]";
  const peakBorder35 = "border-[rgba(var(--peak),0.35)]";

  return (
    // ✅ wrapper full = no intercepta gestos
    <div className="fixed inset-0 z-\[80\] pointer-events-none">
      {/* ✅ solo esto recibe clicks/touch */}
      <div className="pointer-events-auto fixed bottom-5 right-5 touch-manipulation">
        <AnimatePresence>
          {open && (
            <m.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="mb-3 w-\[260px\] overflow-hidden rounded-2xl border border-white/10 bg-black/70 shadow-2xl backdrop-blur"
            >
              <div className={`h-1 w-full ${peakBg}`} />

              <div className="p-3">
                <p className="text-xs font-medium tracking-wider text-white/60">
                  ELEGÍ UNA OPCIÓN
                </p>

                <div className="mt-3 grid gap-2">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className={[
                      "flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-white transition focus:outline-none focus-visible:ring-2",
                      peakBg,
                      peakBgHover,
                      peakRing,
                    ].join(" ")}
                  >
                    <span className="flex items-center gap-2">
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">
                        <MessageCircle className="h-4 w-4" />
                      </span>
                      <span>
                        WhatsApp
                        <span className="ml-2 text-xs font-medium text-white/75">
                          Consultar
                        </span>
                      </span>
                    </span>
                    <span className="text-white/90">→</span>
                  </a>

                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className={[
                      "flex items-center justify-between rounded-xl border px-3 py-3 text-sm font-semibold transition hover:bg-[rgba(var(--peak),0.18)] focus:outline-none focus-visible:ring-2",
                      peakBorder35,
                      peakBg10,
                      peakText,
                      peakRing,
                    ].join(" ")}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className={[
                          "grid h-9 w-9 place-items-center rounded-xl border",
                          peakBorder35,
                          peakBg10,
                        ].join(" ")}
                      >
                        <MapPin className={`h-4 w-4 ${peakText}`} />
                      </span>
                      <span>
                        Maps
                        <span className="ml-2 text-xs font-medium text-white/70">
                          Ubicación
                        </span>
                      </span>
                    </span>
                    <span className={peakText}>→</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-2 w-full rounded-xl px-3 py-2 text-xs text-white/60 transition hover:text-white"
                >
                  Cerrar
                </button>
              </div>
            </m.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={[
            "group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-xl transition focus:outline-none focus-visible:ring-2",
            peakBg,
            peakBgHover,
            peakRing,
          ].join(" ")}
          style={{
            boxShadow:
              "0 18px 40px rgba(0,0,0,0.35), 0 10px 22px rgba(var(--peak),0.25)",
          }}
          aria-label={open ? "Cerrar accesos" : "Abrir accesos"}
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10">
            {open ? <X className="h-5 w-5" /> : <LayoutGrid className="h-5 w-5" />}
          </span>
          <span>Accesos</span>
          <span className="ml-1 inline-flex h-6 items-center justify-center rounded-full bg-white/15 px-2 text-xs">
            2
          </span>
        </button>
      </div>
    </div>
  );
}
