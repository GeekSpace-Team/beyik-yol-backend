/*
  Warnings:

  - Added the required column `costType` to the `CostChange` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CostType" AS ENUM ('FUEL', 'CHANGE', 'REPAIR');

-- AlterTable
ALTER TABLE "CostChange" ADD COLUMN     "costType" "CostType" NOT NULL;
