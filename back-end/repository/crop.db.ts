import { Crop } from "../model/crop";

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

const getAllCrops=():Crop[]=>{
    return crops;
}

const findCropByName=(name:string):Crop|undefined=> {
    return crops.find(crop=>crop.getName()===name)
}

const addCrop=(crop:Crop):Crop=>{
    crops.push(crop);
    return crop;
}

export default {getAllCrops,findCropByName,addCrop};