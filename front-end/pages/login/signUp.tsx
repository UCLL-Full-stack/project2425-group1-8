import Header from "@/components/header";
import UserLoginForm from "@/components/users/UserLoginForm";
import UserSignup from "@/components/users/userSIgnup";
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

export default Signup;
