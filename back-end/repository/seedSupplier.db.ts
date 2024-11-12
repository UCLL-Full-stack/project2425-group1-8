import { Crop } from "../model/crop";
import { SeedSupplier } from "../model/seedSuplier";
import database from "./database";

const crop1=new Crop({name:"maize",purchasePrice:10,marketPrice:40,totalYield:200,attentionRange:3,growthDurationInMonths:15})



const getAllseedSuppliers=async():Promise <SeedSupplier[]>=>{
    try {
        const seedSuppliersPrisma=await database.seedSuplier.findMany({
            include:{seedType:true},
        });
        return seedSuppliersPrisma.map((seedSuplierPrisma) => SeedSupplier.from(seedSuplierPrisma));

    } catch (error) {
        console.error(error);
        throw new Error('Database error. see server log for details');
    }
};

export default {getAllseedSuppliers};