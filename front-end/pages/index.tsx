import Head from "next/head";
import styles from "@styles/Home.module.css";
import Image from "next/image";
import Header from "@/components/header";
import home from "../images/home.jpg";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>CropApp</title>
        <meta name="description" content="CropsApp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        {/* <span>
          <h1>Welcome!</h1>
        </span> */}
        <div className={styles.imageContainer}>
          <Image
            src={home}
            alt="Agriculture Field"
            width={1500}
            height={600}
            className="rounded shadow-sm"
          />
        </div>
      </main>
    </>
  );
};

export default Home;
