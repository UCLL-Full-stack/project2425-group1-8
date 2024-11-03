import Header from "@components/header";
import CustomerDetail from "@/components/customer/customerDetail";
import CustomerService from "@/service/CustomerService";
import { Customer } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

const CustomerByName=()=>{
    const [customer,setCustomer]=useState<Customer|null>(null);
    const router=useRouter();
    const{customerName}=router.query;

    const getCustomerByName=async()=>{
        const [customerResponse]=await Promise.all([CustomerService.getCustomerByName(customerName as string)]);
        const [customer]=await Promise.all([customerResponse.json()]);
        setCustomer(customer);
    };
    useEffect(()=>{
        if (customerName) getCustomerByName();
    });
    return(
        <>
        <Head>
            <title>Customer Details</title>
        </Head>
        <Header />
        <main className="d-flex flex-column justify-content-center align-items-center">
            <h1>
                Info of {customer && customer.name}
            </h1>
            <section>

                {customer && <CustomerDetail customer={customer} />
                } 
            </section>
        </main>
        </>
    );
}


export default CustomerByName;