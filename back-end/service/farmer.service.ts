import { Farmer } from "../model/farmer";
import farmerDb from "../repository/farmer.db";

const getFarmer=async(email:string):Promise <Farmer>=> farmerDb.getFarmer(email)

export default{getFarmer};
