import validator from 'validator';
import {Farmer as FarmerPrisma
}from '@prisma/client';
import { th } from 'date-fns/locale';
export class Farmer{
    private id?: number;
    private readonly name:string;
    private readonly password:string;
    private readonly email:string;
    private readonly farmingPractice:string;
    private readonly farmSizeInHectares:number;
    private  readonly role: string;

    constructor (farmer:{
        id?: number;
        name:string;
        password:string;
        email:string
        farmingPractice:string;
        farmSizeInHectares:number;
        role: string;

    }){
        this.validate(farmer);
        this.id=farmer.id;
        this.name=farmer.name;
        this.password=farmer.password;
        this.email=farmer.email;
        this.farmingPractice=farmer.farmingPractice;
        this.farmSizeInHectares=farmer.farmSizeInHectares;
        this.role = farmer.role;

      
    }

    validate(farmer:{name:string;password:string;email:string;farmingPractice:string;farmSizeInHectares:number;role:string
    }){
        if(!farmer.name){
            throw new Error('name must be provided');
        }
        if(!farmer.password){
            throw new Error('name must be provided');
        }
        if(!validator.isEmail(farmer.email)){
            throw new Error('invalid email provided!')
        }
        if(farmer.farmSizeInHectares < 0){
            throw new Error('farm size can not be negative!!')
        }
        if(!farmer.role){
            throw new Error('role is required')
        }
    }

    getName():string{
        return this.name;
    }
    getPassword():string{
        return this.password;
    }
    getEmail():string{
        return this.email;
    }
    getFarmingPractice():string{
        return this.farmingPractice;
    }
    getfarmSizeInHectares():number{
        return this.farmSizeInHectares;
    }
    getRole():string{
        return this.role
    }
    
    static from({
        id,                      
        name,
        password,                      
        email,                     
        farmingPractice,         
        farmSizeInHectares,
        // roleId,
        role      
    }:FarmerPrisma ){
        return new Farmer({
            id,                      
            name, 
            password,                     
            email,                     
            farmingPractice,         
            farmSizeInHectares,
            role
            // role:role as Role

        })
    }
    


}