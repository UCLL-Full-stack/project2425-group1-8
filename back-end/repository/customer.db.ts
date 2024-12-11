import { Prisma } from "@prisma/client";
import { Crop } from "../model/crop";
import { Customer } from "../model/customer"
import { CustomerInput, Role } from "../types";
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
const role='customer'
// const customers=[
//     new Customer({
//         id:1,
//         name:"Alex",
//         address:"Hassrode",
//         email:"alex123@gmail.com",
//         cropPreference:[crop1],
//         role
//     }),
//     new Customer({
//         id:2,
//         name:"Alexis",
//         address:"Ghent",
//         email:"alexis123@gmail.com",
//         cropPreference:[crop1,crop2],
//         role
//     })
// ];

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

// const findCustomerByEmail=(email:string):Customer|undefined=>{
//     return customers.find(customer=>customer.getEmail()===email);

// }


    
// };
const addCustomer = async (
   customer:CustomerInput
): Promise<Customer> => {
    try {
        // Prepare data for creating the customer
        const data: Prisma.CustomerCreateInput = {
            name: customer.name,
            password:customer.password,
            address: customer.address,
            email: customer.email,
            // role: {
            //     connect: { id: customer.roleId }, // Connect the existing role
            // },
            // ...(customer.cropPreference && {
            //     cropPreference: {
            //         connect: customer.cropPreference.map((id) => ({ id })),
            //     },
            // }),
        };

        // Create the customer
        const createdCustomer = await database.customer.create({ data });

        return Customer.from(createdCustomer); // Return the created customer
    } catch (error) {
        console.error('Error adding customer:', error);
        throw new Error('Failed to add customer to the database.');
    }
};

// const getCustomerByName=({name}:{name: string }):Customer | null=>{
//     return customers.find((customer)=>customer.getName()==name) || null;
// };
export default {getAllCustomers,/*findCustomerByEmail,getCustomerByName,*/addCustomer};





