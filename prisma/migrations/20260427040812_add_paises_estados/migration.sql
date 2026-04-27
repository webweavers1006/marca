-- CreateTable
CREATE TABLE "paises" (
    "id" SERIAL NOT NULL,
    "pais" VARCHAR(150),
    "codigo" INTEGER NOT NULL,
    "id_condicion" INTEGER,
    "created" TIMESTAMP(3),
    "updated" TIMESTAMP(3),

    CONSTRAINT "paises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estados" (
    "id_estado" SERIAL NOT NULL,
    "estado" VARCHAR(250) NOT NULL,
    "iso_3166-2" VARCHAR(4) NOT NULL,

    CONSTRAINT "estados_pkey" PRIMARY KEY ("id_estado")
);

-- AddForeignKey
ALTER TABLE "empresas" ADD CONSTRAINT "empresas_id_pais_fkey" FOREIGN KEY ("id_pais") REFERENCES "paises"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "empresas" ADD CONSTRAINT "empresas_id_estado_fkey" FOREIGN KEY ("id_estado") REFERENCES "estados"("id_estado") ON DELETE SET NULL ON UPDATE CASCADE;
