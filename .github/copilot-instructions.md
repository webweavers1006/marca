# Reglas del Proyecto — Marca País Venezuela (Landing Page)

> **Agent Profile:** Senior Full-Stack Developer — Especialista en Landing Pages y Branding Visual.
> **Environment:** Linux (WSL2). Node.js con `TZ=UTC`.
> **Stack:** Next.js 16.2 (App Router), React 19, Tailwind 4, Prisma 7.8, Framer Motion, Shadcn UI (base-ui).

---

## 1. 🛠️ Stack Specifications

### Next.js 16.2 & React 19

- **Server Components por defecto** para layouts y páginas raíz.
- Los componentes con interactividad (animaciones, scroll, estado) usan `"use client"`.
- En React 19, los `refs` son props normales. **Prohibido**: usar `forwardRef`.
- **Prohibido**: renderizar fechas dinámicas directamente en el cliente. Usar estrategias de supresión o formateo del lado del servidor para evitar *Hydration Mismatch*.

### Tailwind CSS v4

- **Prohibido**: usar `tailwind.config.js`. Toda la customización del tema va en `src/app/globals.css` vía `@theme`.
- Usar `@custom-variant dark (&:is(.dark *));` para modo oscuro.
- Las clases de utilidad se aplican directamente en JSX. No archivos CSS adicionales.

### Prisma

- **Schema en inglés** con `@map` / `@@map` para nombres de columna/tabla en español en PostgreSQL.
- Usar el Driver Adapter `@prisma/adapter-pg` para estabilidad en WSL.
- Después de cualquier cambio en el schema, ejecutar `npx prisma generate`.
- Usar `npx prisma migrate dev --name <description>` para migraciones en desarrollo.
- **No ejecutar** `npm audit fix --force`: rompe Next.js y Prisma.

### UI

- Íconos: `lucide-react`.
- Notificaciones toast: `sonner`.
- Animaciones: `framer-motion`.
- Componentes base: `@base-ui/react` (Shadcn UI).
- Puerto: **3000** (dev), **3001** (producción).

---

## 2. 🎯 Code Paradigms

### Límite estricto de líneas

- Máximo **250 líneas por archivo**. Si se excede, refactorizar inmediatamente.
- *Excepción*: Código de librería (Shadcn UI en `src/components/ui/`) no tiene límite.

### Lenguaje

- Solo **JS/JSX**. TypeScript está prohibido a menos que se solicite explícitamente.
- Nombres de archivos, carpetas, variables, funciones y comentarios en **INGLÉS**.
- Texto de UI (labels, contenido) en **ESPAÑOL**, exclusivamente en archivos de configuración.

### Estructura del Proyecto

```
src/
├── app/                        # Solo archivos de ruteo Next.js
│   ├── globals.css             # Tema global (@theme) + estilos base
│   ├── layout.jsx              # Root layout (metadata, fonts, providers, Navbar, Footer)
│   └── page.jsx                # Home page (ensambla todas las secciones)
├── assets/                     # Recursos estáticos
│   ├── fonts/                  # Fuentes locales (MADE TOMMY)
│   ├── icons/                  # Íconos SVG (logos)
│   └── images/                 # Imágenes (fondos, logos)
├── components/
│   ├── shared/                 # Componentes UI reutilizables
│   │   ├── Navbar.jsx          # Barra de navegación premium
│   │   ├── Footer.jsx          # Footer editorial
│   │   ├── MobileMenu.jsx      # Menú móvil overlay
│   │   ├── BrandIcon.jsx       # Wrapper para SVG de marca
│   │   ├── BrandColorBand.jsx  # Banda decorativa de 6 colores
│   │   ├── AccentCharacter.jsx # Watermark tipográfico decorativo
│   │   ├── Heading.jsx         # Componente de título unificado
│   │   ├── SectionLabel.jsx    # Label/sección eyebrow unificado
│   │   ├── Typewriter.jsx      # Efecto typewriter
│   │   └── providers/          # Providers técnicos/UI
│   │       └── active-theme-provider.jsx
│   └── ui/                     # Átomos Shadcn UI (sin límite de líneas)
├── features/
│   ├── landing/                # Secciones del landing page
│   │   ├── hero/               # Hero (sección principal)
│   │   ├── concurso/           # "El Concurso"
│   │   ├── cronograma/         # Cronograma
│   │   ├── fases/              # Fases de Selección
│   │   ├── jurado/             # Jurado
│   │   └── impacto/            # Impacto en Números
│   └── shared/                 # Configuración y lógica transversal
│       ├── config/             # Archivos de configuración global
│       └── hooks/              # Hooks reutilizables
└── lib/
    ├── prisma.js               # Singleton Prisma client (pg adapter)
    └── utils.js                # Utilidades (cn, etc.)
```

