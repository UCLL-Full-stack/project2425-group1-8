-- AlterTable
ALTER TABLE "_CropToCustomer" ADD CONSTRAINT "_CropToCustomer_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_CropToCustomer_AB_unique";
