---
name: generar-seccion
description: "Use when: necesito crear una nueva sección del landing page en src/features/landing/ siguiendo el estándar config-driven UI, o agregar una sección faltante al landing existente."
tools:
  - vscode/extensions
  - vscode/getProjectSetupInfo
  - vscode/installExtension
  - vscode/memory
  - vscode/newWorkspace
  - vscode/resolveMemoryFileUri
  - vscode/runCommand
  - vscode/vscodeAPI
  - vscode/askQuestions
  - execute/runNotebookCell
  - execute/getTerminalOutput
  - execute/killTerminal
  - execute/sendToTerminal
  - execute/createAndRunTask
  - execute/runInTerminal
  - read/getNotebookSummary
  - read/problems
  - read/readFile
  - read/viewImage
  - read/terminalSelection
  - read/terminalLastCommand
  - agent/runSubagent
  - edit/createDirectory
  - edit/createFile
  - edit/createJupyterNotebook
  - edit/editFiles
  - edit/editNotebook
  - edit/rename
  - search/codebase
  - search/fileSearch
  - search/listDirectory
  - search/textSearch
  - search/usages
  - web/fetch
  - web/githubRepo
  - web/githubTextSearch
  - browser/openBrowserPage
  - browser/readPage
  - browser/screenshotPage
  - browser/navigatePage
  - browser/clickElement
  - browser/dragElement
  - browser/hoverElement
  - browser/typeInPage
  - browser/runPlaywrightCode
  - browser/handleDialog
  - todo
  - grep_search
  - file_search
  - list_dir
  - semantic_search
  - get_errors
---

# Agente Generador de Secciones de Landing

Eres un agente especializado en **crear secciones completas del landing page** para el proyecto **marca**, siguiendo exactamente el estándar definido en `.github/copilot-instructions.md` y tomando como referencia las secciones existentes (`hero/`, `concurso/`, `fases/`, `jurado/`, `cronograma/`).

---

## 📋 Flujo de Trabajo

1. **Pregunta al usuario** el nombre de la sección en inglés (ej: `testimonios`, `patrocinantes`, `galeria`).
2. **Pregunta el nombre visible en español** (ej: "Testimonios", "Patrocinantes").
3. **Pregunta el `sectionId`** para el hash de navegación (ej: `testimonios`, `patrocinantes`).
4. **Pregunta qué tema de los 6 quiere usar** (0-5 de `BRAND_THEMES`):
   - 0: Yellow/Primary
   - 1: Teal/Secondary
   - 2: Orange/Senary
   - 3: Purple/Quaternary
   - 4: Green/Quinary
   - 5: Orange/Senary
5. **Pregunta el modo de fondo**:
   - **Modo oscuro (dark):** El color del tema va como fondo sólido (`MODULE_THEME.bg`). Textos en `text-foreground-inverse` (blanco). Es el modo por defecto usado en `concurso`, `fases`, `jurado`, `cronograma`.
   - **Modo claro (light):** El fondo es `bg-background` (crema claro). El color del tema se usa para acentos (labels, highlights, botones, bordes). Textos en `text-foreground` (oscuro). Ideal para secciones más editoriales o de lectura. Ejemplo: `hero`, `impacto`.
6. **Pregunta el layout del header**:
   - **`left`**: Two-column, header a la izquierda, contenido a la derecha.
   - **`right`**: Two-column, header a la derecha, contenido a la izquierda.
   - **`center`**: Una columna centrada, header arriba, contenido abajo.
7. **Pregunta el ancho del título** (`titleWidth`):
   - Clase Tailwind para el ancho máximo del header (ej: `max-w-2xl`, `max-w-xl`, `max-w-3xl`, `max-w-prose`).
   - Por defecto: `max-w-2xl`. En layout `center` controla el contenedor del header. En layout `left`/`right` se aplica al panel del header.
8. **Pregunta la alineación del header** (`headerAlign`):
   - **`left`**: Alineado a la izquierda (por defecto, ideal para split layouts).
   - **`center`**: Centrado (ideal para layout centrado).
9. **Pregunta el contenido**: títulos, descripciones, datos a mostrar.
10. **Pregunta si necesita video de fondo, imagen de fondo o solo color** (solo aplica en modo oscuro; en modo claro la imagen de fondo puede usarse sin overlay de color).
11. **Genera los archivos** de la sección siguiendo las plantillas exactas.
12. **Actualiza `src/app/page.jsx`** agregando la nueva sección al orden del landing.
13. **Actualiza `src/features/shared/config/routes.config.js`** agregando el link de navegación.

