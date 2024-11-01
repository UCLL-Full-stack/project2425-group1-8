import { Farmer } from "../model/farmer";

const farmer=new Farmer(  { 
    name:"Yusuf Doe",
    email:"yusufdoe@gmail.com",
    farmingPractice:"agroforestry",
    farmSizeInHectares:200})

    const getFarmer=():Farmer=>{
        return farmer;
    }

export default{getFarmer};