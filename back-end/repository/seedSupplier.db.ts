import { Crop } from "../model/crop";
import { SeedSupplier } from "../model/seedSuplier";
import { SeedSupplierInput } from "../types";
import database from "./database";

const crop1=new Crop({name:"maize",purchasePrice:10,marketPrice:40,totalYield:200,attentionRange:3,growthDurationInMonths:15})



const getAllseedSuppliers=async():Promise <SeedSupplier[]>=>{
    try {
        const seedSuppliersPrisma=await database.seedSupplier.findMany({
            include:{seedType:true},
        });
        return seedSuppliersPrisma.map((seedSuplierPrisma) => SeedSupplier.from(seedSuplierPrisma));

    } catch (error) {
        console.error(error);
        throw new Error('Database error. see server log for details');
    }
};

const addSeedSupplier= async (seedSupplier:SeedSupplier):Promise<SeedSupplier>=>{
    try {
        const createdSeedSupplier=await database.seedSupplier.create({
            data:{
                name:seedSupplier.name,
                password:seedSupplier.password,
                address:seedSupplier.address,
                email:seedSupplier.email,
                seedType:{
                    connect:{name:seedSupplier.seedType.name}},
                role:seedSupplier.role
            },include:{
                seedType:true
            }
    })
    return SeedSupplier.from(createdSeedSupplier);
    } catch (error) {
        console.error('Error adding SeedSupplier',error);
        throw new Error("Failed to add SeedSupplier")
    }
}

const getSeedSupplierByEmail=async ({email}:{email:string}):Promise<SeedSupplier | null>=>{
    try {
        const seedSuplierPrisma=await database.seedSupplier.findFirst({
            where:{email},
            include:{
                seedType:true
            }
        })
        if(seedSuplierPrisma) {
            return SeedSupplier.from(seedSuplierPrisma);
        }else{
            return null
        }
    } catch (error) {
        console.error(error);
        throw new Error("Database error check logs.")
    }
}
export default {getAllseedSuppliers,addSeedSupplier,getSeedSupplierByEmail};