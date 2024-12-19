import { Crop } from "./crop";
import {
    SeedSupplier as SeedSupplierPrisma,
    Crop as CropPrisma,
} from '@prisma/client'
export class SeedSupplier{
     id?: number;
     readonly name:string;
     readonly address:string;
     readonly password:string;
     readonly email:string;
     readonly seedType:Crop;
    readonly role: string;

    constructor(seedSupplier:{
        id?: number;
        name:string;
        password:string;
        address:string;
        email:string;
        seedType:Crop;
        role: string;

    }){
        this.validate(seedSupplier);
        this.id=seedSupplier.id;
        this.name=seedSupplier.name;
        this.password=seedSupplier.password;
        this.address=seedSupplier.address;
        this.email=seedSupplier.email;
        this.seedType=seedSupplier.seedType;
        this.role = seedSupplier.role;

    }

    getName():string{
        return this.name;
    }
    getPassword():string{
        return this.password;
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
    getRole():string{
        return this.role
    }
    validate(seedSupplier:{name:string; password:string;address:string;email:string;seedType:Crop,role:string}){
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
        if(!seedSupplier.role){
            throw new Error('role is required')
        }
        if(!seedSupplier.password){
            throw new Error('password is required')
        }
    }

    static from({
        id,
        name,
        password,
        address,
        email,
        seedType,
        // roleId,
        role
    }:SeedSupplierPrisma & {seedType:CropPrisma; role:string}){
        return new SeedSupplier({
            id,
            name,
            password,
            address,
            email,
            seedType:Crop.from(seedType),
            role
            // role:role as Role
            
        });
    }
}