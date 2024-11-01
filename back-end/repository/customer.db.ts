import { Customer } from "../model/customer"

const customers=[
    new Customer({
        name:"Alex",
        address:"Hassrode",
        email:"alex123@gmail.com",
        cropPreference:[]
    }),
    new Customer({
        name:"Alexis",
        address:"Ghent",
        email:"alexis123@gmail.com",
        cropPreference:[]
    })
];

const getAllCustomers=():Customer[]=>{
    return customers;
};

const getCustomerByName=({name}:{name: string }):Customer | null=>{
    return customers.find((customer)=>customer.getName()==name) || null;
};

export default {
    getAllCustomers,
    getCustomerByName
};



