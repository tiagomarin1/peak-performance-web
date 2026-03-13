"use client";

import Image from "next/image";
import { m } from "framer-motion";

type Props = {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
};

export default function InstalacionSection({
  title,
  description,
  image,
  reverse = false,
}: Props) {
  return (
    <section className="py-20">
      <div
        className={`mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Imagen */}
        <m.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="relative w-full overflow-hidden rounded-2xl border border-white/10 lg:w-1/2"
        >
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </m.div>

        {/* Texto */}
        <div className="w-full lg:w-1/2">
          <p className="text-xs tracking-[0.18em] text-sky-300/80 uppercase">
            Instalaciones
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-white">
            {title}
          </h2>

          <p className="mt-4 text-sm leading-6 text-white/70">
            {description}
          </p>

          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}
