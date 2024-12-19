-- DropForeignKey
ALTER TABLE "SeedSupplier" DROP CONSTRAINT "SeedSupplier_cropId_fkey";

-- AddForeignKey
ALTER TABLE "SeedSupplier" ADD CONSTRAINT "SeedSupplier_cropId_fkey" FOREIGN KEY ("cropId") REFERENCES "Crop"("id") ON DELETE CASCADE ON UPDATE CASCADE;
