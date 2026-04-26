"use server";

import { submissionSchema } from "../schemas/submission.schema";
import { createSubmission } from "../services/submission.service";

/**
 * Server Action to submit a new Submission.
 * Orchestrates: parse FormData → validate (Zod) → call service → return result.
 *
 * @param {any} prevState - Previous state from useActionState.
 * @param {FormData} formData - Raw form data from the client.
 * @returns {Promise<{ success?: boolean, id?: string, error?: string, details?: Object }>}
 */
export async function submitSubmissionAction(prevState, formData) {
  const raw = formData.get("payload");

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return { error: "Formato de datos inválido." };
  }

  const result = submissionSchema.safeParse(parsed);

  if (!result.success) {
    return {
      error: "Por favor revisa los campos del formulario.",
      details: result.error.flatten().fieldErrors,
    };
  }

  try {
    const created = await createSubmission(result.data);
    return { success: true, id: created.id };
  } catch (err) {
    console.error("[submitSubmissionAction] DB error:", err.message);
    return { error: "Ocurrió un error al guardar tu postulación. Intenta nuevamente." };
  }
}
