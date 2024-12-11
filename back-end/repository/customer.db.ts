import { Prisma } from "@prisma/client";
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

const findCustomerByEmail=async({email}:{email:string}):Promise<Customer|null>=>{
    try{
        const customerPrisma=await database.customer.findUnique({
            where:{email}
        })
        return customerPrisma?Customer.from(customerPrisma):null;
    }catch(error){
        console.error(error);
        throw new Error('Database error. Check logs. ')
    }
}


    
// };
const addCustomer = async (
   customer:Customer
): Promise<Customer> => {
    try {
        // Prepare data for creating the customer
        const createdCustomer=await database.customer.create({
            data:{
                name: customer.getName(),
                password:customer.getPassword(),
                address: customer.getAddress(),
                email: customer.getEmail(),
                role:customer.getRole()

            }
        })
            // role: {
            //     connect: { id: customer.roleId }, // Connect the existing role
            // },
            // ...(customer.cropPreference && {
            //     cropPreference: {
            //         connect: customer.cropPreference.map((id) => ({ id })),
            //     },
            // }),

        return Customer.from(createdCustomer); // Return the created customer
    } catch (error) {
        console.error('Error adding customer:', error);
        throw new Error('Failed to add customer to the database.');
    }
};

const getCustomerByName=async({name}:{name: string }):Promise<Customer | null>=>{
    try{
        const customerPrisma=await database.customer.findFirst({
            where:{name}
        })
        return customerPrisma?Customer.from(customerPrisma):null;
    }catch(error){
        console.error(error);
        throw new Error('database error. check logs')
    }
};


export default {getAllCustomers,findCustomerByEmail,getCustomerByName,addCustomer};





