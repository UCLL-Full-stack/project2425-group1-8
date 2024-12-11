import { Customer } from "../model/customer";
import customerDb from "../repository/customer.db";
import { CustomerInput } from "../types";
import { Role } from "../types";
import { Crop } from "../model/crop";
import cropService from "./crop.service";
import cropDb from "../repository/crop.db";

const getAllCustomers = async (): Promise<Customer[]> => {
    return customerDb.getAllCustomers();
}

const addCustomer = ({
    name,
    password,
    address,
    email, 
}: CustomerInput): Promise<Customer> => {
    const existingCustomer = customerDb.findCustomerByEmail(email);

    if (existingCustomer) {
        throw new Error('This customer already exists in the database.');
    }else{
        const createdCustomer=customerDb.addCustomer({ name,password, address, email});
return createdCustomer    }

    // const givenCrops: Crop[] = [];

    // {for(const crop of cropPreference){
    //     let existingCrop=cropDb.findCropByName(crop.name);

    //     if(!existingCrop){
    //         existingCrop=cropService.addCrop(crop);
    //     }

    //     givenCrops.push(existingCrop);
    // }
    
    // const role='customer'

    

   
 
}
const getCustomerByName=(name:string):Customer=>{
const customer=customerDb.getCustomerByName({name});
if(!customer) throw new Error(`customer with name ${name}does not exist.`);
return customer;
};
export default { getAllCustomers, addCustomer ,getCustomerByName};
