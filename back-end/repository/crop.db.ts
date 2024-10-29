import { Crop } from "../model/crop";

const crops=[
    new Crop({name:"maize",
           purchasePrice:10,
            marketPrice:40,
            totalYield:200,
           attentionRange:3,
           growthDuration:15}),
        
           new Crop({name:"Barley",
            purchasePrice:15,
             marketPrice:45,
             totalYield:205,
            attentionRange:4,
            growthDuration:9}),
]

const getAllCrops=():Crop[]=>{
    return crops;
}

export default {getAllCrops};