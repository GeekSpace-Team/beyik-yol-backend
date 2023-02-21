/*
  Warnings:

  - The values [FUEL] on the enum `ConstantPriceType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ConstantPriceType_new" AS ENUM ('FUEL_95', 'FUEL_80', 'FUEL_92', 'BEYIK_YOL_SERVICE', 'BEYIK_YOL_WASH', 'BEYIK_YOL_SHOP', 'NONE');
ALTER TABLE "ConstantPrices" ALTER COLUMN "type" DROP DEFAULT;
ALTER TABLE "ConstantPrices" ALTER COLUMN "type" TYPE "ConstantPriceType_new" USING ("type"::text::"ConstantPriceType_new");
ALTER TYPE "ConstantPriceType" RENAME TO "ConstantPriceType_old";
ALTER TYPE "ConstantPriceType_new" RENAME TO "ConstantPriceType";
DROP TYPE "ConstantPriceType_old";
ALTER TABLE "ConstantPrices" ALTER COLUMN "type" SET DEFAULT 'NONE';
COMMIT;
