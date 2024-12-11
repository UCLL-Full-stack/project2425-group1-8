import { Crop, Role,Customer } from "@/types";
import CustomerService from "./CustomerService";
const UserService ={
 addUsers: async (name:string,role:Role,address:string,email:string) =>{
    if(role==="customer"){
        const customer:Customer =({
            name:name,
            address:address,
            email:email,
            role:role
        })
      const response= await CustomerService.addCustomer(name, role, address, email)
      return response.json()
    }else if(role==="farmer"){
            return "not yet implemented"
        }else if(role==="seedSupplier"){
            return "not yet implemented"
        }else{
            return "Idiot choose your role properly"
        }
    
        
}
}
export default UserService;