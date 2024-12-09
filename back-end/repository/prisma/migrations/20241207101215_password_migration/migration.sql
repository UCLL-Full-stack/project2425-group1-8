/*
  Warnings:

  - Added the required column `password` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Farmer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `SeedSupplier` table without a default value. This is not possible if the table is not empty.

*/ -- AlterTable

ALTER TABLE "Customer" ADD COLUMN "password" TEXT;

-- AlterTable

ALTER TABLE "Farmer" ADD COLUMN "password" TEXT ;

-- AlterTable

ALTER TABLE "SeedSupplier" ADD COLUMN "password" TEXT ;

-- Update existing records with a default password for the Customer table

UPDATE "Customer"
SET "password" = 'defaultpassword'
WHERE "password" IS NULL;

-- Update existing records with a default password for the Farmer table

UPDATE "Farmer"
SET "password" = 'defaultpassword'
WHERE "password" IS NULL;

-- Update existing records with a default password for the SeedSupplier table

UPDATE "SeedSupplier"
SET "password" = 'defaultpassword'
WHERE "password" IS NULL;

-- Step 4: Make the password column NOT NULL in Customer table

ALTER TABLE "Customer"
ALTER COLUMN "password"
SET NOT NULL;

-- Step 5: Make the password column NOT NULL in Farmer table

ALTER TABLE "Farmer"
ALTER COLUMN "password"
SET NOT NULL;

-- Step 6: Make the password column NOT NULL in SeedSupplier table

ALTER TABLE "SeedSupplier"
ALTER COLUMN "password"
SET NOT NULL;

