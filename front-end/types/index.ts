// export type Role='farmer'|'customer'|'seedSupplier';

export type Crop={
    id?:number;
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
        password:string;
        address:string;
        email:string;
        cropPreference?:Crop[]; 
        role:string;  
}

export type SeedSupplier={
    id?:number;
    name:string;
    password:string;
    address:string;
    email:string;
    seedType:Crop;
    role:string;
};

export type Farmer={
    id?:number;
    name:string;
    password:string;
    age:number;
    email:string
    farmingPractice:string;
    farmSizeInHectares:number;
    role:string;
};


export type StatusMessage = {
    message: string;
    type: "error" | "success";
};