---

## 3. 🏗️ Arquitectura de Feature (Sección de Landing)

Cada sección del landing page sigue esta estructura:

```
src/features/landing/[seccion]/
├── [Seccion]View.jsx           # Componente orquestador (View principal)
├── components/                 # Sub-componentes de la sección
│   ├── [Seccion]Header.jsx
│   ├── [Seccion]Background.jsx
│   └── ...
├── config/                     # Configuración separada por responsabilidad
│   ├── [seccion].config.js     # Comportamiento, estructura, parámetros visuales
│   └── [seccion].content.config.js  # Texto y datos de contenido
└── hooks/                      # Hooks específicos de la sección (opcional)
    └── use[Seccion]Carousel.js
```

### Reglas de la Arquitectura de Feature

#### 3.1 View Principal (`[Seccion]View.jsx`)
- Es el **orquestador** de la sección.
- Define el layout grid, background, elementos decorativos.
- Usa `useSectionObserver` para registrar la sección en el sistema de navegación.
- Asigna el `MODULE_THEME` correspondiente de `BRAND_THEMES`.
- Soporta **dos modos de fondo**:
  - **Modo oscuro (dark):** `MODULE_THEME.bg` como fondo, textos `text-foreground-inverse` (blanco). Usado en `concurso`, `fases`, `jurado`, `cronograma`.
  - **Modo claro (light):** `bg-background` (crema) como fondo, textos `text-foreground` (oscuro), color del tema solo para acentos. Usado en `hero`, `impacto`.
- Usa `"use client"` (requiere interactividad de scroll/animation).
- **Prohibido**: lógica de negocio compleja aquí. Delegar a hooks y componentes.

#### 3.2 Configuración (`config/`)
- **Separación obligatoria** en 2 archivos:
  - `[seccion].config.js`: Parámetros de comportamiento/estructurales (video habilitado, overlay, círculos decorativos, accent char, etc.)
  - `[seccion].content.config.js`: Texto de UI y datos de contenido (títulos, descripciones, listas, etc.)
- **Prohibido**: hardcodear texto en español en componentes. Todo va en `content.config.js`.
- Los imports de assets (imágenes, fondos) van en el archivo `.config.js` correspondiente.

#### 3.3 Componentes (`components/`)
- Cada componente hace **una sola cosa**.
- Reciben datos vía props desde el View (config-driven).
- Nombres en **PascalCase** (ej. `HeroHeadline.jsx`, `ConcursoHeader.jsx`).
- **Prohibido**: importar configuraciones directamente. Reciben todo por props.

#### 3.4 Hooks (`hooks/`)
- Nombres en **hyphen-case** (ej. `use-fases-carousel.js`).
- Extraen lógica de estado y efectos del View.
- Un hook por responsabilidad.

---

## 4. 🎨 Sistema de Diseño y Theming

### 4.1 Paleta de 6 Colores de Marca

```javascript
// Definidos en src/features/shared/config/theme.config.js como BRAND_THEMES
// 0: Yellow (Primary)    — Hero, Inicio
// 1: Teal (Secondary)    — El Concurso
// 2: Orange (Senary)     — Cronograma
// 3: Purple (Quaternary) — Fases de Selección
// 4: Green (Quinary)     — Jurado
// 5: Orange (Senary)     — Postúlate / CTA
```

### 4.2 ActiveThemeProvider

- **Provider global** en `src/components/shared/providers/active-theme-provider.jsx`.
- Sincroniza el tema activo según la sección visible (vía IntersectionObserver).
- Los componentes consumen el tema con `useActiveTheme()`.
- Cada sección tiene **UN solo tema fijo** (`MODULE_THEME = BRAND_THEMES[n]`).

### 4.3 Tokens de Diseño en CSS

- Definidos en `src/app/globals.css` dentro de `@theme`.
- Colores: `background`, `foreground`, `primary`, `secondary`, `tertiary`, `quaternary`, `quinary`, `senary`.
- Fuentes: `--font-sans` (Inter), `--font-display` (MADE TOMMY), `--font-outline` (MADE TOMMY Outline).
- Breakpoints: `--breakpoint-nav: 1280px`.
- Gradientes: `--gradient-brand`, `--gradient-warm`, `--gradient-cool`.

### 4.4 Tipografía

