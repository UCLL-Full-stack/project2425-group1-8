import { Resource } from "../model/resource";

const resources=[
    new Resource({
        name:"BKL tractor",
        manufacturer:"manufact",
        service_duration:12,
        service_start_date:new Date(12/2/2024)
    }),
    new Resource({
        name:"Bow rake",
        manufacturer:"AgriExpo",
        service_duration:2,
        service_start_date:new Date(12/10/2024)
    }),
    
];

const getAllResources=():Resource[]=>{
    return resources;
};

export default {getAllResources};



