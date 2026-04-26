"use client";

import { JURADO_CONTENT } from "./config/jurado.content.config";
import { JuradoHeader } from "./components/JuradoHeader";
import { JuradoGroupList } from "./components/JuradoGroupList";

/**
 * JuradoView — "Los Rostros del Proceso" two-column editorial layout.
 * Jurado Especializado | Veedores del Concurso.
 */
export function JuradoView() {
  const { label, sectionId, titulo, tituloHighlight, subtitulo } = JURADO_CONTENT;

  return (
    <section id={sectionId} className="bg-secondary/5 overflow-hidden" aria-labelledby="jurado-heading">
      <div className="section-inner">
        {/* Header Section */}
        <JuradoHeader 
          label={label} 
          titulo={titulo} 
          tituloHighlight={tituloHighlight} 
          subtitulo={subtitulo} 
        />

        {/* Two columns: Jurado & Veedores */}
        <JuradoGroupList />
      </div>
    </section>
  );
}
