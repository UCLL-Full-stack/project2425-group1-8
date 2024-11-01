import { Customer } from "../model/customer";
import customerDb from "../repository/customer.db"

const getAllCustomers=async():Promise<Customer[]> =>{
    return customerDb.getAllCustomers();
}

const getCustomerByName=(name:string):Customer=>{
const customer=customerDb.getCustomerByName({name});
if(!customer) throw new Error(`customer with name ${name}does not exist.`);
return customer;
};
export default {
    getAllCustomers,
    getCustomerByName

};