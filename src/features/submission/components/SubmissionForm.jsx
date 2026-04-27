"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { submissionSchema } from "../schemas/submission.schema";
import { submitSubmissionAction } from "../actions/submitSubmission.action";

const DEFAULT_VALUES = {
  id_tipo_participacion: "",
  descripcion_proyecto_relevante: "",
  enlace_proyectos_previos: "",
  id_medio_difusion: "",
  integrantes: [
    {
      nombre: "",
      identificacion: "",
      email: "",
      telefono: "",
      id_tipo_integrante: "",
      id_area_xp: "",
      id_tiempo_xp: "",
      id_nivel_educativo: "",
    },
  ],
};

export function SubmissionForm({ catalogs }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(submissionSchema),
    defaultValues: DEFAULT_VALUES,
    shouldUnregister: true, // Esto elimina automáticamente del payload los campos ocultos (como la empresa cuando no aplica)
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "integrantes",
  });

  const selectedTipoParticipacion = watch("id_tipo_participacion");

  // Helper para saber si seleccionó "Empresa", "Institución" o "Instituto Educativo"
  const isEmpresaType = () => {
    if (!selectedTipoParticipacion) return false;
    const tipo = catalogs?.tipoParticipacion?.find((t) => t.id === Number(selectedTipoParticipacion));
    if (!tipo) return false;
    const nombre = tipo.participacion.toLowerCase();
    return nombre.includes("empresa") || nombre.includes("institución") || nombre.includes("instituto");
  };

  async function onSubmit(values) {
    setIsSubmitting(true);

    // Parse numeric fields properly before sending
    const payload = {
      ...values,
      id_tipo_participacion: Number(values.id_tipo_participacion),
      id_medio_difusion: Number(values.id_medio_difusion),
      integrantes: values.integrantes.map(intg => ({
        ...intg,
        id_tipo_integrante: Number(intg.id_tipo_integrante),
        id_area_xp: Number(intg.id_area_xp),
        id_tiempo_xp: Number(intg.id_tiempo_xp),
        id_nivel_educativo: Number(intg.id_nivel_educativo),
      })),
      empresa: isEmpresaType() ? values.empresa : undefined,
    };

    try {
      const formData = new FormData();
      formData.set("payload", JSON.stringify(payload));

      const result = await submitSubmissionAction(null, formData);

      if (result?.success) {
        toast.success("¡Postulación enviada con éxito!", { description: `ID: ${result.id}` });
      } else {
        toast.error(result?.error || "Error al enviar la postulación");
      }
    } catch (err) {
      toast.error("Ocurrió un error inesperado.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!catalogs) return <div>Cargando...</div>;

  return (
    <main id="submission" className="p-8 max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Registro de Postulación</h1>
        <p className="text-gray-600">Completa los datos de tu propuesta.</p>
      </div>

      <form 
        onSubmit={handleSubmit(onSubmit, (errs) => console.log("Errores de validación:", errs))} 
        className="space-y-6"
      >

        {/* SECCIÓN 1: DATOS DE LA POSTULACIÓN */}
        <section className="p-6 border rounded-lg space-y-4">
          <h2 className="text-xl font-semibold">Datos de la Propuesta</h2>

          <div>
            <label className="block mb-1">Tipo de Participación</label>
            <select {...register("id_tipo_participacion")} className="w-full border p-2 rounded">
              <option value="">-- Selecciona --</option>
              {catalogs.tipoParticipacion?.map((t) => (
                <option key={t.id} value={t.id}>{t.participacion}</option>
              ))}
            </select>
            {errors.id_tipo_participacion && <span className="text-red-500 text-sm">{errors.id_tipo_participacion.message}</span>}
          </div>

          <div>
            <label className="block mb-1">Descripción del Proyecto (Mín. 10 caracteres)</label>
            <textarea {...register("descripcion_proyecto_relevante")} rows="4" className="w-full border p-2 rounded" />
            {errors.descripcion_proyecto_relevante && <span className="text-red-500 text-sm">{errors.descripcion_proyecto_relevante.message}</span>}
          </div>

          <div>
            <label className="block mb-1">Enlaces a proyectos previos</label>
            <input {...register("enlace_proyectos_previos")} type="text" className="w-full border p-2 rounded" />
            {errors.enlace_proyectos_previos && <span className="text-red-500 text-sm">{errors.enlace_proyectos_previos.message}</span>}
          </div>

          <div>
            <label className="block mb-1">¿Cómo te enteraste del concurso?</label>
            <select {...register("id_medio_difusion")} className="w-full border p-2 rounded">
              <option value="">-- Selecciona --</option>
              {catalogs.mediosDifusion?.map((m) => (
                <option key={m.id} value={m.id}>{m.medio}</option>
              ))}
            </select>
            {errors.id_medio_difusion && <span className="text-red-500 text-sm">{errors.id_medio_difusion.message}</span>}
          </div>
        </section>

        {/* SECCIÓN 2: EMPRESA O INSTITUCIÓN (Condicional) */}
        {isEmpresaType() && (
          <section className="p-6 border rounded-lg space-y-4">
            <h2 className="text-xl font-semibold">Datos de la Empresa / Institución</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Nombre</label>
                <input {...register("empresa.nombre")} className="w-full border p-2 rounded" />
                {errors.empresa?.nombre && <span className="text-red-500 text-xs">{errors.empresa.nombre.message}</span>}
              </div>
              <div>
                <label className="block mb-1">Registro Fiscal (RIF)</label>
                <input {...register("empresa.numero_registro_fiscal")} className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input {...register("empresa.email")} type="email" className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block mb-1">Teléfono</label>
                <input {...register("empresa.telefono")} className="w-full border p-2 rounded" />
              </div>
            </div>
          </section>
        )}

        {/* SECCIÓN 3: DATOS DE LOS INTEGRANTES (Siempre visible) */}
        <section className="p-6 border rounded-lg space-y-4">
          <h2 className="text-xl font-semibold">{isEmpresaType() ? "Datos de los Integrantes" : "Datos de los Integrantes"}</h2>
          {fields.map((item, index) => (
            <div key={item.id} className="p-4 border rounded bg-gray-50 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">Integrante #{index + 1}</h3>
                {index > 0 && (
                  <button type="button" onClick={() => remove(index)} className="text-red-500 text-sm">Eliminar</button>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-sm">Nombre Completo</label>
                  <input {...register(`integrantes.${index}.nombre`)} className="w-full border p-2 rounded" />
                  {errors.integrantes?.[index]?.nombre && <span className="text-red-500 text-xs">{errors.integrantes[index].nombre.message}</span>}
                </div>
                <div>
                  <label className="block mb-1 text-sm">Cédula / Pasaporte</label>
                  <input {...register(`integrantes.${index}.identificacion`)} className="w-full border p-2 rounded" />
                  {errors.integrantes?.[index]?.identificacion && <span className="text-red-500 text-xs">{errors.integrantes[index].identificacion.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-sm">Correo Electrónico</label>
                  <input {...register(`integrantes.${index}.email`)} type="email" className="w-full border p-2 rounded" />
                  {errors.integrantes?.[index]?.email && <span className="text-red-500 text-xs">{errors.integrantes[index].email.message}</span>}
                </div>
                <div>
                  <label className="block mb-1 text-sm">Teléfono</label>
                  <input {...register(`integrantes.${index}.telefono`)} className="w-full border p-2 rounded" />
                  {errors.integrantes?.[index]?.telefono && <span className="text-red-500 text-xs">{errors.integrantes[index].telefono.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div>
                  <label className="block mb-1 text-sm">Rol</label>
                  <select {...register(`integrantes.${index}.id_tipo_integrante`)} className="w-full border p-2 rounded">
                    <option value="">-- Selecciona --</option>
                    {catalogs.tiposIntegrantes?.map((t) => (
                      <option key={t.id} value={t.id}>{t.tipo_integrante}</option>
                    ))}
                  </select>
                  {errors.integrantes?.[index]?.id_tipo_integrante && <span className="text-red-500 text-xs">{errors.integrantes[index].id_tipo_integrante.message}</span>}
                </div>
                <div>
                  <label className="block mb-1 text-sm">Área de Experiencia</label>
                  <select {...register(`integrantes.${index}.id_area_xp`)} className="w-full border p-2 rounded">
                    <option value="">-- Selecciona --</option>
                    {catalogs.areasXp?.map((t) => (
                      <option key={t.id} value={t.id}>{t.area}</option>
                    ))}
                  </select>
                  {errors.integrantes?.[index]?.id_area_xp && <span className="text-red-500 text-xs">{errors.integrantes[index].id_area_xp.message}</span>}
                </div>
                <div>
                  <label className="block mb-1 text-sm">Años de Exp.</label>
                  <select {...register(`integrantes.${index}.id_tiempo_xp`)} className="w-full border p-2 rounded">
                    <option value="">-- Selecciona --</option>
                    {catalogs.tiemposXp?.map((t) => (
                      <option key={t.id} value={t.id}>{t.tiempo}</option>
                    ))}
                  </select>
                  {errors.integrantes?.[index]?.id_tiempo_xp && <span className="text-red-500 text-xs">{errors.integrantes[index].id_tiempo_xp.message}</span>}
                </div>
                <div>
                  <label className="block mb-1 text-sm">Nivel Educativo</label>
                  <select {...register(`integrantes.${index}.id_nivel_educativo`)} className="w-full border p-2 rounded">
                    <option value="">-- Selecciona --</option>
                    {catalogs.nivelesEducativos?.map((t) => (
                      <option key={t.id} value={t.id}>{t.nivel_educativo}</option>
                    ))}
                  </select>
                  {errors.integrantes?.[index]?.id_nivel_educativo && <span className="text-red-500 text-xs">{errors.integrantes[index].id_nivel_educativo.message}</span>}
                </div>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() => append(DEFAULT_VALUES.integrantes[0])}
            className="text-blue-600 text-sm font-medium"
          >
            + Agregar otro integrante
          </button>
        </section>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold disabled:bg-gray-400"
        >
          {isSubmitting ? "Enviando postulación..." : "Enviar Postulación"}
        </button>
      </form>
    </main>
  );
}
