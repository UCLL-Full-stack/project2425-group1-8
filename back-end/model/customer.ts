import { Crop } from "./crop";
import validator from 'validator';
import { 
    Crop as CropPrisma,
    Customer as CustomerPrisma
 } from '@prisma/client';
import { UUID } from "crypto";
export class Customer{
     readonly id?:number;
     readonly name:string;
     readonly address:string;
     readonly password:string;
     readonly email:string;
     readonly cropPreference?:Array<Crop>;
      readonly role: string;
    //   readonly roleId?:number;


    constructor(customer:{
        id?:number;
        name:string;
        password:string;
        address:string;
        email:string;
        cropPreference?:Array<Crop>;
        role: string;
        // roleId?:number

    }){
        this.validate(customer);
        this.id=customer.id;
        this.name=customer.name;
        this.address=customer.address;
        this.password=customer.password;
        this.email=customer.email;
        this.cropPreference=customer.cropPreference;
        this.role = customer.role;

    }
    getId():number|undefined{
        return this.id;
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
    getPassword():string{
        return this.password
    }

    getCropPreference():Array<Crop>|undefined{
        return this.cropPreference;
    }
    getRole():string{
        return this.role;
    }
    // getRoleId():number|undefined{
    //     return this.roleId
    // }

    validate(customer:{name:string;address:string;email:string;role:string}){
        if(!customer.name){
            throw new Error('Name cannot be null');
        }
        if(!customer.address ){
            throw new Error('Address cannot be null');
        }
        if(!customer.email ){
            throw new Error('Email cannot be null');
        }
        if(!validator.isEmail(customer.email)){
            throw new Error('Email format is invalid');
        }
        if(!customer.role){
            throw new Error('role cannot be null')
        }
    }

    static from({
        id,
        name,
        password,
        address,
        email,
        cropPreference,
        // roleId,
        role 
    }:CustomerPrisma & {cropPreference?:CropPrisma[]; role:string}){
        return new Customer({
            id,
            name,
            password,
            address,
            email,
            cropPreference:cropPreference?.map((cp)=>Crop.from(cp)),
            role
            // role:role as Role
            
        })

   }
}