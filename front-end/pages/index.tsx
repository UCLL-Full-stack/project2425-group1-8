import Head from "next/head";
import styles from "@styles/Home.module.css";
import Image from "next/image";
import Header from "@/components/header";
// import   serverSideTranslations  from 'next-i18next';
// import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import home from "../images/home.jpg";
import { useTranslation } from "next-i18next";
const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>CropApp</title>
        <meta name="description" content="CropsApp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main >
      <div className={styles.imageContainer}>
          <Image
            src={home}
            alt="Agriculture Field"
            width={1255}
            height={535}
            className="rounded shadow-sm"
          />
        </div>
        {/* <span>
          <h1>Welcome!</h1>
        </span> */}
        
      </main>
    </>
  );
};

export const getServerSideProps = async (context: { locale: any }) => {
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};

export default Home;
