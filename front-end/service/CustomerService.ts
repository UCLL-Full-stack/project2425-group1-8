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
const addCustomer=(name: string, role: string, address: string, email: string )=>{
    return fetch(process.env.NEXT_PUBLIC_API_URL +`/customers`,{
        method: "POST",
        headers:{
            "content-Type":"application/json",
        },
        body: JSON.stringify({name: name, role: role, address: address, email: email})

    })
}

const CustomerService ={
    getAllCustomers,
    getCustomerByName,
    addCustomer,
};

export default CustomerService;