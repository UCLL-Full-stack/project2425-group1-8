import { Resource } from "../model/resource";
import database from "./database";



const getAllResources=async():Promise <Resource[]>=>{
    try {
        const resourcesPrisma=await database.resource.findMany();
        
    return resourcesPrisma.map((resourcePrisma)=> Resource.from(resourcePrisma)); 
    }catch (error) {
        console.error(error);
        throw new Error('Database error. see the server log for details')
    }
};

export default {getAllResources};



