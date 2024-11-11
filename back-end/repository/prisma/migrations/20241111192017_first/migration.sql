-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Crop" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "purchasePrice" INTEGER NOT NULL,
    "marketPrice" INTEGER NOT NULL,
    "totalYield" INTEGER NOT NULL,
    "attentionRange" INTEGER NOT NULL,
    "growthDurationInMonths" INTEGER NOT NULL,

    CONSTRAINT "Crop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CropToCustomer" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Crop_name_key" ON "Crop"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_CropToCustomer_AB_unique" ON "_CropToCustomer"("A", "B");

-- CreateIndex
CREATE INDEX "_CropToCustomer_B_index" ON "_CropToCustomer"("B");

-- AddForeignKey
ALTER TABLE "_CropToCustomer" ADD CONSTRAINT "_CropToCustomer_A_fkey" FOREIGN KEY ("A") REFERENCES "Crop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CropToCustomer" ADD CONSTRAINT "_CropToCustomer_B_fkey" FOREIGN KEY ("B") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
