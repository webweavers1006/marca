import { SubmissionForm } from "@/features/submission/components/SubmissionForm";

/**
 * Submission page — registration form for the contest.
 * Routing only: delegates all UI to the feature component.
 */
export const metadata = {
  title: "Postulación · Marca País Venezuela",
  description: "Registra tu propuesta para el Concurso Nacional de la Marca País Venezuela.",
};

export default function SubmissionPage() {
  return <SubmissionForm />;
}
