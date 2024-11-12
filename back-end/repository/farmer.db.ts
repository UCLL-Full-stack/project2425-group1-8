import { Farmer } from "../model/farmer";
import database from "./database";



    const getFarmer=async(email:string):Promise <Farmer>=>{
        try{
            const farmerPrisma=await database.farmer.findUnique({
                where: {email: email},
            });

            if (!farmerPrisma){
                throw new Error('farmer not found');
            }

            return Farmer.from(farmerPrisma);
        }catch(error){
            console.error(error);
            throw new Error('Database error. see server log for details');
        }
    
    };

export default{getFarmer};