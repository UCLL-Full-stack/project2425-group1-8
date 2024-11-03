import { Crop } from "../model/crop";
import { Customer } from "../model/customer"

const crop1=new Crop({name:"maize",purchasePrice:10,marketPrice:40,totalYield:200,attentionRange:3,growthDurationInMonths:15});
const crop2=new  Crop({
        name:"Barley",
        purchasePrice:15,
         marketPrice:45,
         totalYield:205,
        attentionRange:4,
        growthDurationInMonths:9});

const customers=[
    new Customer({
        name:"Alex",
        address:"Hassrode",
        email:"alex123@gmail.com",
        cropPreference:[crop1]
    }),
    new Customer({
        name:"Alexis",
        address:"Ghent",
        email:"alexis123@gmail.com",
        cropPreference:[crop1,crop2]
    })
];

const getAllCustomers=():Customer[]=>{
    return customers;
};

const findCustomerByEmail=(email:string):Customer|undefined=>{
    return customers.find(customer=>customer.getEmail()===email);

}

const addCustomer = (customer:Customer):Customer=>{
    customers.push(customer);
    return customer;
}

const getCustomerByName=({name}:{name: string }):Customer | null=>{
    return customers.find((customer)=>customer.getName()==name) || null;
};
export default {getAllCustomers,findCustomerByEmail,addCustomer,getCustomerByName};





