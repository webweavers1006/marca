// import { SubmissionForm } from "@/features/submission/components/SubmissionForm";
import Image from "next/image";
import { Logomarcalarge } from "@/assets/icons/logos";
import { BrandIcon } from "@/components/shared/BrandIcon";
import imgFondo from "@/assets/images/fondos/Teleférico.jpg";

/**
 * Submission page — registration form for the contest.
 * Currently displaying "Under Construction" layout.
 */
export const metadata = {
  title: "Postulación · Marca País Venezuela",
  description: "Registra tu propuesta para el Concurso Nacional de la Marca País Venezuela.",
};

export default function SubmissionPage() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-secondary text-foreground-inverse overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={imgFondo}
          alt="Fondo En Construcción"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Brand color overlay */}
        <div className="absolute inset-0 bg-primary opacity-95" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-12 w-full px-6 text-center animate-in fade-in duration-1000">
        <BrandIcon
          icon={Logomarcalarge}
          className="w-full max-w-[12rem] sm:max-w-[16rem] md:max-w-lg lg:max-w-2xl h-auto text-foreground-inverse drop-shadow-md"
        />

        <p className="text-lg md:text-2xl lg:text-3xl font-bold uppercase tracking-[0.5em] md:tracking-[1em] drop-shadow-sm ml-[0.5em] md:ml-[1em]">
          <span className="text-foreground-inverse">EN </span>
          <span className="text-secondary">CONSTRUCCIÓN</span>
        </p>
      </div>

      {/* Original component commented out */}
      {/* <SubmissionForm /> */}
    </main>
  );
}
