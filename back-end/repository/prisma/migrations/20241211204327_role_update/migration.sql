/*
  Warnings:

  - You are about to drop the column `address` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `SeedSupplier` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Farmer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `SeedSupplier` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `role` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Farmer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `SeedSupplier` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "address",
ADD COLUMN     "role" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Farmer" ADD COLUMN     "role" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SeedSupplier" DROP COLUMN "address",
ADD COLUMN     "role" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "_CropToCustomer" ADD CONSTRAINT "_CropToCustomer_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_CropToCustomer_AB_unique";

-- CreateIndex
CREATE UNIQUE INDEX "Customer_name_key" ON "Customer"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Farmer_name_key" ON "Farmer"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SeedSupplier_email_key" ON "SeedSupplier"("email");
