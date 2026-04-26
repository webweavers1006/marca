import { SectionLabel } from "@/components/shared/SectionLabel";
import { Heading } from "@/components/shared/Heading";

export function JuradoHeader({ label, titulo, tituloHighlight, subtitulo }) {
  return (
    <div className="mb-16 md:mb-24 max-w-2xl">
      <SectionLabel label={label} animate />

      <Heading as="h2" variant="section" id="jurado-heading" className="mt-6 mb-6">
        {titulo}{" "}
        <span className="text-primary">{tituloHighlight}</span>
      </Heading>

      <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
        {subtitulo}
      </p>
    </div>
  );
}
