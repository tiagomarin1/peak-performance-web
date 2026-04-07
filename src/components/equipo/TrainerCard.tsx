"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { m } from "framer-motion";
import { Instagram } from "lucide-react";

type Props = {
  name: string;
  role: string;
  image?: string | null;
  instagram: string;
};

export default function TrainerCard({
  name,
  role,
  image,
  instagram,
}: Props) {
  const [imageError, setImageError] = useState(false);

  const initials = useMemo(() => {
    return name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("");
  }, [name]);

  const showFallback = !image || image.trim() === "" || imageError;

  return (
    <m.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
    >
      <div className="relative aspect-[3/3.1] w-full overflow-hidden">
        {showFallback ? (
          <div className="relative flex h-full w-full items-center justify-center bg-linear-to-br from-sky-500/25 via-cyan-400/10 to-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_45%)]" />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

            <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-white/8 backdrop-blur-sm">
                <span className="text-3xl font-bold tracking-[0.12em] text-white">
                  {initials}
                </span>
              </div>

              <p className="mt-5 text-xs uppercase tracking-[0.22em] text-sky-300/85">
                Equipo Peak
              </p>
            </div>
          </div>
        ) : (
          <>
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              onError={() => setImageError(true)}
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
          </>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-sky-300/80">
            {role}
          </p>

          <h3 className="mt-2 text-lg font-semibold text-white">
            {name}
          </h3>
        </div>
      </div>

      <div className="p-4">
        <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

        <a
          href={instagram}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
        >
          <Instagram className="h-4 w-4" />
          Instagram
        </a>
      </div>
    </m.article>
  );
}