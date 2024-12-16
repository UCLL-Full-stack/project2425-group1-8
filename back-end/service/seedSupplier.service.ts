import { Crop } from "../model/crop";
import { SeedSupplier } from "../model/seedSuplier";
import seedSupplierDb from "../repository/seedSupplier.db";
import { SeedSupplierInput } from "../types";
import bcrypt from 'bcrypt';


const getAllseedSuppliers=async():Promise<SeedSupplier[]>=> seedSupplierDb.getAllseedSuppliers();
const getSeedSupplierByEmail=async ({email}:{email:string}):Promise<SeedSupplier|null>=>{
    return seedSupplierDb.getSeedSupplierByEmail({email});
} 
const addSeedSupplier= async({
        name,
        password,
        address,
        email,
        seedType,
        role
}:SeedSupplier):Promise<SeedSupplier>=>{
   const existing=await seedSupplierDb.getSeedSupplierByEmail({email:email});
//    if(existing){
//     throw new Error("This SeedSupplier is already registered!")
//    } 

    const hashedPassword = await bcrypt.hash(password, 12);
   
   const createdSeedSupplier=new SeedSupplier({name,password:hashedPassword,email,address,seedType,role})

   return seedSupplierDb.addSeedSupplier(createdSeedSupplier)
}
export default {getAllseedSuppliers,getSeedSupplierByEmail,addSeedSupplier};