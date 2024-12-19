import Header from "@/components/header";
import UserLoginForm from "@/components/users/UserLoginForm";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Login = () => {
  return (
    <>
      <Head>
        <title>User Signup</title>
      </Head>
      <Header />
      <main>
        <section>
          <UserLoginForm />
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
export default Login;
