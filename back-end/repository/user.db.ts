import { ro } from "date-fns/locale"
import { Customer } from "../model/customer"
import { Farmer } from "../model/farmer"
import { SeedSupplier } from "../model/seedSuplier"
import database from "./database"

const getUsersByNameAndRole=async({name,role}:{name:string,role:string}):Promise<Customer|Farmer|SeedSupplier|null>=>{
    try{
        let user:any=null;

        if (role==='customer'){
            user=await database.customer.findFirst({
                where: { name, role: 'customer' },
                include: {
                    cropPreference: true
                }
            }) 
        }else if(role==='farmer'){
            user=await database.farmer.findFirst({
                where:{name,role:'farmer'},
            })as Farmer|null
        }
        else if(role==='seedSupplier'){
            user=await database.seedSupplier.findFirst({
                where:{name,role:'seedSupplier'},
                include: { seedType: true }
            }) as SeedSupplier|null
        }
        if(user){
            if(role==='customer'){
                return Customer.from(user);
            }else if (role==='farmer'){
                return Farmer.from(user);
            }else if(role==='seedSupplier'){
                return SeedSupplier.from(user);
            }
        }
        return null;
    }catch (error){
        console.error(error);
        throw new Error('Database error.check logs')
    }
};

export default {getUsersByNameAndRole};