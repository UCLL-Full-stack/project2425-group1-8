import CropsOverviewTable from "@/components/crops/CropsOverviewTable";
import CropService from "@/service/CropService";
import { Crop } from "@/types";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const Crops: React.FC = () => {
  const [crops, setCrops] = useState<Array<Crop>>([]);
  const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);
  const getCrops = async () => {
    const response = await CropService.getAllCrops();
    const crops = await response.json();
    setCrops(crops);
  };
  useEffect(() => {
    getCrops();
  }, []);
  return (
    <>
      <Head>
        <title>Crops</title>
      </Head>
      <main className="d-flex flex-column justify-content-center align-items-center">
        <h1>Crops</h1>
        <section>
          {crops && (
            <CropsOverviewTable crops={crops} selectedCrop={setSelectedCrop} />
          )}
          <h2>Crops Overview</h2>
        </section>
        {selectedCrop && <section className="mt-5"></section>}
      </main>
    </>
  );
};

export default Crops;
