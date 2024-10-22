export class Crop{
    private readonly id?:number;
    private readonly name:string;
    private readonly purchasePrice:number;
    private readonly marketPrice:number;
    private readonly yield:number;
    private readonly attentionRange:number;
    private readonly growthDuration:number;

    constructor (crop:{
        id?:number;
        name:string;
        purchasePrice:number;
        marketPrice:number;
        yield:number;
        attentionRange:number;
        growthDuration:number;
    }){
        this.id=crop.id;
        this.name=crop.name;
        this.purchasePrice=crop.purchasePrice;
        this.marketPrice=crop.marketPrice;
        this.yield=crop.yield;
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
    getYield():number{
        return this.yield;
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
        this.yield===otherCrop.getYield());
    }


}