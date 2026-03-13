import InstalacionSection from "@/components/instalaciones/InstalacionSection";

export default function InstalacionesPage() {
  return (
    <main className="pt-24">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <p className="text-xs tracking-[0.18em] text-sky-300/80 uppercase">
          Instalaciones
        </p>

        <h1 className="mt-3 text-4xl font-semibold text-white">
          Infraestructura diseñada para rendimiento real
        </h1>

        <p className="mt-4 text-white/70 max-w-2xl">
          Cada zona cumple una función dentro del método Peak: fuerza,
          velocidad, movilidad y transferencia al deporte.
        </p>
      </section>

      <InstalacionSection
        title="Zona de Fuerza"
        description="Racks olímpicos y plataformas para trabajo estructurado de fuerza y potencia. Progresión controlada y técnica priorizada."
        image="/instalaciones/fuerza.jpg"
      />

      <InstalacionSection
        title="Césped Interior"
        description="Espacio cubierto para velocidad, aceleración y trabajo específico sin depender del clima."
        image="/instalaciones/cesped-interior.jpg"
        reverse
      />

      <InstalacionSection
        title="Zona de Movilidad"
        description="Área destinada al control de movimiento y construcción de base técnica antes del aumento de carga."
        image="/instalaciones/movilidad.jpg"
      />

      <InstalacionSection
        title="Césped Exterior"
        description="Desarrollo atlético en espacio abierto para transferir capacidad al deporte real."
        image="/instalaciones/cesped-exterior.jpg"
        reverse
      />
    </main>
  );
}
