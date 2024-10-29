import { Crop } from "../model/crop";
import cropDb from "../repository/crop.db";

const getAllCrops=async():Promise<Crop[]> =>{
    return cropDb.getAllCrops();
}

export default {getAllCrops};