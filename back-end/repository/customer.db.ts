import { Crop } from "../model/crop";
import { Customer } from "../model/customer"
import database from "./database";

const crop1=new Crop({
    id:1,
    name:"maize",
    purchasePrice:10,
    marketPrice:40,
    totalYield:200,
    attentionRange:3,
    growthDurationInMonths:15});
const crop2=new  Crop({
        id:2,
        name:"Barley",
        purchasePrice:15,
         marketPrice:45,
         totalYield:205,
        attentionRange:4,
        growthDurationInMonths:9});

const customers=[
    new Customer({
        id:1,
        name:"Alex",
        address:"Hassrode",
        email:"alex123@gmail.com",
        cropPreference:[crop1]
    }),
    new Customer({
        id:2,
        name:"Alexis",
        address:"Ghent",
        email:"alexis123@gmail.com",
        cropPreference:[crop1,crop2]
    })
];

const getAllCustomers=async():Promise<Customer[]>=>{
    try{
        const customerPrisma = await database.customer.findMany({
            include: {cropPreference:true}
        })
        return customerPrisma.map((customerPrisma)=> Customer.from(customerPrisma))
    }catch (error){
        console.error(error);
        throw new Error('Database error.')
    }
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





