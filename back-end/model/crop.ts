export class Crop{
    private readonly id?:number;
    private readonly name:string;
    private readonly purchasePrice:number;
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
        this.id=crop.id;
        this.name=crop.name;
        this.purchasePrice=crop.purchasePrice;
        this.marketPrice=crop.marketPrice;
        this.totalYield=crop.totalYield;
        this.attentionRange=crop.attentionRange;
        this.growthDuration=crop.growthDuration;
    }

    getId():number|undefined{
        return this.id;
    }
    getName():string{
        return this.name;
    }
    getPurchasePrice():number{
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