import { Resource } from "../model/resource";
import ResourcesDb from "../repository/resource.db"

const getAllResources=async():Promise<Resource[]> =>{
    return ResourcesDb.getAllResources();
}
export default {getAllResources};