import { z } from "zod";

// Schema for a single participant
export const participantSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters").max(255),
  idDocument: z.string().min(3, "ID document is required").max(50),
  email: z.string().email("Enter a valid email address").max(255),
  phone: z.string().min(7, "Phone must be at least 7 characters").max(30),
  countryOfResidence: z.string().min(2, "Country of residence is required").max(100),
  isRepresentative: z.boolean().default(false),
});

// Schema for the full submission (Submission + Participants)
export const submissionSchema = z.object({
  teamName: z.string().min(2, "Team name or pseudonym is required").max(255),
  participationType: z.enum(["INDIVIDUAL", "COLLECTIVE"]),
  motivation: z.string().min(50, "Motivation must be at least 50 characters"),
  conceptualBasis: z.string().min(100, "Conceptual basis must be at least 100 characters"),
  countryNarrative: z.string().min(100, "Country narrative must be at least 100 characters"),
  slogan: z.string().min(5, "Slogan must be at least 5 characters").max(500),
  participants: z
    .array(participantSchema)
    .min(1, "At least one participant is required")
    .refine(
      (items) => items.some((p) => p.isRepresentative),
      "At least one participant must be the official representative"
    ),
});
