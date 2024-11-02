import CropDetails from "@/components/crops/CropDetails";
import CropService from "@/service/CropService";
import { Crop } from "@/types";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ReadCropById = () => {
  const [crop, setCrop] = useState<Crop | null>(null);

  const router = useRouter();
  const { cropId } = router.query;

  const getCropById = async () => {
    const [cropResponse] = await Promise.all([
      CropService.getCropById(cropId as string),
    ]);
    const [cropp] = await Promise.all([cropResponse.json()]);
    setCrop(cropp);
  };
  useEffect(() => {
    if (cropId) {
      getCropById();
    }
  });

  return (
    <>
      <Head>
        <title>Crop info</title>
      </Head>
      <main>
        <h1>Info of {crop && crop.name} </h1>
        {!crop && <p>Loading</p>}
        {crop && (
          <section>
            <CropDetails crop={crop}></CropDetails>
          </section>
        )}
      </main>
    </>
  );
};
export default ReadCropById;
