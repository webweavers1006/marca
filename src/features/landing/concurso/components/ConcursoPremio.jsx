import { cn } from "@/lib/utils";
import { Award } from "lucide-react";

/**
 * ConcursoPremio - Shows the prize information for the contest.
 * Adheres to the editorial and glassmorphism design system.
 */
export function ConcursoPremio({ premio, theme, className }) {
  if (!premio) return null;

  return (
    <div className={cn("relative h-full flex flex-col justify-center items-center md:items-start p-10 md:p-14 lg:p-16 xl:p-20 text-foreground-inverse", className)}>
      <div className="flex flex-col gap-6 max-w-lg relative z-10">
        
        {/* Subtle top divider for editorial layout */}
        <div className="w-12 h-1 bg-primary mb-2" />

        <div className="flex items-center gap-4">
          <Award className="text-primary w-10 h-10 md:w-12 md:h-12 drop-shadow-sm" />
          <h3 className="text-sm md:text-base tracking-[0.3em] uppercase font-bold opacity-90">
            {premio.titulo}
          </h3>
        </div>

        <p className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-primary drop-shadow-sm leading-none">
          {premio.monto}
        </p>

        <p className="text-lg md:text-xl leading-relaxed opacity-90 mt-2 font-medium">
          {premio.descripcion}
        </p>

      </div>
      
      {/* Subtle ambient glass decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-foreground/5 blur-3xl rounded-full pointer-events-none -z-10 opacity-30" />
    </div>
  );
}
