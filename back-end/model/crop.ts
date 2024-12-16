import { 
    Crop as CropPrisma,
 } from '@prisma/client';
export class Crop{
   
     readonly id?:number;
     readonly name:string;
    private readonly purchasePrice:number|undefined;
    private readonly marketPrice:number;
    private readonly totalYield:number;
    private readonly attentionRange:number;
    private readonly growthDurationInMonths:number;

    constructor (crop:{
        id?:number;
        name:string;
        purchasePrice:number;
        marketPrice:number;
        totalYield:number;
        attentionRange:number;
        growthDurationInMonths:number;
    }){
        this.validate(crop);
        this.id=crop.id;
        this.name=crop.name;
        this.purchasePrice=crop.purchasePrice;
        this.marketPrice=crop.marketPrice;
        this.totalYield=crop.totalYield;
        this.attentionRange=crop.attentionRange;
        this.growthDurationInMonths=crop.growthDurationInMonths;
    }
    validate(crop:{name:string;purchasePrice:number|undefined;marketPrice:number;totalYield:number;attentionRange:number;growthDurationInMonths:number;}){
        if(!crop.name){
            throw new Error('name must be provided');
        }
        // if(!crop.purchasePrice || crop.purchasePrice===undefined){
        //     throw new Error('purchase price must be provided');
        // }
        // if(!crop.marketPrice){
        //     throw new Error('market price must be provided');
        // }
        if(crop.attentionRange<1 || crop.attentionRange>5){
            throw new Error('crop attention must be in range 1-5')
        }
    }

    getId():number|undefined{
        return this.id;
    }
    getName():string{
        return this.name;
    }
    getPurchasePrice():number|undefined{
        return this.purchasePrice;
    }
    getMarketPrice():number{
        return this.marketPrice;
    }
    getTotalYield():number{
        return this.totalYield;
    }
    getAttentionRange():number{
        return this.attentionRange;
    }
    getgrowthDurationInMonths():number{
        return this.growthDurationInMonths;
    }

    equals(otherCrop:Crop):boolean{
        return (this.name===otherCrop.getName()&&
        this.purchasePrice===otherCrop.getPurchasePrice()&&
        this.marketPrice===otherCrop.getMarketPrice()&&
        this.attentionRange===otherCrop.getAttentionRange()&&
        this.growthDurationInMonths===otherCrop.getgrowthDurationInMonths()&&
        this.totalYield===otherCrop.getTotalYield());
    }

    static from ({id,name,purchasePrice,marketPrice,totalYield,attentionRange,growthDurationInMonths}:CropPrisma){
        return new Crop({
            id,
            name,
            purchasePrice,
            marketPrice,
            totalYield,
            attentionRange,
            growthDurationInMonths
        })
    }


}