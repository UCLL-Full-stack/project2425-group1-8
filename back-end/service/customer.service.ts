import { Customer } from "../model/customer";
import customerDb from "../repository/customer.db";
import { CustomerInput } from "../types";
import bcrypt from 'bcrypt';

const getAllCustomers = async (): Promise<Customer[]> => {
    return customerDb.getAllCustomers();
}

const addCustomer =async ({
    name,
    password,
    address,
    email, 
    role
}: CustomerInput): Promise<Customer> => {
    const existingCustomer = customerDb.findCustomerByEmail({email});

    if (await existingCustomer) {
        throw new Error('This customer already exists in the database.');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const createdCustomer=new Customer({ name,password:hashedPassword, address, email,role});
    return createdCustomer  
  }

    // const givenCrops: Crop[] = [];

    // {for(const crop of cropPreference){
    //     let existingCrop=cropDb.findCropByName(crop.name);

    //     if(!existingCrop){
    //         existingCrop=cropService.addCrop(crop);
    //     }

    //     givenCrops.push(existingCrop);
    // }
    
    // const role='customer'

    

   
 

const getCustomerByName=async({name}:{name:string}):Promise<Customer>=>{
        const customer=await customerDb.getCustomerByName({name});
        if(!customer) throw new Error(`customer with name ${name}does not exist.`);
        return customer;
};
export default { getAllCustomers, addCustomer ,getCustomerByName};
