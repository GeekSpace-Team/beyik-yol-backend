/*
  Warnings:

  - Added the required column `url` to the `Ads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `CostFuel` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ConstantPriceType" AS ENUM ('FUEL', 'BEYIK_YOL_SERVICE', 'BEYIK_YOL_WASH', 'BEYIK_YOL_SHOP', 'NONE');

-- CreateEnum
CREATE TYPE "ConstantType" AS ENUM ('ABOUT_US', 'PRIVACY_POLICY', 'TERMS_OF_USE', 'TERMS_OF_BOOKING', 'TERMS_OF_REGISTER');

-- CreateEnum
CREATE TYPE "ObjectPermissions" AS ENUM ('NONE', 'ALL', 'VIEWER', 'VIEW_USERS', 'VIEW_ORDERS', 'CREATE_ORDER', 'DELETE_ORDER', 'EDIT_ORDER', 'VIEW_ANALYTICS', 'VIEW_PRODUCTS', 'CREATE_PRODUCT', 'DELETE_PRODUCT', 'EDIT_PRODUCT');

-- CreateEnum
CREATE TYPE "AdsStatus" AS ENUM ('NONE', 'BANNER', 'HOME_LARGE', 'HOME_MINI', 'IN_LIST', 'IN_VIEW', 'POPUP');

-- CreateEnum
CREATE TYPE "ObjectStatus" AS ENUM ('PENDING', 'FREE', 'VIP', 'MASTER', 'GUEST', 'PAUSED', 'REMOVED', 'HIDDEN');

-- CreateEnum
CREATE TYPE "ObjectType" AS ENUM ('SERVICE', 'WASH', 'SHOP');

-- AlterEnum
ALTER TYPE "ItemStatus" ADD VALUE 'HIDDEN';

-- DropForeignKey
ALTER TABLE "AdsImage" DROP CONSTRAINT "AdsImage_adsId_fkey";

-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_engineTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_modelId_fkey";

-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_optionId_fkey";

-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_transmitionId_fkey";

-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_usersId_fkey";

-- DropForeignKey
ALTER TABLE "CarImage" DROP CONSTRAINT "CarImage_carId_fkey";

-- DropForeignKey
ALTER TABLE "CarModel" DROP CONSTRAINT "CarModel_brandId_fkey";

-- DropForeignKey
ALTER TABLE "CarShare" DROP CONSTRAINT "CarShare_carId_fkey";

-- DropForeignKey
ALTER TABLE "CarShare" DROP CONSTRAINT "CarShare_userId_fkey";

-- DropForeignKey
ALTER TABLE "CostFuel" DROP CONSTRAINT "CostFuel_carId_fkey";

-- DropForeignKey
ALTER TABLE "Evacuator" DROP CONSTRAINT "Evacuator_subRegionId_fkey";

-- DropForeignKey
ALTER TABLE "Inbox" DROP CONSTRAINT "Inbox_userId_fkey";

-- DropForeignKey
ALTER TABLE "SubRegion" DROP CONSTRAINT "SubRegion_regionId_fkey";

-- AlterTable
ALTER TABLE "Ads" ADD COLUMN     "adsType" "AdsStatus" NOT NULL DEFAULT 'NONE',
ADD COLUMN     "url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CostFuel" ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "CostRepair" (
    "id" SERIAL NOT NULL,
    "mile" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "carId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CostRepair_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChangeType" (
    "id" SERIAL NOT NULL,
    "name_tm" TEXT NOT NULL,
    "name_ru" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChangeType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CostChange" (
    "id" SERIAL NOT NULL,
    "mile" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "nextMile" DOUBLE PRECISION NOT NULL,
    "reminder" BOOLEAN NOT NULL DEFAULT false,
    "carId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CostChange_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Objects" (
    "id" SERIAL NOT NULL,
    "name_tm" TEXT NOT NULL,
    "name_ru" TEXT NOT NULL,
    "address_tm" TEXT NOT NULL,
    "address_ru" TEXT NOT NULL,
    "phoneNumber" TEXT[],
    "image" TEXT,
    "logo" TEXT NOT NULL,
    "status" "ObjectStatus" NOT NULL DEFAULT 'FREE',
    "type" "ObjectType" NOT NULL DEFAULT 'SERVICE',
    "description_tm" TEXT,
    "description_ru" TEXT,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "webUrl" TEXT NOT NULL,
    "workerLimit" INTEGER NOT NULL DEFAULT -1,
    "subRegionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Objects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ObjectUser" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT[],
    "status" "ObjectStatus" NOT NULL DEFAULT 'PENDING',
    "typeId" TEXT NOT NULL,
    "uniqueId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ObjectUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ObjectMaster" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT[],
    "workerPrice" DOUBLE PRECISION NOT NULL,
    "status" "ObjectStatus" NOT NULL DEFAULT 'PENDING',
    "typeId" INTEGER NOT NULL,
    "uniqueId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ObjectMaster_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ObjectUserType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" "ItemStatus" NOT NULL DEFAULT 'ACTIVE',
    "description" TEXT,
    "permissions" "ObjectPermissions"[] DEFAULT ARRAY['NONE']::"ObjectPermissions"[],
    "uniqueId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ObjectUserType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MasterStatus" (
    "id" SERIAL NOT NULL,
    "name_tm" TEXT NOT NULL,
    "name_ru" TEXT NOT NULL,
    "description_tm" TEXT NOT NULL,
    "description_ru" TEXT NOT NULL,
    "statusPrice" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MasterStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Constants" (
    "id" SERIAL NOT NULL,
    "name_tm" TEXT NOT NULL,
    "name_ru" TEXT NOT NULL,
    "content_tm" TEXT NOT NULL,
    "content_ru" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Constants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConstantPrices" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "type" "ConstantPriceType" NOT NULL DEFAULT 'NONE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConstantPrices_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ObjectUser_uniqueId_key" ON "ObjectUser"("uniqueId");

-- CreateIndex
CREATE UNIQUE INDEX "ObjectMaster_uniqueId_key" ON "ObjectMaster"("uniqueId");

-- CreateIndex
CREATE UNIQUE INDEX "ObjectUserType_uniqueId_key" ON "ObjectUserType"("uniqueId");

-- AddForeignKey
ALTER TABLE "CarShare" ADD CONSTRAINT "CarShare_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CarShare" ADD CONSTRAINT "CarShare_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CarModel" ADD CONSTRAINT "CarModel_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "CarBrand"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CarImage" ADD CONSTRAINT "CarImage_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "CarModel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "CarOption"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_engineTypeId_fkey" FOREIGN KEY ("engineTypeId") REFERENCES "CarEngine"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_transmitionId_fkey" FOREIGN KEY ("transmitionId") REFERENCES "CarTransmition"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CostFuel" ADD CONSTRAINT "CostFuel_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CostRepair" ADD CONSTRAINT "CostRepair_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CostChange" ADD CONSTRAINT "CostChange_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CostChange" ADD CONSTRAINT "CostChange_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "ChangeType"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "SubRegion" ADD CONSTRAINT "SubRegion_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Evacuator" ADD CONSTRAINT "Evacuator_subRegionId_fkey" FOREIGN KEY ("subRegionId") REFERENCES "SubRegion"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "AdsImage" ADD CONSTRAINT "AdsImage_adsId_fkey" FOREIGN KEY ("adsId") REFERENCES "Ads"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Inbox" ADD CONSTRAINT "Inbox_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Objects" ADD CONSTRAINT "Objects_subRegionId_fkey" FOREIGN KEY ("subRegionId") REFERENCES "SubRegion"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ObjectUser" ADD CONSTRAINT "ObjectUser_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "ObjectUserType"("uniqueId") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ObjectMaster" ADD CONSTRAINT "ObjectMaster_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "MasterStatus"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
