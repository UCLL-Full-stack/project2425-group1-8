import validator from 'validator';

export class Farmer{
    private readonly name:string;
    // private readonly age:number;
    private readonly email:string;
    private readonly farmingPractice:string;
    private readonly farmSizeInHectares:number;

    constructor (farmer:{
        name:string;
        // age:number;
        email:string
        farmingPractice:string;
        farmSizeInHectares:number;
    }){
        this.name=farmer.name;
        // this.age=farmer.age;
        this.email=farmer.email;
        this.farmingPractice=farmer.farmingPractice;
        this.farmSizeInHectares=farmer.farmSizeInHectares;
        this.validate(farmer);
      
    }

    validate(farmer:{name:string;email:string;farmingPractice:string;farmSizeInHectares:number;
    }){
        if(!farmer.name){
            throw new Error('name must be provided');
        }
        if(!validator.isEmail(farmer.email)){
            throw new Error('invalid email provided!')
        }
        if(farmer.farmSizeInHectares<0){
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
    
    
    


}