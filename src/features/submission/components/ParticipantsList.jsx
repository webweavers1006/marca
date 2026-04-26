"use client";

import { useFieldArray } from "react-hook-form";
import { participantsFieldsConfig } from "../config/submission-fields.config";
import { SUBMISSION_CONTENT } from "../config/submission-content.config";

/**
 * Dynamic participants list (1:N relationship).
 * Driven entirely by participantsFieldsConfig and SUBMISSION_CONTENT.
 *
 * @param {{ control, register, errors, setValue, watchedParticipants }} props
 */
export function ParticipantsList({ control, register, errors, setValue, watchedParticipants }) {
  const { fields, append, remove } = useFieldArray({ control, name: "participants" });
  const { title, hint, participantPrefix, repSuffix, markAsRep, addParticipant } =
    SUBMISSION_CONTENT.participantsList;

  return (
    <section aria-label={title}>
      <h3>{title}</h3>
      <p>{hint}</p>

      {fields.map((field, index) => {
        const isRep = watchedParticipants?.[index]?.isRepresentative;
        const fieldErrors = errors?.participants?.[index] ?? {};

        return (
          <fieldset key={field.id} id={`participant-${index}`}>
            <legend>
              {participantPrefix}{index + 1}
              {isRep ? repSuffix : ""}
            </legend>

            {participantsFieldsConfig.map((f) => (
              <div key={f.name}>
                <label htmlFor={`participants.${index}.${f.name}`}>{f.label}</label>
                <input
                  id={`participants.${index}.${f.name}`}
                  type={f.type}
                  placeholder={f.placeholder}
                  {...register(`participants.${index}.${f.name}`)}
                />
                {fieldErrors[f.name] && (
                  <span role="alert">{fieldErrors[f.name].message}</span>
                )}
              </div>
            ))}

            {!isRep && (
              <button
                type="button"
                onClick={() => {
                  watchedParticipants.forEach((_, i) =>
                    setValue(`participants.${i}.isRepresentative`, false)
                  );
                  setValue(`participants.${index}.isRepresentative`, true);
                }}
              >
                {markAsRep}
              </button>
            )}

            {fields.length > 1 && (
              <button type="button" onClick={() => remove(index)}>
                Eliminar
              </button>
            )}
          </fieldset>
        );
      })}

      <button
        type="button"
        onClick={() =>
          append({
            fullName: "",
            idDocument: "",
            email: "",
            phone: "",
            countryOfResidence: "",
            isRepresentative: false,
          })
        }
      >
        {addParticipant}
      </button>
    </section>
  );
}
