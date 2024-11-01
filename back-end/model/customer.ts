import { Crop } from "./crop";
import validator from 'validator';

export class Customer{
    private readonly name:string;
    private readonly address:string;
    private readonly email:string;
    private readonly cropPreference:Array<Crop>;


    constructor(customer:{
        name:string;
        address:string;
        email:string;
        cropPreference:Array<Crop>;
    }){
        this.validate(customer);

        this.name=customer.name;
        this.address=customer.address;
        this.email=customer.email;
        this.cropPreference=customer.cropPreference;
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

    getCropPreference():Array<Crop>{
        return this.cropPreference;
    }

    validate(customer:{name:string;address:string;email:string;}){
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
    }
}