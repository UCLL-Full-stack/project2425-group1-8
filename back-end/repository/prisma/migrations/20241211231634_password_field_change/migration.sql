/*
  Warnings:

  - The primary key for the `_CropToCustomer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[A,B]` on the table `_CropToCustomer` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "_CropToCustomer" DROP CONSTRAINT "_CropToCustomer_AB_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "_CropToCustomer_AB_unique" ON "_CropToCustomer"("A", "B");
