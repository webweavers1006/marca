import { SectionLabel } from "@/components/shared/SectionLabel";
import { Heading } from "@/components/shared/Heading";

export function JuradoHeader({ label, titulo, tituloHighlight, subtitulo, theme }) {
  return (
    <div className="mb-12 lg:mb-0 max-w-2xl ml-auto text-right">
      <div className="flex justify-end">
        <SectionLabel label={label} variant="inverse" />
      </div>

      <Heading as="h2" variant="section" align="right" id="jurado-heading" className="mt-6 mb-6 text-foreground-inverse">
        {titulo}{" "}
        <span className={`font-bold ${theme.accentText || ""}`}>{tituloHighlight}</span>
      </Heading>

      <p className="text-foreground-inverse/80 text-lg md:text-xl leading-relaxed">
        {subtitulo}
      </p>
    </div>
  );
}
