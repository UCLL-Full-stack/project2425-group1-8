import CropDetails from "@/components/crops/CropDetails";
import CropsOverviewTable from "@/components/crops/CropsOverviewTable";
import Header from "@/components/header";
import CropService from "@/service/CropService";
import { Crop } from "@/types";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import useSWR, { mutate } from "swr";
import useInterval from "use-interval";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Crops: React.FC = () => {
    const { t,i18n } = useTranslation()
  
  // const [crops, setCrops] = useState<Array<Crop>>([]);
  const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);
  const getCrops = async () => {
    const response = await CropService.getAllCrops();
    if (response.ok) {
      const cropsData = await response.json();
      return cropsData;
    }
  };

  const { data, isLoading, error } = useSWR("getCrops", getCrops);
  useInterval(() => {
    mutate("getCrops");
  }, 10000);
  return (
    <>
      <Head>
        <title>CROPS</title>
      </Head>
      <Header />

      <main className="d-flex flex-column justify-content-center align-items-center">
        <h1>{t('Crops.title')}</h1>
        <section>
          {error && <div className="text-red-800">{error}</div>}
          {isLoading && <p>Loading...</p>}
          {data && (
            <CropsOverviewTable crops={data} selectedCrop={setSelectedCrop} />
          )}
        </section>
        {selectedCrop && (
          <section className="mt-5">
            <h2>{t('Crops.cropsdetailstitle')}</h2>
            {/* <h3>{t('Crops.cropsname')}</h3> */}
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
export const getServerSideProps  = async (context: { locale: any; }) => {
  const { locale }= context;
  return {
    props:{
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};



export default Crops;
