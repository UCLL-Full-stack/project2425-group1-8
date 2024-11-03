import { Crop } from "../model/crop";
import cropDb from "../repository/crop.db";
import { CropInput } from "../types";

const getAllCrops=async():Promise<Crop[]> =>{
    return cropDb.getAllCrops();
}

const getCropById=(id:number):Crop=>{
    const crop=cropDb.getCropById({id});
    if(!crop)throw new Error(`Crop with id ${id} does not exist.`)
        return crop;
}

const addCrop=({
    name,
    purchasePrice,
    marketPrice,
    totalYield,
    attentionRange,
    growthDurationInMonths  
}:CropInput):Crop=>{
    const existingCrop=cropDb.findCropByName(name);

    if(existingCrop)throw new Error("this crop already exists");

    const crop=new Crop({name,purchasePrice,marketPrice,totalYield,attentionRange,growthDurationInMonths});

    return cropDb.addCrop(crop);
}

export default {getAllCrops,getCropById,addCrop};