"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { submissionSchema } from "../schemas/submission.schema";
import { submitSubmissionAction } from "../actions/submitSubmission.action";
import { formFieldsConfig } from "../config/submission-fields.config";
import { SUBMISSION_CONTENT } from "../config/submission-content.config";
import { ParticipantsList } from "./ParticipantsList";
import { SuccessMessage } from "./SuccessMessage";

// Default form values
const DEFAULT_VALUES = {
  teamName: "",
  participationType: "INDIVIDUAL",
  motivation: "",
  conceptualBasis: "",
  countryNarrative: "",
  slogan: "",
  participants: [
    {
      fullName: "",
      idDocument: "",
      email: "",
      phone: "",
      countryOfResidence: "",
      isRepresentative: true,
    },
  ],
};

/**
 * Main registration form for the contest.
 * Orchestrates React Hook Form + Zod + Server Action.
 * Fully config-driven via formFieldsConfig and SUBMISSION_CONTENT.
 */
export function SubmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(submissionSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const watchedParticipants = watch("participants");
  const participationType = watch("participationType");

  async function onSubmit(values) {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.set("payload", JSON.stringify(values));

      const result = await submitSubmissionAction(null, formData);

      if (result?.success) {
        toast.success(SUBMISSION_CONTENT.toasts.success, {
          description: `${SUBMISSION_CONTENT.toasts.successDesc}${result.id}`,
          duration: 8000,
        });
        setIsSuccess(true);
        reset();
      } else {
        toast.error(result?.error ?? SUBMISSION_CONTENT.toasts.errorDefault);
      }
    } catch (err) {
      console.error("[SubmissionForm] Unexpected error:", err);
      toast.error(SUBMISSION_CONTENT.toasts.errorUnexpected);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return <SuccessMessage onReset={() => setIsSuccess(false)} />;
  }

  return (
    <main id="submission">
      <h1>{SUBMISSION_CONTENT.header.title}</h1>
      <p>{SUBMISSION_CONTENT.header.subtitle}</p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate id="submission-form">
        {/* Participation type toggle */}
        <div>
          <span>{SUBMISSION_CONTENT.participationType.label}</span>
          <div>
            {["INDIVIDUAL", "COLLECTIVE"].map((type) => (
              <label key={type}>
                <input
                  type="radio"
                  value={type}
                  {...register("participationType")}
                />
                {type === "INDIVIDUAL"
                  ? SUBMISSION_CONTENT.participationType.individual
                  : SUBMISSION_CONTENT.participationType.collective}
              </label>
            ))}
          </div>
        </div>

        {/* Dynamic fields from config */}
        {formFieldsConfig.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name}>
              {field.label(participationType)}
            </label>
            {field.component === "textarea" ? (
              <textarea
                id={field.name}
                placeholder={field.placeholder(participationType)}
                rows={field.rows}
                {...register(field.name)}
              />
            ) : (
              <input
                id={field.name}
                type={field.type}
                placeholder={field.placeholder(participationType)}
                {...register(field.name)}
              />
            )}
            {errors[field.name] && (
              <span role="alert">{errors[field.name].message}</span>
            )}
          </div>
        ))}

        {/* Participants list */}
        <ParticipantsList
          control={control}
          register={register}
          errors={errors}
          setValue={setValue}
          watchedParticipants={watchedParticipants}
        />

        {/* Submit */}
        <div>
          <button type="submit" disabled={isSubmitting} id="submit-submission-btn">
            {isSubmitting
              ? SUBMISSION_CONTENT.submit.sending
              : SUBMISSION_CONTENT.submit.idle}
          </button>
          <p>{SUBMISSION_CONTENT.submit.disclaimer}</p>
        </div>
      </form>
    </main>
  );
}
