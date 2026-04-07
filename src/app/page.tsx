import Hero from "@/components/home/Hero";
import QuienesSomos from "@/components/home/QuienesSomos";
import Metodo from "@/components/home/MetodoPeak";
import Resultados from "@/components/home/Resultados";
import PreviewEvaluaciones from "@/components/home/PreviewEvaluaciones";
import PretemporadaTeaser from "@/components/home/PretemporadaTeaser";
import FAQ from "@/components/home/FAQ";
import SectionDivider from "@/components/SectionDivider";

export default function HomePage() {
  return (
    <>
      <Hero />

      <SectionDivider variant="line" />
      <QuienesSomos />

      <SectionDivider variant="line" />
      <Metodo />

      <SectionDivider variant="line" />
      <Resultados />

      <SectionDivider variant="line" />
      <PreviewEvaluaciones />

      <SectionDivider variant="line" />
      <PretemporadaTeaser />

      <SectionDivider variant="line" />
      <FAQ />
    </>
  );
}