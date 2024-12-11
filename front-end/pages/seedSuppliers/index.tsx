import Header from "@/components/header";
import SeedSuppliersOverView from "@/components/SeedSuppliers/SeedSuppliersOverView";
import SeedSupplierService from "@/service/SeedSupplier";
import { SeedSupplier } from "@/types";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const SeedSuppliers = () => {
  const [seedSuppliers, setSeedSuppliers] = useState<SeedSupplier[]>([]);
  const [selectedSeedSupplier, setSelectedSeedSupplier] =
    useState<SeedSupplier | null>(null);

  const getSeedSuppliers = async () => {
    try {
      const response = await SeedSupplierService.getAllSeedSuppliers();
      if (!response.ok) throw new Error("Failed to fetch seed suppliers");
      const suppliers = await response.json();
      setSeedSuppliers(suppliers);
    } catch (error) {
      console.error(error);
      setSeedSuppliers([]);
    }
  };

  useEffect(() => {
    getSeedSuppliers();
  }, []);

  return (
    <>
      <Head>
        <title>Seed Suppliers</title>
      </Head>
      <Header/>
      <main className="d-flex flex-column justify-content-center align-items-center">
        <h2>Seed Suppliers Overview</h2>
        {seedSuppliers.length > 0 ? (
          <SeedSuppliersOverView
            seedSuppliers={seedSuppliers}
            selectSeedSupplier={setSelectedSeedSupplier}
          />
        ) : (
          <p>Loading or no suppliers available...</p>
        )}
      </main>
    </>
  );
};

export default SeedSuppliers;
