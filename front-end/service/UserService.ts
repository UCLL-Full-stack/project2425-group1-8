import { Crop, Role,Customer, SeedSupplier } from "@/types";
import CustomerService from "./CustomerService";
import SeedSupplierService from "./SeedSupplier";
const UserService ={
 addUsers: async (name:string,password:string,email:string ,address:string ,role:string,selectedCrop:Crop) =>{
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
            return "Idiot choose your role properly"
        }
    
        
}
}
export default UserService;