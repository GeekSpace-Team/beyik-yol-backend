/*
  Warnings:

  - A unique constraint covering the columns `[name_tm]` on the table `Region` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name_ru]` on the table `Region` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name_tm]` on the table `SubRegion` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name_ru]` on the table `SubRegion` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Region_name_tm_key" ON "Region"("name_tm");

-- CreateIndex
CREATE UNIQUE INDEX "Region_name_ru_key" ON "Region"("name_ru");

-- CreateIndex
CREATE UNIQUE INDEX "SubRegion_name_tm_key" ON "SubRegion"("name_tm");

-- CreateIndex
CREATE UNIQUE INDEX "SubRegion_name_ru_key" ON "SubRegion"("name_ru");
