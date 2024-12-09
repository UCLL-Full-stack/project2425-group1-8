type Role='farmer'|'customer'|'seedSupplier';

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
        role:Role;  
}

export type SeedSupplier={
    id?:number;
    name:string;
    address:string;
    email:string;
    seedType:Crop[];
    role:Role;
};


export type StatusMessage = {
    message: string;
    type: "error" | "success";
};