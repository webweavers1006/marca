import { motion } from "framer-motion";
import { Heading } from "@/components/shared/Heading";
import {
  sectionContainerVariants,
  sectionItemVariants,
} from "@/features/shared/config/animations.config";
import { JURY_GROUPS } from "../config/jurado.content.config";

export function JuradoGroupList({ theme }) {
  return (
    <motion.div
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative"
    >
      {/* Subtle separator line for md screens */}
      <div className={`hidden md:block absolute left-1/2 top-0 bottom-0 w-px ${theme?.accentBg ? theme.accentBg + "/20" : "bg-foreground-inverse/20"} -translate-x-1/2`} />

      {JURY_GROUPS.map((group) => (
        <motion.div
          key={group.id}
          variants={sectionItemVariants}
          className="relative"
        >
          <div className="flex flex-col h-full">
            <Heading
              as="h3"
              variant="subsection"
              className="text-foreground-inverse mb-2 tracking-tighter"
            >
              {group.titulo}
            </Heading>

            <div className="inline-flex items-center gap-2 mb-6">
              <span className={`h-px w-6 ${theme?.accentBg || "bg-foreground-inverse"}`} />
              <p className={`text-sm ${theme?.accentText || "text-foreground-inverse"} font-semibold tracking-wider uppercase`}>
                {group.cantidad}
              </p>
            </div>

            <p className="text-base text-foreground-inverse/80 leading-relaxed mb-8 max-w-md">
              {group.descripcion}
            </p>

            <div className="mt-auto">
              <p className="text-sm font-medium text-foreground-inverse/90 leading-loose flex flex-wrap gap-x-2 gap-y-1">
                {group.miembros.map((miembro, idx) => (
                  <span key={idx} className="inline-flex items-center">
                    {miembro}
                    {idx < group.miembros.length - 1 && (
                      <span className={`mx-2 ${theme?.accentText ? theme.accentText + "/50" : "text-foreground-inverse/50"}`}>•</span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
