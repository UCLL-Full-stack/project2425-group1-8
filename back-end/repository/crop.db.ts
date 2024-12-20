import { Crop } from "../model/crop";
import database from "./database";

const crops=[
    new Crop({
        id:1,
        name:"maize",
           purchasePrice:10,
            marketPrice:40,
            totalYield:200,
           attentionRange:3,
           growthDurationInMonths:15}),
        
           new Crop({
            id:2,
            name:"Barley",
            purchasePrice:15,
             marketPrice:45,
             totalYield:205,
            attentionRange:4,
            growthDurationInMonths:9}),
]

const getAllCrops=async():Promise<Crop[]>=>{
    try{
        const cropPrisma= await database.crop.findMany({})
        return cropPrisma.map((cropPrisma)=>Crop.from(cropPrisma));
    }catch(error){
        console.error(error);
        throw new Error('Database error')
    }
}

const findCropByName=(name:string):Crop|undefined=> {
    return crops.find(crop=>crop.getName()===name)
}

const getCropById=({id}:{id:number}):Crop|null=>{
    return crops.find((crop)=>crop.getId()===id)||null;
}

const addCrop=(crop:Crop):Crop=>{
    crops.push(crop);
    return crop;
}

const updateCrop=async(id:number,updatedCrop:Crop):Promise<Crop|null>=>{
    try{
        const updated=await database.crop.update({
            where:{id},
            data:{
                name:updatedCrop.getName(),
                purchasePrice: updatedCrop.getPurchasePrice(),
                marketPrice: updatedCrop.getMarketPrice(),
                totalYield: updatedCrop.getTotalYield(),
                attentionRange: updatedCrop.getAttentionRange(),
                growthDurationInMonths: updatedCrop.getgrowthDurationInMonths(),
            }
        })
        return Crop.from(updated);
    }catch(e){
        console.error(e);
        throw new Error('database error');
    }
}

const deleteCrop=async(id:number):Promise<boolean>=>{
    try{
        const crop=await database.crop.delete({
            where:{id}
        })
        return true;
    }catch(e){
        console.error(e);
        throw new Error('database error')
    }

}

export default {getAllCrops,findCropByName,getCropById,addCrop,updateCrop,deleteCrop};