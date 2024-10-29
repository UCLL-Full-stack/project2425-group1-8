export class Crop{
    private readonly id?:number;
    private readonly name:string;
    private readonly purchasePrice:number|undefined;
    private readonly marketPrice:number;
    private readonly totalYield:number;
    private readonly attentionRange:number;
    private readonly growthDuration:number;

    constructor (crop:{
        id?:number;
        name:string;
        purchasePrice:number;
        marketPrice:number;
        totalYield:number;
        attentionRange:number;
        growthDuration:number;
    }){
        this.validate(crop);
        this.id=crop.id;
        this.name=crop.name;
        this.purchasePrice=crop.purchasePrice;
        this.marketPrice=crop.marketPrice;
        this.totalYield=crop.totalYield;
        this.attentionRange=crop.attentionRange;
        this.growthDuration=crop.growthDuration;
    }
    validate(crop:{name:string;purchasePrice:number|undefined;marketPrice:number;totalYield:number;attentionRange:number;growthDuration:number;}){
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
    getGrowthDuration():number{
        return this.growthDuration;
    }

    equals(otherCrop:Crop):boolean{
        return (this.name===otherCrop.getName()&&
        this.purchasePrice===otherCrop.getPurchasePrice()&&
        this.marketPrice===otherCrop.getMarketPrice()&&
        this.attentionRange===otherCrop.getAttentionRange()&&
        this.growthDuration===otherCrop.getGrowthDuration()&&
        this.totalYield===otherCrop.getTotalYield());
    }


}