# 🇦🇷 Marca País - Sistema Biométrico & TAG (2026)

Este proyecto es una aplicación web de alto rendimiento construida con las últimas tecnologías de 2026 para el Sistema Biométrico y TAG.

## 🛠️ Stack Tecnológico

- **Framework:** [Next.js 16.2](https://nextjs.org/) (App Router)
- **Runtime:** [React 19](https://react.dev/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **ORM:** [Prisma 7.5](https://www.prisma.io/)
- **Base de Datos:** PostgreSQL
- **Componentes:** Shadcn UI + Lucide React
- **Validación:** Zod + React Hook Form

## 🚀 Comandos Disponibles

A continuación se detallan los comandos disponibles en el proyecto mediante `npm run`:

### 🔧 Inicialización
- **`app:start`**: **El comando recomendado para el primer inicio.** Realiza el `npm install`, ejecuta las migraciones de base de datos (`prisma migrate`), genera el cliente de Prisma y procesa todos los iconos/logos SVG a componentes React.

### 💻 Desarrollo
- **`dev`**: Inicia el servidor de desarrollo en [http://localhost:3001](http://localhost:3001).
- **`build`**: Compila la aplicación para producción.
- **`start`**: Inicia el servidor de producción (requiere haber ejecutado `build` previamente).
- **`lint`**: Ejecuta el linter para verificar la calidad del código.

### 🗄️ Base de Datos (Prisma)
- **`db:migrate`**: Crea y aplica migraciones a la base de datos en entorno de desarrollo.
- **`db:generate`**: Genera el cliente de Prisma basado en el esquema actual.
- **`db:push`**: Sincroniza el esquema de Prisma directamente con la base de datos (sin generar archivos de migración).
- **`db:studio`**: Abre la interfaz gráfica de Prisma para explorar y editar los datos.

### 🎨 Assets (Iconos y Logos)
- **`icons:all`**: Procesa todos los archivos SVG de las carpetas de origen y los convierte en componentes React optimizados.
- **`icons:build`**: Procesa solo los iconos.
- **`logos:build`**: Procesa solo los logos.

## 📐 Estructura del Proyecto

El proyecto sigue una arquitectura **Modular por Features**:

- `src/app/`: Rutas y layouts principales.
- `src/features/`: Lógica de dominio organizada por funcionalidades (auth, biometric, etc.).
- `src/components/ui/`: Componentes base (átomos) de Shadcn UI.
- `src/components/shared/`: Componentes e infraestructura compartida.
- `src/services/`: Lógica de negocio y consultas a base de datos (Prisma).
- `src/actions/`: Server Actions para mutaciones y lógica de orquestación.

## 🛡️ Reglas de Desarrollo

- Máximo **250 líneas** por archivo.
- Uso de **Server Components (RSC)** por defecto.
- Configuración de temas vía `@theme` en CSS (Tailwind v4).
- Las fechas deben formatearse en el servidor para evitar errores de hidratación.
