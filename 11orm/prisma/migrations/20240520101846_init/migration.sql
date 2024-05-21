-- CreateEnum
CREATE TYPE "objectTypeEnum" AS ENUM ('org', 'place');

-- CreateEnum
CREATE TYPE "optionsNumberEnum" AS ENUM ('one', 'many');

-- CreateTable
CREATE TABLE "section" (
    "id" SERIAL NOT NULL,
    "name_plural" TEXT NOT NULL,
    "name_singular" TEXT NOT NULL,
    "object_type" "objectTypeEnum" NOT NULL,

    CONSTRAINT "section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spec" (
    "id" SERIAL NOT NULL,
    "name_service" TEXT NOT NULL,
    "name_public" TEXT NOT NULL,
    "object_type" "objectTypeEnum" NOT NULL,
    "options_number" "optionsNumberEnum" NOT NULL,

    CONSTRAINT "spec_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "option" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "spec_id" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "option_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "section_on_spec" (
    "id" SERIAL NOT NULL,
    "section_id" INTEGER NOT NULL,
    "spec_id" INTEGER NOT NULL,

    CONSTRAINT "section_on_spec_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "option" ADD CONSTRAINT "option_spec_id_fkey" FOREIGN KEY ("spec_id") REFERENCES "spec"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "section_on_spec" ADD CONSTRAINT "section_on_spec_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "section_on_spec" ADD CONSTRAINT "section_on_spec_spec_id_fkey" FOREIGN KEY ("spec_id") REFERENCES "spec"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
