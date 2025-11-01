-- DropIndex
DROP INDEX "public"."Ingredient_name_key";

-- AlterTable
ALTER TABLE "CartItem" ALTER COLUMN "updatedAt" DROP DEFAULT;
