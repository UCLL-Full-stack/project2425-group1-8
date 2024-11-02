import Head from "next/head";
import styles from "@styles/Home.module.css";
const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>CropsApp</title>
        <meta name="description" content="CropsApp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <span>
          <h1>Welcome!</h1>
        </span>
      </main>
    </>
  );
};

export default Home;
