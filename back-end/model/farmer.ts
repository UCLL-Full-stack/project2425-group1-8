import validator from 'validator';
import {Farmer as FarmerPrisma
}from '@prisma/client';
import { Role } from '../types';
export class Farmer{
    private id?: number;
    private readonly name:string;
    // private readonly age:number;
    private readonly email:string;
    private readonly farmingPractice:string;
    private readonly farmSizeInHectares:number;
    private  readonly role?: Role;

    constructor (farmer:{
        id?: number;
        name:string;
        // age:number;
        email:string
        farmingPractice:string;
        farmSizeInHectares:number;
        role: Role;

    }){
        this.id=farmer.id;
        this.name=farmer.name;
        // this.age=farmer.age;
        this.email=farmer.email;
        this.farmingPractice=farmer.farmingPractice;
        this.farmSizeInHectares=farmer.farmSizeInHectares;
        this.role = farmer.role;

        this.validate(farmer);
      
    }

    validate(farmer:{name:string;email:string;farmingPractice:string;farmSizeInHectares:number;role:Role
    }){
        if(!farmer.name){
            throw new Error('name must be provided');
        }
        if(!validator.isEmail(farmer.email)){
            throw new Error('invalid email provided!')
        }
        if(farmer.farmSizeInHectares < 0){
            throw new Error('farm size can not be negative!!')
        }
    }

    getName():string{
        return this.name;
    }
    // getAge():number{
    //     return this.age;
    // }
    getEmail():string{
        return this.email;
    }
    getFarmingPractice():string{
        return this.farmingPractice;
    }
    getfarmSizeInHectares():number{
        return this.farmSizeInHectares;
    }
    getRole():Role|undefined{
        return this.role
    }
    
    static from({
        id,                      
        name,                      
        email,                     
        farmingPractice,         
        farmSizeInHectares,
        roleId,
        role      
    }:FarmerPrisma& {role?:Role}){
        return new Farmer({
            id,                      
            name,                      
            email,                     
            farmingPractice,         
            farmSizeInHectares,
            role:role as Role

        })
    }
    


}