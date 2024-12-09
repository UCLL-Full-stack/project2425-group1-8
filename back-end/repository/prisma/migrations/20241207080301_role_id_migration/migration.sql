-- Create the Role table first

CREATE TABLE "Role" ( "id" SERIAL NOT NULL,
                                  "name" TEXT NOT NULL,
                                              CONSTRAINT "Role_pkey" PRIMARY KEY ("id"));

-- Create a unique index on the Role name

CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- Insert default roles into the Role table

INSERT INTO "Role" ("name")
VALUES ('customer'), ('farmer'), ('seedSupplier') ON CONFLICT DO NOTHING; -- Prevent duplicate entries if migration is rerun

-- Update Customer table

ALTER TABLE "Customer"
DROP COLUMN "role",
            ADD COLUMN "roleId" INTEGER;

-- Backfill roleId in Customer table

UPDATE "Customer"
SET "roleId" =
  (SELECT "id"
   FROM "Role"
   WHERE "name" = 'customer');

-- Set roleId as NOT NULL in Customer table

ALTER TABLE "Customer"
ALTER COLUMN "roleId"
SET NOT NULL;

-- Add foreign key constraint to Customer table

ALTER TABLE "Customer" ADD CONSTRAINT "Customer_roleId_fkey"
FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON
DELETE RESTRICT ON
UPDATE CASCADE;

-- Update Farmer table

ALTER TABLE "Farmer"
DROP COLUMN "role",
            ADD COLUMN "roleId" INTEGER;

-- Backfill roleId in Farmer table

UPDATE "Farmer"
SET "roleId" =
  (SELECT "id"
   FROM "Role"
   WHERE "name" = 'farmer');

-- Set roleId as NOT NULL in Farmer table

ALTER TABLE "Farmer"
ALTER COLUMN "roleId"
SET NOT NULL;

-- Add foreign key constraint to Farmer table

ALTER TABLE "Farmer" ADD CONSTRAINT "Farmer_roleId_fkey"
FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON
DELETE RESTRICT ON
UPDATE CASCADE;

-- Update SeedSupplier table

ALTER TABLE "SeedSupplier"
DROP COLUMN "role",
            ADD COLUMN "roleId" INTEGER;

-- Backfill roleId in SeedSupplier table

UPDATE "SeedSupplier"
SET "roleId" =
  (SELECT "id"
   FROM "Role"
   WHERE "name" = 'seedSupplier');

-- Set roleId as NOT NULL in SeedSupplier table

ALTER TABLE "SeedSupplier"
ALTER COLUMN "roleId"
SET NOT NULL;

-- Add foreign key constraint to SeedSupplier table

ALTER TABLE "SeedSupplier" ADD CONSTRAINT "SeedSupplier_roleId_fkey"
FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON
DELETE RESTRICT ON
UPDATE CASCADE;

