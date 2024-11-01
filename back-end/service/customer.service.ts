import { Customer } from "../model/customer";
import customerDb from "../repository/customer.db";
import { CustomerInput } from "../types";
import { Crop } from "../model/crop";
import cropService from "./crop.service";
import cropDb from "../repository/crop.db";

const getAllCustomers = async (): Promise<Customer[]> => {
    return customerDb.getAllCustomers();
}

const addCustomer = ({
    name,
    address,
    email,
    cropPreference
}: CustomerInput): Customer => {
    const existingCustomer = customerDb.findCustomerByEmail(email);

    if (existingCustomer) {
        throw new Error('This customer already exists in the database.');
    }

    const givenCrops: Crop[] = [];

    for(const crop of cropPreference){
        let existingCrop=cropDb.findCropByName(crop.name);

        if(!existingCrop){
            existingCrop=cropService.addCrop(crop);
        }

        givenCrops.push(existingCrop);
    }

    const customer = new Customer({ name, address, email, cropPreference: givenCrops });

    return customerDb.addCustomer(customer);
}

export default { getAllCustomers, addCustomer };
