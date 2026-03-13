import type { Metadata } from "next";
import Pretemporada from "@/components/home/Pretemporada";

export const metadata: Metadata = {
  title: "Pretemporada Off-season | Peak Performance",
  description:
    "Pretemporada off-season de 6 semanas en Peak Performance (CABA). Método, estructura y métricas para rendimiento real. Cupos limitados.",
  alternates: { canonical: "/pretemporada" },
  openGraph: {
    title: "Pretemporada Off-season | Peak Performance",
    description:
      "Ciclo de 6 semanas con método y métricas. Cupos limitados. Consultá por WhatsApp.",
    url: "/pretemporada",
    type: "website",
  },
};

export default function PretemporadaPage() {
  return (
    <main className="pt-24">
      {/* Podés sumar un header editorial si querés,
         pero mantenemos limpio: la sección ya vende. */}
      <Pretemporada
        startLabel="Ventana estimada: mitad de diciembre → comienzos de enero"
        spotsLabel="Cupos limitados"
      />
    </main>
  );
}
