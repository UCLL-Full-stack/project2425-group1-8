type Role='farmer'|'customer'|'seedSupplier';
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
        age:number;
        email:string
        farmingPractice:string;
        farmSizeInHectares:number;
        role:Role;
        // user:UserInput;

};

type CustomerInput={
        id?:number;
        name:string;
        password:string;
        address:string;
        email:string;
        cropPreference?:CropInput[]; 
        role?:Role;  
        // user:UserInput;

};

type SeedSupplierInput={
        id?:number;
        name:string;
        address:string;
        email:string;
        seedType:CropInput[];
        role:Role;
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
    Role,
    CropInput,
    FarmerInput,
    SeedSupplierInput,
    ResourceInput,
    CustomerInput,
    AuthenticationResponse

};

