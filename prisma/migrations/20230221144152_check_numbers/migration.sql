-- AlterTable
ALTER TABLE "CarView" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- CreateTable
CREATE TABLE "CheckedNumber" (
    "id" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "used" BOOLEAN NOT NULL DEFAULT false,
    "accepted" BOOLEAN NOT NULL DEFAULT false,
    "is_exists" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CheckedNumber_pkey" PRIMARY KEY ("id")
);
