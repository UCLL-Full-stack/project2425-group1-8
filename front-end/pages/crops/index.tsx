import CropDetails from "@/components/crops/CropDetails";
import CropsOverviewTable from "@/components/crops/CropsOverviewTable";
import Header from "@/components/header";
import CropService from "@/service/CropService";
import { Crop } from "@/types";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const Crops: React.FC = () => {
  const [crops, setCrops] = useState<Array<Crop>>([]);
  const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);
  const getCrops = async () => {
    const response = await CropService.getAllCrops();
    const cropsData = await response.json();
    setCrops(cropsData);
  };
  useEffect(() => {
    getCrops();
  }, []);
  return (
    <>
      <Head>
        <title>Crops</title>
      </Head>
      <Header />

      <main className="d-flex flex-column justify-content-center align-items-left">
        <h1>CROPS</h1>
        <section>
          {crops && (
            <CropsOverviewTable crops={crops} selectedCrop={setSelectedCrop} />
          )}
          <h2>Crops Overview</h2>
        </section>
        {selectedCrop && (
          <section className="mt-5">
            <h2>Crop Details</h2>
            <CropDetails crop={selectedCrop} />
            {/* {selectedCrop.purchasePrice&&(
                <CropsOverviewTable crops= {selectedCrop}/>
            ) } */}
          </section>
        )}
      </main>
    </>
  );
};

export default Crops;