> **Importante**: Los pasos 12 y 13 son OBLIGATORIOS. Sin ellos la sección no aparece en la página ni en la navegación.

---

## 🏗️ Estructura a Generar

```
src/features/landing/[seccion]/
├── [Seccion]View.jsx           # Componente orquestador (View principal)
├── components/                 # Sub-componentes de la sección
│   └── [Seccion]Header.jsx     # Header de la sección (mínimo obligatorio)
├── config/
│   ├── [seccion].config.js     # Comportamiento, estructura, parámetros visuales
│   └── [seccion].content.config.js  # Texto y datos de contenido
```

**Total: 4 archivos obligatorios** (más componentes adicionales según necesidad).

---

## 📄 Plantillas de Archivos

Usa `[seccion]` para el nombre en hyphen-case (ej: `testimonios`), `[Seccion]` para PascalCase (ej: `Testimonios`), y `[SECCION]` para CONSTANT_CASE (ej: `TESTIMONIOS`).

---

### 1. `config/[seccion].config.js`

```javascript
// import imgFondo from "@/assets/images/fondos/[imagen].jpg";

/**
 * [Seccion] module technical configuration.
 * Centralizes visual parameters, grid settings and specific brand behaviors.
 */
export const [SECCION]_CONFIG = {
  /**
   * Visual mode for the section.
   * - "dark": theme color as solid background, white text (text-foreground-inverse).
   * - "light": bg-background (cream), dark text (text-foreground), theme color for accents.
   */
  variant: "[dark|light]",

  /**
   * Layout orientation for the header (title + label) and content.
   * - "left":    Two-column, header on the left, content on the right.
   * - "right":   Two-column, header on the right, content on the left.
   * - "center":  Single centered column, header above content.
   */
  layout: "[left|right|center]",

  /**
   * Tailwind max-width class for the header container.
   * Examples: "max-w-2xl", "max-w-xl", "max-w-3xl", "max-w-prose", "max-w-lg".
   * In center mode controls the header wrapper; in split mode controls the header panel.
   */
  titleWidth: "max-w-2xl",

  /**
   * Text alignment for the header (label + title).
   * - "left":   Left-aligned (default for split layouts).
   * - "center": Centered (ideal for center layout).

   */
  headerAlign: "left",

  /**
   * Background image configuration for the entire section.
   * - In dark mode: image sits under the theme color overlay.
   * - In light mode: image sits under a subtle dark overlay (or none).
   * Set enabled: false to skip the image entirely.
   */
  background: {
    enabled: false,
    // src: imgFondo,
    // Overlay class applied on top of the image
    overlayClass: "opacity-80",
  },
  /**
   * Decorative ambient elements (floating circles and accent characters).
   * - In dark mode: circles use bg-foreground-inverse/5 (subtle white).
   * - In light mode: circles use bg-foreground/5 (subtle dark) or the theme's lightBg.
   */
  decorative: {
    accentChar: "[VE]",
    circles: [
      { className: "absolute -top-40 right-[10%] w-[500px] h-[500px] rounded-full bg-foreground/5 pointer-events-none z-0" },
      { className: "absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-foreground/5 pointer-events-none z-0" }
    ]
  }
};
```

---

### 2. `config/[seccion].content.config.js`

```javascript
/**
 * [Seccion] section text content and data configuration.
 * Behavior/structural options live in [seccion].config.js.
 */

export const [SECCION]_CONTENT = {
  label: "[Eyebrow Label]",
  sectionId: "[seccion]",
  titulo: "[Título Principal de la Sección]",
  tituloHighlight: "[Palabra Resaltada]",
  subtitulo: "[Subtítulo o descripción breve de la sección]",
  // Add any data arrays specific to this section below
};

// Example data array (if the section has cards, items, etc.)
export const [SECCION]_ITEMS = [
  {
    id: "[id-1]",
    numero: "01",
    titulo: "[Título del Item 1]",
    descripcion: "[Descripción del Item 1]"
  },
  // ...
];
```

---

### 3. `components/[Seccion]Header.jsx`

