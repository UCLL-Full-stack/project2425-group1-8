import Header from "@/components/header";
import UserLoginForm from "@/components/users/UserLoginForm";
import UserSignup from "@/components/users/userSIgnup";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React from "react";

const Signup = () => {
  return (
    <>
      <Head>
        <title>User Signup</title>
      </Head>
      <Header />
      <main>
        <section>
          <UserSignup />
        </section>
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

export default Signup;
