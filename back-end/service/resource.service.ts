import { Resource } from "../model/resource";
import ResourcesDb from "../repository/resource.db"

const getAllResources=async():Promise<Resource[]> => ResourcesDb.getAllResources();
export default {getAllResources};