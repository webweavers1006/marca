import { z } from "zod";

export const integranteSchema = z.object({
  nombre: z.string().min(3, "El nombre debe tener al menos 3 caracteres").max(255),
  identificacion: z.string().min(3, "La identificación es obligatoria").max(50),
  email: z.string().email("Ingrese un correo electrónico válido").max(255).optional().or(z.literal("")),
  telefono: z.string().max(50).optional().or(z.literal("")),
  id_tipo_integrante: z.coerce.number().int().positive("Debe seleccionar el tipo de integrante"),
  id_area_xp: z.coerce.number().int().positive("Debe seleccionar un área de experiencia"),
  id_tiempo_xp: z.coerce.number().int().positive("Debe seleccionar un tiempo de experiencia"),
  id_nivel_educativo: z.coerce.number().int().positive("Debe seleccionar un nivel educativo"),
});

export const empresaSchema = z.object({
  nombre: z.string().min(3, "Nombre obligatorio").max(255),
  numero_registro_fiscal: z.string().max(100).optional().or(z.literal("")),
  email: z.string().email("Correo válido").optional().or(z.literal("")),
  telefono: z.string().max(50).optional().or(z.literal("")),
  id_pais: z.coerce.number().int().positive("Debe seleccionar un país"),
  id_estado: z.coerce.number().int().positive("Debe seleccionar un estado").optional().or(z.literal(0)),
  provincia_municipio: z.string().max(255).optional().or(z.literal("")),
  ciudad: z.string().max(255).optional().or(z.literal("")),
});

export const submissionSchema = z.object({
  id_tipo_participacion: z.coerce.number().int().positive("Debe seleccionar el tipo de participación"),
  descripcion_proyecto_relevante: z.string().min(10, "La descripción es obligatoria (mín. 10 caracteres)"),
  enlace_proyectos_previos: z.string().min(5, "Los enlaces son obligatorios").max(500),
  id_medio_difusion: z.coerce.number().int().positive("Debe seleccionar cómo se enteró"),
  
  // Siempre pediremos al menos un integrante
  integrantes: z.array(integranteSchema).min(1, "Debe agregar al menos un integrante"),
  
  // Empresa es condicional
  empresa: empresaSchema.optional(),
});
