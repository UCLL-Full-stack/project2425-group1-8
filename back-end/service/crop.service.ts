import { Crop } from "../model/crop";
import cropDb from "../repository/crop.db";
import database from "../repository/database";
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

const updateCrop = async (id: number, updatedCrop: Crop): Promise<Crop | null> => {
    try {
        const newCrop = new Crop({
            name: updatedCrop.getName(),
            purchasePrice: updatedCrop.getPurchasePrice() || 0, 
            marketPrice: updatedCrop.getMarketPrice() || 0, 
            totalYield: updatedCrop.getTotalYield() || 0, 
            attentionRange: updatedCrop.getAttentionRange() || 0, 
            growthDurationInMonths: updatedCrop.getgrowthDurationInMonths() || 0
        });

         await cropDb.updateCrop(id, newCrop);
         return newCrop;

    
    } catch (error) {
        console.error(error);
        throw new Error('Database error while updating crop');
    }
};

const deleteCrop = async (id: number): Promise<void> => {
    try {
        await database.crop.delete({
            where:{id}
        })
    } catch (error) {
        console.error('Error deleting crop:', error);
        throw new Error('Error deleting crop in service layer');
    }
};


export default {getAllCrops,getCropById,addCrop,updateCrop,deleteCrop};