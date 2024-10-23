import { Crop } from "./crop";

export class SeedSupplier{
    private readonly name:string;
    private readonly address:string;
    private readonly email:string;
    private readonly seedType:Crop;

    constructor(seedSupplier:{
        name:string;
        address:string;
        email:string;
        seedType:Crop;
    }){
        this.name=seedSupplier.name;
        this.address=seedSupplier.address;
        this.email=seedSupplier.email;
        this.seedType=seedSupplier.seedType;
    }

    getName():string{
        return this.name;
    }

    getAddress():string{
        return this.address;
    }

    getEmail():string{
        return this.email;
    }

    getSeedType():Crop{
        return this.seedType;
    }
}