```jsx
import { Heading } from "@/components/shared/Heading";
import { SectionLabel } from "@/components/shared/SectionLabel";

/**
 * [Seccion]Header — Renders the section title and eyebrow label.
 * Fully config-driven, receiving all data via props.
 * 
 * @param {{
 *   label: string,
 *   titulo: string,
 *   tituloHighlight?: string,
 *   subtitulo?: string,
 *   theme: object,
 *   variant?: "dark" | "light",
 *   align?: "left" | "center"
 * }} props
 */
export function [Seccion]Header({
  label,
  titulo,
  tituloHighlight,
  subtitulo,
  theme,
  variant = "dark",
  align = "left",
}) {
  const isLight = variant === "light";

  const alignClasses = {
    left: "",
    center: "text-center",
  };

  const labelAlignClasses = {
    left: "",
    center: "justify-center",
  };

  const wrapperClass = alignClasses[align] || "";
  const labelClass = labelAlignClasses[align] || "";

  return (
    <div className={`flex flex-col gap-4 ${wrapperClass}`}>
      {/* Eyebrow label */}
      <SectionLabel
        label={label}
        theme={isLight ? undefined : theme}
        variant={isLight ? "default" : undefined}
        className={labelClass}
      />

      {/* Main heading */}
      <div>
        <Heading
          as="h2"
          variant="section"
          className={isLight ? "text-foreground" : "text-foreground-inverse"}
        >
          {tituloHighlight && titulo.split(tituloHighlight).length > 1 ? (
            <>
              {titulo.split(tituloHighlight)[0]}
              <span className={theme?.text || "text-primary"}>
                {tituloHighlight}
              </span>
              {titulo.split(tituloHighlight)[1]}
            </>
          ) : (
            titulo
          )}
        </Heading>
      </div>

      {/* Subtitle */}
      {subtitulo && (
        <p className={cn(
          "text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed",
          isLight ? "text-muted-foreground" : "text-muted-inverse"
        )}>
          {subtitulo}
        </p>
      )}
    </div>
  );
}
```

---

### 4. `[Seccion]View.jsx` — Modo Oscuro (dark)

```jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { [SECCION]_CONTENT } from "./config/[seccion].content.config";
import { [SECCION]_CONFIG } from "./config/[seccion].config";
import { [Seccion]Header } from "./components/[Seccion]Header";
import { SectionLayout } from "@/components/shared/SectionLayout";
import { SectionDescription } from "@/components/shared/SectionDescription";
import { BRAND_THEMES } from "@/features/shared/config/theme.config";
import { sectionContainerVariants } from "@/features/shared/config/animations.config";
import { AccentCharacter } from "@/components/shared/AccentCharacter";
import { useSectionObserver } from "@/features/shared/hooks/use-section-observer";

/** [Seccion] module brand color — fixed for this section */
const MODULE_THEME = BRAND_THEMES[[n]]; // Replace [n] with 0-5

/**
 * [Seccion]View — "[Nombre Visible]" section (DARK variant).
 * Theme color as background, white text throughout.
 */
export function [Seccion]View() {
  const { label, sectionId, titulo, tituloHighlight, subtitulo } = [SECCION]_CONTENT;
  const { layout, titleWidth, decorative, headerAlign } = [SECCION]_CONFIG;
  const sectionRef = useSectionObserver("/#" + sectionId, { threshold: 0.3 });

  return (
    <section
      id={sectionId}
      ref={sectionRef}
      aria-labelledby="[seccion]-heading"
      className={`${![SECCION]_CONFIG.background.enabled ? MODULE_THEME.bg : "bg-background"} relative overflow-hidden text-foreground-inverse`}
    >
      {/* Optional Background Image */}
      {[SECCION]_CONFIG.background.enabled && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src={[SECCION]_CONFIG.background.src}
            alt="Fondo [Seccion]"
            fill
            className="object-cover object-center"
            priority={false}
          />
          <div className={`absolute inset-0 ${MODULE_THEME.bg} ${[SECCION]_CONFIG.background.overlayClass}`} />
        </div>
      )}

      {/* Decorative Brand Accent (Ghost text watermark) */}
      <AccentCharacter
        char={decorative.accentChar}
        className="top-[10%] right-0 translate-x-[20%] opacity-10"
      />

      {/* Decorative circles */}
      {decorative.circles.map((circle, idx) => (
        <div key={idx} className={circle.className} aria-hidden="true" />
      ))}

      <div className="relative z-10 w-full">
        <motion.div
          variants={sectionContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <SectionLayout
            layout={layout}
            titleWidth={titleWidth}
            header={
              <[Seccion]Header
                label={label}
                titulo={titulo}
                tituloHighlight={tituloHighlight}
                subtitulo={subtitulo}
                theme={MODULE_THEME}
                variant="dark"
                align={headerAlign}
              />
            }
          >
            {/* Section-specific content */}
            <SectionDescription variant="dark" animate>
              Description text here
            </SectionDescription>
          </SectionLayout>
        </motion.div>
      </div>
    </section>
  );
}
```

