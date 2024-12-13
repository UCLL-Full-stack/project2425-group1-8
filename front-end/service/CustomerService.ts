import { Crop, Customer, Role } from "@/types";

const getAllCustomers=()=>{
    return fetch(process.env.NEXT_PUBLIC_API_URL +"/customers",{
        method:"GET",
        headers:{
            "content-Type":"application/json",
        }
    });
};
const getCustomerByName=(customerName:string)=>{
    return fetch(process.env.NEXT_PUBLIC_API_URL + `/customers/${customerName}`,{
        method:"GET",
        headers:{
            "content-Type":"application/json",
        },
    })
}
const addCustomer=(customer:Customer) =>{
    try {
        const customerPromise: Promise<Response> = fetch(process.env.NEXT_PUBLIC_API_URL + "/customers",{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(customer)

        })
        return customerPromise
    }    catch (e: unknown) {
        console.error(e)
    }
}

const CustomerService ={
    getAllCustomers,
    getCustomerByName,
    addCustomer,
};

export default CustomerService;