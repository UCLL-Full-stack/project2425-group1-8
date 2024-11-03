import Header from "@components/header";
import CustomerTable from "@/components/customer/customersTable";
import CustomerService from "@/service/CustomerService";
import { Crop, Customer } from "@/types";
import Head from "next/head";
import { useEffect, useState } from "react";
import CropsOverviewTable from "@/components/crops/CropsOverviewTable";
import Crops from "../crops";

const Customers:React.FC=() =>{
    const[customers,setCustomers]=useState<Array<Customer>>();
    const[selectedCustomer,setSelectedCustomer]=useState <Customer|null>(null)

    const getCustomers=async()=>{
        const response=await CustomerService.getAllCustomers();
        const customers=await response.json();
        setCustomers(customers);
    }

    useEffect(()=>{
        getCustomers();
    },[])

    const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);


    return (
        <>
        <Head>
            <title>Customers</title>
        </Head>
        <Header/>
        <main className="d-flex flex-column justify-content-center align-items-center">
            <h1>Customers</h1>
            <section>
                <h2>Customers Overview</h2>
                {customers && (
                    <CustomerTable customers={customers} selectCustomer={setSelectedCustomer}/>
                )}
            </section>

            {selectedCustomer &&(
                <section className="mt-5">
                    <h2>
                        Crop Preferences of {selectedCustomer.name};
                    </h2>
                    {selectedCustomer.cropPreference &&(
                        <CropsOverviewTable crops={selectedCustomer.cropPreference} selectedCrop={setSelectedCrop}/>
                    )}
                </section>
            )}

        </main>
        </>
    );
};

export default Customers;