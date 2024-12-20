import Header from "@/components/header";
import UserLoginForm from "@/components/users/UserLoginForm";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React from "react";

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
        <div className="overflow-hidden">
      <table className="table position-relative z-index-2 w-50 bg-white bg-opacity-75 mx-auto">
        <thead>
          <tr>
            <th>User name</th>
            <th>Password</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cammie</td>
            <td>cammie123</td>
            <td>customer</td>
          </tr>
          <tr>
            <td>hana</td>
            <td>hana123</td>
            <td>Seed Supplier</td>
          </tr>
          <tr>
            <td>Yusuf Doe</td>
            <td>yusuf123</td>
            <td>farmer</td>
          </tr>
        </tbody>
      </table>
      </div>
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
