// type Role='farmer'|'customer';

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
        // yield:number;
        attentionRange:number;
        growthDuration:number;
};

type FarmerInput={
        id?:number;
        name:string;
        age:number;
        email:string
        farmingPractice:string;
        farmSize:number;
        // user:UserInput;

};

type CustomerInput={
        id?:number;
        name:string;
        address:string;
        email:string;
        cropPreference:string;   
        // user:UserInput;

};

type SeedSupplierInput={
        id?:number;
        name:string;
        address:string;
        email:string;
        seedType:string;
};

type ResourceInput={
        id?:number;
        name:string;
        manufacturer:string;
        serviceDuration:number;
        serviceStartDate:Date;
};

// type AuthenticationResponse={
//     token:string;
//     username:string;
//     name:string;
//     role:string;
// };

export{
    // Role,
    CropInput,
    FarmerInput,
    SeedSupplierInput,
    ResourceInput,
    CustomerInput,
    // AuthenticationResponse

};

