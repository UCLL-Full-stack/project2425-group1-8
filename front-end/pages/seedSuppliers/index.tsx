import SeedSuppliersOverView from "@/components/SeedSuppliers/SeedSuppliersOverView";
import CropService from "@/service/CropService";
import SeedSupplierService from "@/service/SeedSupplier";
import { SeedSupplier } from "@/types";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import useInterval from "use-interval";

const SeedSuppliers = () => {
//   const [seedSuppliers, setSeedSuppliers] = useState<Array<SeedSupplier>>();
//   const [selectedSeedSupplier, setSelectedSeedSupplier] =
//     useState<SeedSupplier | null>(null);

    const getSeedSuppliersAndCrops=async()=>{
        const response=await Promise.all([
            SeedSupplierService.getAllSeedSuppliers(),
            CropService.getAllCrops()
        ]);
        const [seedSupplierresponse,cropResponse]=response;

        if (seedSupplierresponse.ok && cropResponse.ok){
            const seedSuppliers=await seedSupplierresponse.json();
            const crops=await cropResponse.json();
            return {seedSuppliers,crops};
        }
    };

const {data, isLoading,error}=useSWR(
    "seedSuppliersAndCrops",
    getSeedSuppliersAndCrops
)

useInterval(()=>{
    mutate("seedSuppliersAndCrops",getSeedSuppliersAndCrops())
},1000)
//   const getSeedSuppliers = async () => {
//     const response = await SeedSupplierService.getAllSeedSuppliers();
//     const seedSuppliers = await response.json();
//     setSeedSuppliers(seedSuppliers);
//   };

//   useEffect(() => {
//     getSeedSuppliers();
//   }, []);

  return (
    <>
      <Head>
        <title>Seed Suppliers</title>
      </Head>
      <main className="d-flex flex-column justify-content-center align-items-center">
        <h2>Seed Suppliers Overview</h2>
        {error && <div className="text-danger">{error}</div> }
        {isLoading && <p className="text-secondary">Loading...</p> }
        {data && (
            <SeedSuppliersOverView
              seedSuppliers={data.seedSuppliers}
              crops={data.crops}
            />

        )}
    
      </main>
    </>
  );
};

export default SeedSuppliers;
