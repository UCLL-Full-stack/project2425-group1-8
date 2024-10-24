export class Farmer{
    private readonly id?:number;
    private readonly name:string;
    private readonly age:number;
    private readonly email:string;
    private readonly farmingPractice:string;
    private readonly farmSize:number;

    constructor (farmer:{
        id?:number;
        name:string;
        age:number;
        email:string
        farmingPractice:string;
        farmSize:number;
    }){
        this.id=farmer.id;
        this.name=farmer.name;
        this.age=farmer.age;
        this.email=farmer.email;
        this.farmingPractice=farmer.farmingPractice;
        this.farmSize=farmer.farmSize;
      
    }

    getId():number|undefined{
        return this.id;
    }
    getName():string{
        return this.name;
    }
    getAge():number{
        return this.age;
    }
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