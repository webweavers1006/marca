export const formFieldsConfig = [
  {
    name: "teamName",
    label: (participationType) =>
      participationType === "COLLECTIVE"
        ? "Nombre del equipo / Seudónimo"
        : "Nombre artístico o seudónimo",
    placeholder: (participationType) =>
      participationType === "COLLECTIVE"
        ? "Estudio Creativo Venezuela"
        : "Tu nombre o seudónimo",
    type: "text",
    component: "input",
  },
  {
    name: "slogan",
    label: () => "Lema de la propuesta",
    placeholder: () => "Una frase que sintetice tu visión de Venezuela...",
    type: "text",
    component: "input",
  },
  {
    name: "motivation",
    label: () => "Motivación",
    placeholder: () =>
      "¿Por qué decidiste participar en este concurso? ¿Qué te mueve a construir la Marca País?",
    component: "textarea",
    rows: 4,
  },
  {
    name: "conceptualBasis",
    label: () => "Fundamentación conceptual",
    placeholder: () =>
      "Explica el sustento conceptual, teórico y creativo de tu propuesta de marca...",
    component: "textarea",
    rows: 5,
  },
  {
    name: "countryNarrative",
    label: () => "Narrativa del país",
    placeholder: () =>
      "¿Qué Venezuela quieres proyectar al mundo? Describe la narrativa identitaria de tu propuesta...",
    component: "textarea",
    rows: 5,
  },
];

export const participantsFieldsConfig = [
  {
    name: "fullName",
    label: "Nombre completo",
    placeholder: "Nombre y apellido",
    type: "text",
    fullWidth: false,
  },
  {
    name: "idDocument",
    label: "Cédula / Pasaporte",
    placeholder: "V-12345678 o Pasaporte",
    type: "text",
    fullWidth: false,
  },
  {
    name: "email",
    label: "Correo electrónico",
    placeholder: "correo@ejemplo.com",
    type: "email",
    fullWidth: false,
  },
  {
    name: "phone",
    label: "Teléfono",
    placeholder: "+58 412 000 0000",
    type: "text",
    fullWidth: false,
  },
  {
    name: "countryOfResidence",
    label: "País de residencia",
    placeholder: "Venezuela, España, EE.UU...",
    type: "text",
    fullWidth: true,
  },
];
