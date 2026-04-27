-- Script SQL generado automáticamente
-- Base de datos: sistema_postulaciones

-- 1. Tabla: tipos_integrantes
CREATE TABLE IF NOT EXISTS tipos_integrantes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_integrante VARCHAR(100) NOT NULL
);

INSERT INTO tipos_integrantes (tipo_integrante) VALUES 
('Representante Legal'), 
('Socio'), 
('Colaborador');

-- 2. Tabla: areas_xp
CREATE TABLE IF NOT EXISTS areas_xp (
    id INT AUTO_INCREMENT PRIMARY KEY,
    area VARCHAR(100) NOT NULL
);

INSERT INTO areas_xp (area) VALUES 
('Diseño'), 
('Marketing'), 
('Publicidad'), 
('Branding'), 
('Producción Audio Visual'), 
('Artista Creativo'), 
('Otro');

-- 3. Tabla: tiempos_xp
CREATE TABLE IF NOT EXISTS tiempos_xp (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tiempo VARCHAR(100) NOT NULL
);

INSERT INTO tiempos_xp (tiempo) VALUES 
('Menos de 2 años'), 
('3-5 años'), 
('6-10 años'), 
('Más de 10 años');

-- 4. Tabla: niveles_educativos
CREATE TABLE IF NOT EXISTS niveles_educativos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nivel_educativo VARCHAR(100) NOT NULL
);

INSERT INTO niveles_educativos (nivel_educativo) VALUES 
('Basico'), 
('Bachiller'), 
('Técnico Superior'), 
('Universitario (Pregrado)'), 
('Postgrado'), 
('Otro');

-- 5. Tabla: integrantes
CREATE TABLE IF NOT EXISTS integrantes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    identificacion VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    telefono VARCHAR(50),
    id_tipo_integrante INT,
    id_area_xp INT,
    id_tiempo_xp INT,
    id_nivel_educativo INT,
    FOREIGN KEY (id_tipo_integrante) REFERENCES tipos_integrantes(id),
    FOREIGN KEY (id_area_xp) REFERENCES areas_xp(id),
    FOREIGN KEY (id_tiempo_xp) REFERENCES tiempos_xp(id),
    FOREIGN KEY (id_nivel_educativo) REFERENCES niveles_educativos(id)
);

-- 6. Tabla: empresas
CREATE TABLE IF NOT EXISTS empresas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    numero_registro_fiscal VARCHAR(100),
    email VARCHAR(255),
    telefono VARCHAR(50),
    id_pais INT,
    id_estado INT,
    provincia_municipio VARCHAR(255),
    ciudad VARCHAR(255)
);

-- 7. Tabla: tipo_participacion
CREATE TABLE IF NOT EXISTS tipo_participacion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    participacion VARCHAR(100) NOT NULL
);

INSERT INTO tipo_participacion (participacion) VALUES 
('Individual'), 
('Colectivo'), 
('Empresa'), 
('Institución / Organización Publica'), 
('Institución / Organización Privada'), 
('Instituto Educativo');

-- 8. Tabla: medios_difusion
CREATE TABLE IF NOT EXISTS medios_difusion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    medio VARCHAR(100) NOT NULL
);

INSERT INTO medios_difusion (medio) VALUES 
('Facebook'), 
('Instagram'), 
('X'), 
('Linkedin'), 
('Correo Electrónico'), 
('Página Web'), 
('Universidad'), 
('TV'), 
('Otro');

-- 9. Tabla: postulaciones (corregido de "potulaciones")
CREATE TABLE IF NOT EXISTS postulaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_tipo_participacion INT,
    descripcion_proyecto_relevante TEXT,
    enlace_proyectos_previos VARCHAR(500),
    id_medio_difusion INT,
    FOREIGN KEY (id_tipo_participacion) REFERENCES tipo_participacion(id),
    FOREIGN KEY (id_medio_difusion) REFERENCES medios_difusion(id)
);

-- 10. Tabla puente: empresas_postulaciones
CREATE TABLE IF NOT EXISTS empresas_postulaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_empresa INT,
    id_postulacion INT,
    FOREIGN KEY (id_empresa) REFERENCES empresas(id),
    FOREIGN KEY (id_postulacion) REFERENCES postulaciones(id)
);

-- 11. Tabla puente: integrantes_postulaciones
CREATE TABLE IF NOT EXISTS integrantes_postulaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_integrante INT,
    id_postulacion INT,
    FOREIGN KEY (id_integrante) REFERENCES integrantes(id),
    FOREIGN KEY (id_postulacion) REFERENCES postulaciones(id)
);
