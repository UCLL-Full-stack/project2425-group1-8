import Header from "@components/header";
import CustomerTable from "@/components/customer/customersTable";
import CustomerService from "@/service/CustomerService";
import { Crop, Customer } from "@/types";
import Head from "next/head";
import { useEffect, useState } from "react";
import CropsOverviewTable from "@/components/crops/CropsOverviewTable";
import Crops from "../crops";
import useSWR, { mutate } from "swr";
import useInterval from "use-interval";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Customers: React.FC = () => {
  // const[customers,setCustomers]=useState<Array<Customer>>();
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );

  const getCustomers = async () => {
    const response = await CustomerService.getAllCustomers();
    if (response.ok) {
      const customers = await response.json();
      return customers;
    }
  };

  const { data, isLoading, error } = useSWR("getCustomers", getCustomers);

  useInterval(() => {
    mutate("getCustomers");
  }, 10000);

  const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);

  return (
    <>
      <Head>
        <title>Customers</title>
      </Head>
      <Header />
      <main className="d-flex flex-column justify-content-center align-items-center">
        <h1>Customers</h1>
        <section>
          <h2>Customers Overview</h2>
          {isLoading && <p>Loading...</p>}
          {error && <div className="text-red-800">{error}</div>}
          {data && (
            <CustomerTable
              customers={data}
              selectCustomer={setSelectedCustomer}
            />
          )}
        </section>

        {selectedCustomer && (
          <section className="mt-5">
            <h2>Crop Preferences of {selectedCustomer.name};</h2>
            {selectedCustomer.cropPreference && (
              <CropsOverviewTable
                crops={selectedCustomer.cropPreference}
                selectedCrop={setSelectedCrop}
              />
            )}
          </section>
        )}
      </main>
    </>
  );
};

// export const getServersideProps = async (context: any) => {
//   const { locale } = context;

//   return {
//     props: {
//       ...(await serverSideTranslations(locale ?? "en", ["common"])),
//     },
//   };
// };

export default Customers;
