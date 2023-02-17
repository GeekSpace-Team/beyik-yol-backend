-- CreateEnum
CREATE TYPE "ItemStatus" AS ENUM ('PENDING', 'ACTIVE', 'RUNNING', 'CANCELED', 'REJECTED', 'WARNING', 'ERRORED', 'PAUSED');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('USER', 'VIP', 'ADMIN', 'SUPERADMIN', 'SERVICE', 'CARWASH', 'SHOP');

-- CreateEnum
CREATE TYPE "ImageType" AS ENUM ('NONE', 'SMALL', 'MEDIUM', 'LARGE');

-- CreateEnum
CREATE TYPE "Permissions" AS ENUM ('NONE', 'VIEWER', 'EDITOR', 'OWNER');

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT,
    "phonenumber" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "dob" TIMESTAMP(3),
    "status" "UserStatus" NOT NULL DEFAULT 'USER',
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarShare" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "carId" INTEGER NOT NULL,
    "permissions" "Permissions" NOT NULL DEFAULT 'NONE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CarShare_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarBrand" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "status" "ItemStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CarBrand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarModel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "status" "ItemStatus" NOT NULL DEFAULT 'PENDING',
    "brandId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CarModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarOption" (
    "id" SERIAL NOT NULL,
    "name_tm" TEXT NOT NULL,
    "name_ru" TEXT NOT NULL,
    "status" "ItemStatus" NOT NULL DEFAULT 'PENDING',
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CarOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarEngine" (
    "id" SERIAL NOT NULL,
    "name_tm" TEXT NOT NULL,
    "name_ru" TEXT NOT NULL,
    "status" "ItemStatus" NOT NULL DEFAULT 'PENDING',
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CarEngine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarTransmition" (
    "id" SERIAL NOT NULL,
    "name_tm" TEXT NOT NULL,
    "name_ru" TEXT NOT NULL,
    "status" "ItemStatus" NOT NULL DEFAULT 'PENDING',
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CarTransmition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "status" "ItemStatus" NOT NULL DEFAULT 'ACTIVE',
    "type" "ImageType" NOT NULL DEFAULT 'NONE',
    "carId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CarImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" "ItemStatus" NOT NULL DEFAULT 'ACTIVE',
    "modelId" INTEGER NOT NULL,
    "optionId" INTEGER NOT NULL,
    "engineTypeId" INTEGER NOT NULL,
    "enginePower" DOUBLE PRECISION NOT NULL,
    "transmitionId" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "lastMile" DOUBLE PRECISION NOT NULL,
    "vinCode" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usersId" INTEGER,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CostFuel" (
    "id" SERIAL NOT NULL,
    "volume" DOUBLE PRECISION NOT NULL,
    "mile" DOUBLE PRECISION NOT NULL,
    "carId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CostFuel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" SERIAL NOT NULL,
    "name_tm" TEXT NOT NULL,
    "name_ru" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubRegion" (
    "id" SERIAL NOT NULL,
    "name_tm" TEXT NOT NULL,
    "name_ru" TEXT NOT NULL,
    "description" TEXT,
    "regionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SubRegion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evacuator" (
    "id" SERIAL NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "subRegionId" INTEGER NOT NULL,
    "status" "ItemStatus" NOT NULL DEFAULT 'ACTIVE',
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Evacuator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdsImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "type" "ImageType" NOT NULL DEFAULT 'NONE',
    "status" "ItemStatus" NOT NULL DEFAULT 'ACTIVE',
    "adsId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdsImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ads" (
    "id" SERIAL NOT NULL,
    "titleTm" TEXT NOT NULL,
    "titleRu" TEXT NOT NULL,
    "index" INTEGER NOT NULL DEFAULT 0,
    "status" "ItemStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inbox" (
    "id" SERIAL NOT NULL,
    "titleTm" TEXT NOT NULL,
    "titleRu" TEXT NOT NULL,
    "messageTm" TEXT NOT NULL,
    "messageRu" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Inbox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_phonenumber_key" ON "Users"("phonenumber");

-- AddForeignKey
ALTER TABLE "CarShare" ADD CONSTRAINT "CarShare_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarShare" ADD CONSTRAINT "CarShare_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarModel" ADD CONSTRAINT "CarModel_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "CarBrand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarImage" ADD CONSTRAINT "CarImage_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "CarModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "CarOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_engineTypeId_fkey" FOREIGN KEY ("engineTypeId") REFERENCES "CarEngine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_transmitionId_fkey" FOREIGN KEY ("transmitionId") REFERENCES "CarTransmition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CostFuel" ADD CONSTRAINT "CostFuel_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubRegion" ADD CONSTRAINT "SubRegion_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evacuator" ADD CONSTRAINT "Evacuator_subRegionId_fkey" FOREIGN KEY ("subRegionId") REFERENCES "SubRegion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdsImage" ADD CONSTRAINT "AdsImage_adsId_fkey" FOREIGN KEY ("adsId") REFERENCES "Ads"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inbox" ADD CONSTRAINT "Inbox_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