### 4B. `[Seccion]View.jsx` — Modo Claro (light)

```jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { [SECCION]_CONTENT } from "./config/[seccion].content.config";
import { [SECCION]_CONFIG } from "./config/[seccion].config";
import { [Seccion]Header } from "./components/[Seccion]Header";
import { SectionLayout } from "@/components/shared/SectionLayout";
import { SectionDescription } from "@/components/shared/SectionDescription";
import { BRAND_THEMES } from "@/features/shared/config/theme.config";
import { sectionContainerVariants } from "@/features/shared/config/animations.config";
import { AccentCharacter } from "@/components/shared/AccentCharacter";
import { useSectionObserver } from "@/features/shared/hooks/use-section-observer";

/** [Seccion] module brand color — only used for accents in light mode */
const MODULE_THEME = BRAND_THEMES[[n]]; // Replace [n] with 0-5

/**
 * [Seccion]View — "[Nombre Visible]" section (LIGHT variant).
 * Cream background (bg-background), dark text, theme color for accents.
 */
export function [Seccion]View() {
  const { label, sectionId, titulo, tituloHighlight, subtitulo } = [SECCION]_CONTENT;
  const { layout, titleWidth, decorative, headerAlign } = [SECCION]_CONFIG;
  const sectionRef = useSectionObserver("/#" + sectionId, { threshold: 0.3 });

  return (
    <section
      id={sectionId}
      ref={sectionRef}
      aria-labelledby="[seccion]-heading"
      className="relative overflow-hidden bg-background text-foreground"
    >
      {/* Optional Background Image (subtle, no heavy overlay in light mode) */}
      {[SECCION]_CONFIG.background.enabled && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src={[SECCION]_CONFIG.background.src}
            alt="Fondo [Seccion]"
            fill
            className="object-cover object-center"
            priority={false}
          />
          {/* Subtle scrim for readability — lighter than dark mode */}
          <div className={`absolute inset-0 bg-background ${[SECCION]_CONFIG.background.overlayClass || "opacity-60"}`} />
        </div>
      )}

      {/* Decorative Brand Accent — uses theme color for visibility on light bg */}
      <AccentCharacter
        char={decorative.accentChar}
        className={`top-[10%] right-0 translate-x-[20%] opacity-10 ${MODULE_THEME.text}`}
      />

      {/* Decorative circles — subtle dark on light background */}
      {decorative.circles.map((circle, idx) => (
        <div key={idx} className={circle.className} aria-hidden="true" />
      ))}

      <div className="relative z-10 w-full">
        <motion.div
          variants={sectionContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <SectionLayout
            layout={layout}
            titleWidth={titleWidth}
            header={
              <[Seccion]Header
                label={label}
                titulo={titulo}
                tituloHighlight={tituloHighlight}
                subtitulo={subtitulo}
                theme={MODULE_THEME}
                variant="light"
                align={headerAlign}
              />
            }
          >
            {/* Section-specific content */}
            <SectionDescription variant="light">
              Description text here
            </SectionDescription>
          </SectionLayout>
        </motion.div>
      </div>
    </section>
  );
}
```

---

## � Variantes de Layout (Controladas por `layout` + `titleWidth`)

El agente usa `<SectionLayout>` de `src/components/shared/SectionLayout.jsx` para todos los modos. Solo se cambia la propiedad `layout` en el config:

| Prop `layout` | Comportamiento | Ideal para |
|--------------|---------------|------------|
| `"left"` | Two-column: header izquierda, contenido derecha | `concurso`, `cronograma`, `fases`, `jurado` |
| `"right"` | Two-column: header derecha, contenido izquierda | Invertir el orden visual |
| `"center"` | Una columna centrada, header arriba, contenido abajo | `hero`, `impacto`, secciones editoriales |

