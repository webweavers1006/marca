import { db } from "@/lib/prisma";

/**
 * Creates a new Submission with its associated Participants in a single transaction.
 * @param {Object} data - Validated submission data from the action.
 * @param {string} data.teamName
 * @param {string} data.participationType
 * @param {string} data.motivation
 * @param {string} data.conceptualBasis
 * @param {string} data.countryNarrative
 * @param {string} data.slogan
 * @param {Array}  data.participants - Array of participant objects.
 * @returns {Promise<{ id: string }>} The created Submission id.
 */
export async function createSubmission(data) {
  const { participants, ...submissionData } = data;

  const submission = await db.$transaction(async (tx) => {
    const created = await tx.submission.create({
      data: {
        ...submissionData,
        participants: {
          create: participants.map((p) => ({
            fullName: p.fullName,
            idDocument: p.idDocument,
            email: p.email,
            phone: p.phone,
            countryOfResidence: p.countryOfResidence,
            isRepresentative: p.isRepresentative,
          })),
        },
      },
      select: { id: true },
    });

    return created;
  });

  return submission;
}

/**
 * Retrieves a Submission by ID including its participants.
 * @param {string} id - The Submission cuid.
 * @returns {Promise<Object|null>}
 */
export async function getSubmissionById(id) {
  return db.submission.findUnique({
    where: { id },
    include: { participants: true },
  });
}
