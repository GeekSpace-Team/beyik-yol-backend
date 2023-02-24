/*
  Warnings:

  - A unique constraint covering the columns `[uuid]` on the table `Car` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Car_uuid_key" ON "Car"("uuid");
