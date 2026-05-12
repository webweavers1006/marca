import { HeroView } from "@/features/landing/hero/HeroView";
import { ConcursoView } from "@/features/landing/concurso/ConcursoView";
import { ImpactoView } from "@/features/landing/impacto/ImpactoView";
import { FasesView } from "@/features/landing/fases/FasesView";
import { JuradoView } from "@/features/landing/jurado/JuradoView";
import { CronogramaView } from "@/features/landing/cronograma/CronogramaView";

/**
 * Home page — assembles all landing sections in order.
 * Each section is a self-contained feature with its own config and animations.
 */
export default function HomePage() {
  return (
    <>
      <HeroView />
      <ConcursoView />
      <CronogramaView />
      <FasesView />
      <JuradoView />
      {/*<ImpactoView /> */}
    </>
  );
}
