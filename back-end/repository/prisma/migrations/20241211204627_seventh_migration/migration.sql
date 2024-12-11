/*
  Warnings:

  - Added the required column `address` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `SeedSupplier` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "address" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SeedSupplier" ADD COLUMN     "address" TEXT NOT NULL;