- **Configuración centralizada** en `src/features/shared/config/typography.config.js`.
- `HEADING_CONFIG`: Variantes de headings (`hero`, `section`, `subsection`, `card`, `outline`).
- `SECTION_LABEL_CONFIG`: Variantes de labels (`default`, `inverse`, `hero`, `herofore`).
- Componentes `Heading` y `SectionLabel` consumen esta configuración.

---

## 5. 📝 Convenciones de Código

### 5.1 Config-Driven UI (OBLIGATORIO)

- **Prohibido**: strings hardcodeados (texto en español) directamente en componentes JSX.
- **Obligatorio**: Todo texto de UI reside en archivos `[feature].content.config.js`.
- Los archivos de configuración de comportamiento/estructura residen en `[feature].config.js`.

### 5.2 Componentes Compartidos

Los siguientes componentes **deben usarse** en lugar de HTML genérico:

| Componente | Ubicación | Uso |
|---|---|---|
| `<Heading>` | `components/shared/Heading.jsx` | Todos los títulos de sección |
| `<SectionLabel>` | `components/shared/SectionLabel.jsx` | Todos los eyebrow/labels de sección |
| `<BrandIcon>` | `components/shared/BrandIcon.jsx` | Renderizar SVGs de marca |
| `<AccentCharacter>` | `components/shared/AccentCharacter.jsx` | Watermark decorativo tipográfico |
| `<BrandColorBand>` | `components/shared/BrandColorBand.jsx` | Banda decorativa de 6 colores |
| `<Typewriter>` | `components/shared/Typewriter.jsx` | Efecto typewriter |
| `<Navbar>` | `components/shared/Navbar.jsx` | Navegación principal |
| `<Footer>` | `components/shared/Footer.jsx` | Footer del sitio |

### 5.3 Hooks Compartidos

| Hook | Ubicación | Uso |
|---|---|---|
| `useSectionObserver` | `features/shared/hooks/use-section-observer.js` | Registrar sección visible para navegación |
| `useScrollThreshold` | `features/shared/hooks/use-scroll-threshold.js` | Detectar scroll pasado un umbral |
| `useAppNavigation` | `features/shared/hooks/use-app-navigation.js` | Navegación suave entre secciones |
| `useActiveLink` | `features/shared/hooks/use-active-link.js` | Determinar link activo (path + hash) |

### 5.4 Animaciones

- Las variantes de animación **compartidas** están en `src/features/shared/config/animations.config.js`:
  - `sectionContainerVariants` — Stagger container para secciones.
  - `sectionItemVariants` — Slide-up + fade-in para items.
- Las variantes **específicas del Hero** están en `hero/config/hero.animations.config.js`.
- Usar `whileInView` con `viewport={{ once: true }}` para animaciones de entrada.
- Configuración de typewriter centralizada en `TYPEWRITER_CONFIG`.

---

## 6. 🗄️ Base de Datos (Prisma)

### Schema

- Modelos y campos en **inglés** con `@map` / `@@map` a español.
- Todo modelo debe incluir `createdAt` y `updatedAt` (cuando aplica).
- Usar `cuid()` para IDs.

### Acceso a Datos

- El cliente Prisma es un singleton en `src/lib/prisma.js`.
- Usar `@prisma/adapter-pg` con `pg.Pool`.
- **Prohibido**: raw SQL o strings concatenadas en queries.

---

## 7. 🛡️ Seguridad

### XSS
- **Prohibido**: `dangerouslySetInnerHTML`.

### CSRF
- Las mutaciones fuera de Server Actions requieren token CSRF verificado.

### Validación
- Toda entrada de datos debe tener validación **Zod**.
- File uploads: máximo **5MB**, validación de **Magic Bytes**.

### Logging
- **Prohibido**: loguear PII (cédulas completas, JWT, cookies). Solo IDs o hashes.

---

## 8. 🧪 Calidad

### Complejidad
- Máximo **3 niveles de anidación** (`if`/`for`/`try`).

### Límite de líneas
- Máximo **250 líneas por archivo** (excepto `src/components/ui/`).

### Código muerto
- Sin `console.log` en producción.
- Sin código comentado.
- Sin imports no utilizados.

---

## 9. 📦 Scripts y Comandos

| Comando | Descripción |
|---|---|
| `npm run dev` | Iniciar servidor de desarrollo (puerto 3000) |
| `npm run build` | Build de producción |
| `npm run start` | Iniciar servidor de producción (puerto 3001) |
| `npm run lint` | Ejecutar ESLint |
| `npm run db:generate` | Generar cliente Prisma |
| `npm run db:migrate` | Ejecutar migraciones en desarrollo |
| `npm run db:reset` | Resetear DB en desarrollo |
| `npm run icons:all` | Construir íconos y logos SVG |
