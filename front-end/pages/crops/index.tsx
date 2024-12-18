import CropDetails from "@/components/crops/CropDetails";
import CropsOverviewTable from "@/components/crops/CropsOverviewTable";
import Header from "@/components/header";
import CropService from "@/service/CropService";
import { Crop } from "@/types";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import useInterval from "use-interval";

const Crops: React.FC = () => {
  // const [crops, setCrops] = useState<Array<Crop>>([]);
  const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);
  const getCrops = async () => {
    const response = await CropService.getAllCrops();
    if(response.ok){
      const cropsData = await response.json();
      return cropsData;
    }
    
  };

  const {data, isLoading, error} =useSWR("getCrops", getCrops);
 useInterval(()=>{ mutate ("getCrops") }, 10000)
  return (
    <>
      <Head>
        <title>Crops</title>
      </Head>
      <Header />

      <main className="d-flex flex-column justify-content-center align-items-center">
        <h1>CROPS</h1>
        <section>
          {error && <div className="text-red-800">{error}</div>}
          {isLoading && <p>Loading...</p>}
          {data && (
            <CropsOverviewTable crops={data} selectedCrop={setSelectedCrop} />
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
