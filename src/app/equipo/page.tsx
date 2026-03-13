import TrainerCard from "@/components/equipo/TrainerCard";
import { TEAM } from "@/components/equipo/team-data";

export default function EquipoPage() {
  return (
    <main className="pt-24 pb-20">
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-sky-300/80">
            EQUIPO
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Profesionales que sostienen el método.
          </h1>

          <p className="mt-4 text-sm leading-6 text-white/70 sm:text-base">
            En Peak Performance trabajamos bajo un mismo sistema: evaluación,
            planificación y seguimiento real. El equipo aplica el método con
            criterio y consistencia.
          </p>
        </header>

        <div className="mt-10 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {TEAM.map((trainer) => (
            <TrainerCard key={trainer.name} {...trainer} />
          ))}
        </div>
      </section>
    </main>
  );
}
