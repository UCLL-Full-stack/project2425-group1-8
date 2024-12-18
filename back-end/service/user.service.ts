import { AuthenticationResponse, CustomerInput, FarmerInput, SeedSupplierInput } from "../types"
import { Customer } from "../model/customer"
import { SeedSupplier } from "../model/seedSuplier"
import userDb from "../repository/user.db"
import bcrypt from 'bcrypt';
import { generateJwtToken } from '../util/jwt';
import { Farmer } from "../model/farmer";



const getUsersByNameAndRole=async({name,role}:{name:string,role:string}):Promise<Customer|Farmer|SeedSupplier>=>{

    const user = await userDb.getUsersByNameAndRole({ name, role });
   
    if(!user){
        throw new Error(`user with name: ${name} and role: ${role} does not exist!`)
    }
    return user as Customer|Farmer|SeedSupplier;
}
const authenticate=async({name,password,role}:CustomerInput|SeedSupplierInput|FarmerInput):Promise<AuthenticationResponse>=>{
    const user= await getUsersByNameAndRole({name,role});

    const isValidPassword=await bcrypt.compare(password,user.getPassword());

    if(!isValidPassword){
        throw new Error('Incorrect password!')
    }
        return {
        token:generateJwtToken({name,role:user.getRole()}),
        name:name,
        role:user.getRole()
    }
}
export default {authenticate,getUsersByNameAndRole}