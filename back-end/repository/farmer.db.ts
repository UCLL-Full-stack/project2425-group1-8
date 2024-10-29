import { Farmer } from "../model/farmer";

const farmer=new Farmer(  { 
    name:"Yusuf Doe",
    email:"yusufdoe@gmail.com",
    farmingPractice:"agroforestry",
    farmSize:200})

    const getFarmer=():Farmer=>{
        return farmer;
    }

export default{getFarmer};