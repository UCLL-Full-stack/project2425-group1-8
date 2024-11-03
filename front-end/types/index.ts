export type Crop={
    id:number;
        name:string;
        purchasePrice:number;
        marketPrice:number;
        totalYield:number;
        attentionRange:number;
        growthDurationInMonths:number;
};

export type Customer={
    id?:number;
        name:string;
        address:string;
        email:string;
        cropPreference:Crop[];   
}