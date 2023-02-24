/*
  Warnings:

  - The required column `uuid` was added to the `Car` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "uuid" TEXT NOT NULL;
