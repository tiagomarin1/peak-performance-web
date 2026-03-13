"use client";

import React, { useMemo, useState } from "react";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import { Play, X } from "lucide-react";

const easePremium: [number, number, number, number] = [0.22, 1, 0.36, 1];

type ReelItem = {
  id: string;
  label: string;
  title: string;
  url: string;
  featured?: boolean;
};

function cx(...cls: Array<string | false | null | undefined>) {
  return cls.filter(Boolean).join(" ");
}

function toEmbedUrl(input: string) {
  const url = input.split("?")[0].replace(/\/$/, "");
  return `${url}/embed`;
}

export default function ReelsGallery({ items }: { items: ReelItem[] }) {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<ReelItem | null>(null);

  const sorted = useMemo(() => {
    const featured = items.filter((x) => x.featured);
    const rest = items.filter((x) => !x.featured);
    return [...featured, ...rest];
  }, [items]);

  return (
    <section aria-label="Videos reales de la pretemporada" className="relative">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-wider text-[rgb(var(--peak))]">
            Videos reales
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Mirá cómo se vive la pretemporada en Peak.
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Sesiones reales, contexto real y una experiencia controlada dentro de
            la web.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((it) => (
          <m.button
            key={it.id}
            type="button"
            onClick={() => setOpen(it)}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: easePremium }}
            className={cx(
              "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left backdrop-blur",
              "transition hover:border-white/15 hover:bg-white/7 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(var(--peak),0.35)]"
            )}
            aria-label={`Ver: ${it.title}`}
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[rgba(var(--peak),0.16)] blur-2xl" />
            </div>

            <div className="relative p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-medium tracking-wider text-white/60">
                    {it.label}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm font-semibold text-white/90">
                    {it.title}
                  </p>
                </div>

                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[rgba(var(--peak),0.35)] bg-[rgba(var(--peak),0.10)] text-[rgb(var(--peak))]">
                  <Play className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-medium text-white/70">
                  Ver en grande
                </span>
              </div>
            </div>
          </m.button>
        ))}
      </div>

      <AnimatePresence>
        {open ? (
          <m.div
            className="fixed inset-0 z-[90] grid place-items-center bg-black/70 px-4"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: easePremium }}
            role="dialog"
            aria-modal="true"
            aria-label="Reel de Instagram"
            onClick={() => setOpen(null)}
          >
            <m.div
              className="relative w-full max-w-[460px] overflow-hidden rounded-2xl border border-white/10 bg-black"
              initial={reduce ? false : { opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: easePremium }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setOpen(null)}
                className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/60 text-white/80 transition hover:text-white"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="bg-black p-4 sm:p-5">
                <div className="mx-auto w-full max-w-[380px] overflow-hidden rounded-xl border border-white/10 bg-black">
                  <div className="relative aspect-[9/16] bg-black">
                    <iframe
                      key={open.id}
                      src={toEmbedUrl(open.url)}
                      className="absolute inset-0 h-full w-full"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      title={open.title}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-xs font-medium tracking-wider text-white/60">
                    {open.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white/90">
                    {open.title}
                  </p>
                </div>
              </div>
            </m.div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}