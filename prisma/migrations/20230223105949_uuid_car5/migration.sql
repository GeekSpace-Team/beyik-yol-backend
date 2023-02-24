/*
  Warnings:

  - You are about to drop the column `typeId` on the `CostChange` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CostChange" DROP CONSTRAINT "CostChange_typeId_fkey";

-- AlterTable
ALTER TABLE "CostChange" DROP COLUMN "typeId";

-- CreateTable
CREATE TABLE "CostToType" (
    "id" SERIAL NOT NULL,
    "costId" INTEGER,
    "typeId" INTEGER,

    CONSTRAINT "CostToType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CostToType" ADD CONSTRAINT "CostToType_costId_fkey" FOREIGN KEY ("costId") REFERENCES "CostChange"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CostToType" ADD CONSTRAINT "CostToType_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "ChangeType"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
