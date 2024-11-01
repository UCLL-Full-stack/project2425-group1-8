import { Crop } from "../model/crop";
import { SeedSupplier } from "../model/seedSuplier";

const crop1=new Crop({name:"maize",purchasePrice:10,marketPrice:40,totalYield:200,attentionRange:3,growthDurationInMonths:15})

const seedSuppliers=[
    new SeedSupplier({
        name:"Fletcher",
        address:"Genk",
        email:"fletcher123@gmail.com",
        seedType:crop1
    }),
    new SeedSupplier({
        name:"Fletcheris",
        address:"Luik",
        email:"fletcheris123@gmail.com",
        seedType:crop1
    })
];

const getAllseedSuppliers=():SeedSupplier[]=>{
    return seedSuppliers;
};

export default {getAllseedSuppliers};