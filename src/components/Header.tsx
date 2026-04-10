"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { LayoutGroup, m, AnimatePresence } from "framer-motion";

const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/pretemporada", label: "Pretemporada" },
  { href: "/equipo", label: "Equipo" },
  { href: "/instalaciones", label: "Entrenamientos" },
  { href: "/contacto", label: "Contacto" },
] as const;

const WHATSAPP_NUMBER = "5491131979637";
const WHATSAPP_TEXT = "Hola! Quiero empezar a entrenar en Peak Performance.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isActiveRoute = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const activeHref = useMemo(() => {
    const found = NAV.find((i) => isActiveRoute(i.href));
    return found?.href ?? "/";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const prevBody = document.body.style.overflow;
    const prevHtml = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevBody;
      document.documentElement.style.overflow = prevHtml;
    };
  }, [open]);

  const peakBg = "bg-[rgb(var(--peak))]";
  const peakBgHover = "hover:bg-[rgb(var(--peak-hover))]";
  const peakRing = "focus-visible:ring-[rgba(var(--peak),0.35)]";
  const peakBorder = "border-[rgba(var(--peak),0.30)]";

  const MobileMenu = (
    <AnimatePresence>
      {open && (
        <m.div
          key="mobile-menu"
          className="fixed inset-0 z-[9999] md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            aria-label="Cerrar menú"
            className="absolute inset-0 bg-black/55"
            onClick={() => setOpen(false)}
            type="button"
          />

          <m.div
            initial={{ y: -12, opacity: 0, scale: 0.995 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -12, opacity: 0, scale: 0.995 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 h-[100dvh] w-screen bg-white pointer-events-auto"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between border-b border-black/10 px-4 py-3">
              <Link
                href="/"
                className="flex items-center gap-3"
                onClick={() => setOpen(false)}
              >
                <Image
                  src="/brand/logoPeak.webp" // logo mobile
                  alt="Peak Performance"
                  width={32}
                  height={32}
                  priority
                />
                <span className="text-sm font-semibold">Peak Performance</span>
              </Link>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/15 bg-white hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(var(--peak),0.35)]"
                aria-label="Cerrar menú"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="h-[calc(100dvh-56px)] overflow-y-auto px-4 pb-8 pt-4">
              <div className="space-y-1">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={[
                      "block rounded-xl px-3 py-3 text-sm transition",
                      isActiveRoute(item.href)
                        ? "bg-black/5 font-semibold text-black"
                        : "text-black/70 hover:bg-black/5 hover:text-black",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <m.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.18 }}
                className={[
                  "mt-5 block w-full rounded-full px-4 py-3 text-center text-sm font-semibold text-white focus:outline-none focus-visible:ring-2",
                  peakBg,
                  peakBgHover,
                  peakRing,
                ].join(" ")}
              >
                Reservar por WhatsApp
              </m.a>

              <p className="mt-3 text-center text-xs text-black/50">
                Respuesta rápida en horario laboral.
              </p>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <header className="fixed left-0 top-0 z-[1000] w-full border-b border-black/10 bg-white text-black pointer-events-auto">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/brand/logoPeak.webp" // logo pc
              alt="Peak Performance"
              width={42}
              height={42}
              priority
            />
            <span className="text-sm font-semibold tracking-tight">
              Peak Performance
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <LayoutGroup id="nav">
              {NAV.map((item) => {
                const active = item.href === activeHref;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "relative text-sm transition",
                      active
                        ? "text-black font-semibold"
                        : "text-black/60 hover:text-black",
                    ].join(" ")}
                  >
                    <span className="relative">
                      {item.label}
                      {active && (
                        <m.span
                          layoutId="nav-underline"
                          className={[
                            "absolute left-0 top-[calc(100%+10px)] h-[2px] w-full rounded-full",
                            peakBg,
                          ].join(" ")}
                          transition={{ duration: 0.25 }}
                        />
                      )}
                    </span>
                  </Link>
                );
              })}
            </LayoutGroup>

            <m.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className={[
                "rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm focus:outline-none focus-visible:ring-2",
                peakBg,
                peakBgHover,
                peakRing,
              ].join(" ")}
            >
              Reservar por WhatsApp
            </m.a>
          </nav>

          <m.button
            type="button"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className={[
              "inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-white text-black shadow-sm hover:bg-black/5 focus:outline-none focus-visible:ring-2 md:hidden",
              peakBorder,
              peakRing,
            ].join(" ")}
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu className="h-5 w-5" />
          </m.button>
        </div>
      </header>

      {mounted ? createPortal(MobileMenu, document.body) : null}
    </>
  );
}