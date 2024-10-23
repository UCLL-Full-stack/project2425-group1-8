import { Crop } from "./crop";

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
}