import { Crop } from "./crop";
import {
    SeedSupplier as SeedSupplierPrisma,
    Crop as CropPrisma,
} from '@prisma/client'
export class SeedSupplier{
    private id?: number;
    private readonly name:string;
    private readonly address:string;
    private readonly email:string;
    private readonly seedType:Crop;

    constructor(seedSupplier:{
        id?: number;
        name:string;
        address:string;
        email:string;
        seedType:Crop;
    }){
        this.validate(seedSupplier);
        this.id=seedSupplier.id;
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
    validate(seedSupplier:{name:string;address:string;email:string;seedType:Crop}){
        if(!seedSupplier.name ){
            throw new Error('Name cannot be null');
        }
        if(!seedSupplier.address ){
            throw new Error('Address cannot be null');
        }
        if(!seedSupplier.email ){
            throw new Error('Email cannot be null');
        }
        if(!seedSupplier.seedType){
            throw new Error('SeedType cannot be null');
        }
    }

    static from({
        id,
        name,
        address,
        email,
        seedType
    }:SeedSupplierPrisma & {seedType:CropPrisma}){
        return new SeedSupplier({
            id,
            name,
            address,
            email,
            seedType:Crop.from(seedType)
        });
    }
}