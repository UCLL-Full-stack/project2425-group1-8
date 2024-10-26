import { Customer } from "../model/customer";
import customerDb from "../repository/customer.db"

const getAllCustomers=async():Promise<Customer[]> =>{
    return customerDb.getAllCustomers();
}
export default {getAllCustomers};