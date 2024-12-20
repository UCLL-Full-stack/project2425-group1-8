import { Crop,Customer, SeedSupplier, Farmer } from "@/types";
import CustomerService from "./CustomerService";
import SeedSupplierService from "./SeedSupplier";
const addUsers= async (name:string,password:string,email:string ,address:string ,role:string,selectedCrop:Crop) =>{
    if(role==="customer"){
        const customer:Customer =({
            name:name,
            password:password,
            email:email,
            address:address,
            role:role
        })
      const response = await CustomerService.addCustomer(customer)
      return response?.json()
    }else if(role==="seedSupplier"){
        const seedSupplier:SeedSupplier=({
            name:name,
            password:password,
            email:email,
            address:address,
            seedType:selectedCrop,
            role:role
        })    
        const response= await SeedSupplierService.addSeedSupplier(seedSupplier)
        return response?.json()
        }else{
            console.log(role)
            return "choose your role properly"
        }       
}

const loginUser=({name,password,role}:{ name: string; password: string; role: string })=>{
    // const loggedInUser = sessionStorage.getItem("loggedInUser");
    // if (!loggedInUser) {
    //     throw new Error("loggedInUser not found in sessionStorage.");
    // }
    // const token = JSON.parse(loggedInUser).token;
    const token=JSON.parse(localStorage.getItem("loggedInUser")|| "{}")?.token;
    return fetch(process.env.NEXT_PUBLIC_API_URL+"/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        body:JSON.stringify({name,password,role})
        
    })    
}

const UserService={
    addUsers,loginUser
}


export default UserService;