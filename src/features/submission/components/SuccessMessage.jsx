"use client";

import { SUBMISSION_CONTENT } from "../config/submission-content.config";

/**
 * Success state displayed after a successful form submission.
 * @param {{ onReset: Function }} props
 */
export function SuccessMessage({ onReset }) {
  const { title, text, button } = SUBMISSION_CONTENT.successMessage;

  return (
    <section id="submission-success">
      <h2>{title}</h2>
      <p>{text}</p>
      <button onClick={onReset} id="new-submission-btn">
        {button}
      </button>
    </section>
  );
}
