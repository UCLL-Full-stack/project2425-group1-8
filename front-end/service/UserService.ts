import { Crop, Role,Customer } from "@/types";
import CustomerService from "./CustomerService";
const UserService ={
 addUsers: async (name:string,password:string,email:string ,address:string ,role:string): Promise<Customer | string>  =>{
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