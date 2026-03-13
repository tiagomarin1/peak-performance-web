"use client";

import Image from "next/image";
import { m } from "framer-motion";

type Props = {
  name: string;
  role: string;
  credential: string;
  image: string;
};

export default function TrainerCard({
  name,
  role,
  credential,
  image,
}: Props) {
  return (
    <m.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-xs tracking-[0.18em] text-sky-300/80 uppercase">
            {role}
          </p>

          <h3 className="mt-2 text-lg font-semibold text-white">
            {name}
          </h3>

          <p className="mt-1 text-sm text-white/70">
            {credential}
          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

        <a
          href="/contacto"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
        >
          Contactar <span className="text-white/50">→</span>
        </a>
      </div>
    </m.article>
  );
}
