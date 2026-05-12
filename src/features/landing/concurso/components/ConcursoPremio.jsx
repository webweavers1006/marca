import { cn } from "@/lib/utils";
import { Award } from "lucide-react";
import Image from "next/image";

/**
 * ConcursoPremio - Shows the prize information for the contest.
 * Adheres to the editorial and glassmorphism design system.
 */
export function ConcursoPremio({ premio, theme, className }) {
  if (!premio) return null;

  return (
    <div className={cn("relative h-full flex flex-col justify-center items-center p-10 md:p-14 lg:p-16 xl:p-20 text-foreground-inverse text-center", className)}>
      <div className="flex flex-col gap-8 max-w-lg relative z-10 items-center">

        {/* Subtle top divider for editorial layout */}
        <div className="w-12 h-1 bg-primary mb-2" />

        {premio.logo && (
          <div className="relative w-28 h-28 md:w-40 md:h-40 mb-2 opacity-95 hover:opacity-100 transition-all duration-500 transform hover:scale-105">
            <Image
              src={premio.logo}
              alt="Logo Premio"
              fill
              className="object-contain"
            />
          </div>
        )}

        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-primary leading-tight uppercase">
            {premio.titulo}
          </h3>

          <p className="text-sm md:text-base tracking-[0.4em] uppercase font-bold opacity-80 border-y border-foreground-inverse/10 py-2 px-6">
            {premio.monto}
          </p>
        </div>

        <p className="text-lg md:text-xl leading-relaxed opacity-90 font-medium max-w-md">
          {premio.descripcion}
        </p>

      </div>

      {/* Subtle ambient glass decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-foreground/5 blur-3xl rounded-full pointer-events-none -z-10 opacity-30" />
    </div>
  );
}
