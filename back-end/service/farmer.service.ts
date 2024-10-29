import { Farmer } from "../model/farmer";
import farmerDb from "../repository/farmer.db";

const getFarmer=():Farmer=>{
    return farmerDb.getFarmer();
}

export default{getFarmer};
