import validator from 'validator';

export class Farmer{
    private readonly name:string;
    // private readonly age:number;
    private readonly email:string;
    private readonly farmingPractice:string;
    private readonly farmSize:number;

    constructor (farmer:{
        name:string;
        // age:number;
        email:string
        farmingPractice:string;
        farmSize:number;
    }){
        this.name=farmer.name;
        // this.age=farmer.age;
        this.email=farmer.email;
        this.farmingPractice=farmer.farmingPractice;
        this.farmSize=farmer.farmSize;
        this.validate(farmer);
      
    }

    validate(farmer:{name:string;email:string;farmingPractice:string;farmSize:number;
    }){
        if(!farmer.name){
            throw new Error('name must be provided');
        }
        if(!validator.isEmail(farmer.email)){
            throw new Error('invalid email provided!')
        }
        if(farmer.farmSize<0){
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
    getfarmSize():number{
        return this.farmSize;
    }
    
    
    


}