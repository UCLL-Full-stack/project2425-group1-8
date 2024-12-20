import { Crop, Customer } from "@/types";

const getAllCustomers=async()=>{
    try {
        const token=localStorage.getItem("loggedInUser")? JSON.parse(localStorage.getItem("loggedInUser")|| "{}")?.token:null;
        const response=await fetch(process.env.NEXT_PUBLIC_API_URL +"/customers",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
            
        });

        if (!token) {
            throw new Error("User is not logged in or token is missing");
        }
        
        const data=await response.json()
        return data;
    } catch (error: unknown) {
        console.log(error)
    }
   
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