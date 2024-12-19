// type Role='farmer'|'customer'|'seedSupplier';
// type UserInput={
//     id?:number;
//     username:string;
//     password:string;
//     name:string;
//     email:string;
//     role:Role;
// };

type CropInput={
        id?:number;
        name:string;
        purchasePrice:number;
        marketPrice:number;
        totalYield:number;
        attentionRange:number;
        growthDurationInMonths:number;
};

type FarmerInput={
        id?:number;
        name:string;
        password:string;
        age:number;
        email:string
        farmingPractice:string;
        farmSizeInHectares:number;
        role:string;
        // user:UserInput;

};

type CustomerInput={
        id?:number;
        name:string;
        password:string;
        email:string;
        address:string;
        cropPreference?:CropInput[]; 
        role:string;  
        // user:UserInput;

};

type SeedSupplierInput={
        id?:number;
        name:string;
        password:string;
        address:string;
        email:string;
        seedType:CropInput;
        role:string;
};

type ResourceInput={
        id?:number;
        name:string;
        manufacturer:string;
        serviceDuration:number;
        serviceStartDate:Date;
};

type AuthenticationResponse={
    token:string;
    name:string;
    role:string;
};

export{
    CropInput,
    FarmerInput,
    SeedSupplierInput,
    ResourceInput,
    CustomerInput,
    AuthenticationResponse

};