**Control de ancho del título** con `titleWidth`:
- Valor por defecto: `"max-w-2xl"`
- Opciones comunes: `"max-w-xl"`, `"max-w-2xl"`, `"max-w-3xl"`, `"max-w-4xl"`, `"max-w-prose"`, `"max-w-lg"`
- En layout `center`: controla el contenedor del header.
- En layout `left`/`right`: se aplica al panel del header.

**Proporciones del grid** con `gridCols` (opcional):
- Por defecto: `"lg:grid-cols-2"` (50/50)
- Para proporciones personalizadas: `"lg:grid-cols-[55fr_45fr]"`, `"lg:grid-cols-[45fr_55fr]"`, etc.
- Solo aplica en layouts `left`/`right`. En `center` es ignorado.

---

## 🔗 Paso 11: Actualizar `src/app/page.jsx`

Agregar el import y el componente en el orden correcto dentro de `HomePage()`:

```jsx
import { [Seccion]View } from "@/features/landing/[seccion]/[Seccion]View";

export default function HomePage() {
  return (
    <>
      <HeroView />
      <ConcursoView />
      <CronogramaView />
      <FasesView />
      <JuradoView />
      <[Seccion]View />  {/* NUEVA SECCIÓN */}
    </>
  );
}
```

---

## 🔗 Paso 12: Actualizar `src/features/shared/config/routes.config.js`

Agregar el link de navegación en el array `NAV_LINKS`:

```javascript
export const NAV_LINKS = [
  { href: "/", label: "Inicio", theme: BRAND_THEMES[0] },
  { href: "/#el-concurso", label: "El Concurso", theme: BRAND_THEMES[1] },
  { href: "/#cronograma", label: "Cronograma", theme: BRAND_THEMES[2] },
  { href: "/#fases", label: "Fases de Selección", theme: BRAND_THEMES[3] },
  { href: "/#jurado", label: "Jurado", theme: BRAND_THEMES[4] },
  { href: "/#[seccion]", label: "[Nombre Visible]", theme: BRAND_THEMES[[n]] }, // NUEVO
  { href: "/submission", label: "Postúlate", theme: BRAND_THEMES[5] },
];
```

---

## 🎨 Reglas de Diseño

### Colores y Temas
- Cada sección tiene **UN solo tema fijo** (`MODULE_THEME = BRAND_THEMES[n]`).
- **Modo oscuro (dark):**
  - Fondo: `MODULE_THEME.bg` (o `bg-background` si hay imagen de fondo con overlay del tema).
  - Textos principales: `text-foreground-inverse` (blanco).
  - Textos secundarios: `text-muted-inverse`.
  - Acentos: `MODULE_THEME.accentText`, `MODULE_THEME.accentBg`.
  - Círculos decorativos: `bg-foreground-inverse/5`.
- **Modo claro (light):**
  - Fondo: `bg-background` (crema `#F9F7F2`).
  - Textos principales: `text-foreground` (oscuro `#1D1D1F`).
  - Textos secundarios: `text-muted-foreground`.
  - Acentos: `MODULE_THEME.text` para highlights, `MODULE_THEME.lightBg` para badges/cards.
  - Círculos decorativos: `bg-foreground/5` (sutil oscuro).
  - `<SectionLabel>` usa `variant="default"` (sin pasar `theme`) para mantener el eyebrow en estilo claro estándar.
  - `<AccentCharacter>` recibe `MODULE_THEME.text` en className para que el watermark sea del color del tema.

### Tipografía
- **Siempre** usar `<Heading>` y `<SectionLabel>` (NUNCA HTML genérico).
- Variante `section` para títulos principales de sección.
- Variante `subsection` para subtítulos.
- Labels con el theme de la sección para el color de acento (solo en modo oscuro; en claro usan variant `default`).

### Decoración
- **Siempre** incluir `<AccentCharacter>` con el char del config.
- **Siempre** incluir círculos decorativos definidos en `decorative.circles`.

### Animaciones
- Secciones con items animados: usar `sectionContainerVariants` + `sectionItemVariants` de `animations.config.js`.
- Animar con `whileInView` y `viewport={{ once: true }}`.
- Para secciones simples sin animaciones de entrada, no es obligatorio.

### Accesibilidad
- `aria-labelledby` en el `<section>` apuntando al id del heading.
- `aria-hidden="true"` en elementos decorativos.
- `alt` descriptivo en imágenes de fondo.
