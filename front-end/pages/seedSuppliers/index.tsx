import Header from "@/components/header";
import SeedSuppliersOverView from "@/components/SeedSuppliers/SeedSuppliersOverView";
import SeedSupplierService from "@/service/SeedSupplier";
import { SeedSupplier } from "@/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import useInterval from "use-interval";

const SeedSuppliers = () => {
  // const [seedSuppliers, setSeedSuppliers] = useState<SeedSupplier[]>([]);
  const [selectedSeedSupplier, setSelectedSeedSupplier] =
    useState<SeedSupplier | null>(null);

  const getSeedSuppliers = async () => {
    const response = await SeedSupplierService.getAllSeedSuppliers();
    // if (!response.ok) throw new Error("Failed to fetch seed suppliers");
    if (response.ok) {
      const suppliers = await response.json();
      return suppliers;
    }
  };
  const { data, isLoading, error } = useSWR(
    "getSeedSuppliers",
    getSeedSuppliers
  );

  useInterval(() => {
    mutate(getSeedSuppliers);
  }, 10000);

  return (
    <>
      <Head>
        <title>Seed Suppliers</title>
      </Head>
      <Header />
      <main className="d-flex flex-column justify-content-center align-items-center">
        <h2>Seed Suppliers Overview</h2>
        {isLoading && <p>Loading...</p>}
        {error && <div className="text-red-800">{error}</div>}
        {data && (
          <SeedSuppliersOverView
            seedSuppliers={data}
            selectSeedSupplier={setSelectedSeedSupplier}
          />
        )}
      </main>
    </>
  );
};
export const getServerSideProps  = async (context: { locale: any; }) => {
  const { locale }= context;
  return {
    props:{
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};

// export const getServersideProps = async (context: any) => {
//   const { locale } = context;

//   return {
//     props: {
//       ...(await serverSideTranslations(locale ?? "en", ["common"])),
//     },
//   };
// };

export default SeedSuppliers;
