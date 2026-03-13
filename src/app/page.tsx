import Hero from "@/components/home/Hero";
import PreviewEvaluaciones from "@/components/home/PreviewEvaluaciones";
import Metodo from "@/components/home/MetodoPeak";
import FAQ from "@/components/home/FAQ";
import SectionDivider from "@/components/SectionDivider";
import Resultados from "@/components/home/Resultados";
import PretemporadaTeaser from "@/components/home/PretemporadaTeaser";
import Beneficios from "@/components/home/Beneficios";

export default function HomePage() {
  return (
    <>
      <Hero />

      <SectionDivider variant="line" />
      <Metodo />

      <SectionDivider variant="line" />
      <Resultados />

      <SectionDivider variant="line" />
      <PreviewEvaluaciones />

      <SectionDivider variant="line" />
      <PretemporadaTeaser />

      <SectionDivider variant="line" />
      <Beneficios />

      <SectionDivider variant="line" />
      <FAQ />
    </>
  );
}