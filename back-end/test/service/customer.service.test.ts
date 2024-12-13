import { Crop } from "../../model/crop";
import { Customer } from "../../model/customer";
import customerDb from "../../repository/customer.db";
import customerService from "../../service/customer.service";
import { CustomerInput,CropInput } from "../../types";


const cropInput: CropInput={
    id:1,
    name:"maize",
    purchasePrice:10,
    marketPrice:40,
    totalYield:200,
    attentionRange:3,
    growthDurationInMonths:15
}
const crop=new Crop({
    ...cropInput
})
const name="Lexis"
const address="Asphat"
const email="lex123@gmail.com"

const customers:Customer[]= [
    new Customer({
        name:"Alex",
        address:"Hassrode",
        password:"alexman123",
        email:"alex123@gmail.com",
        role:"customer",
        cropPreference:[crop]
    }),
    new Customer({
        name:"Alexis",
        password:"alexis123",
        address:"Ghent",
        email:"alexis123@gmail.com",
        role:"customer",
        cropPreference:[]
    })
];

let mockCustomerDbGetAllCustomers:jest.SpyInstance<Promise<Customer[]>, [], any>;


beforeEach(()=>{
    mockCustomerDbGetAllCustomers=jest.spyOn(customerDb,'getAllCustomers');
});

afterEach(()=>{
    jest.clearAllMocks();
})

test('given valid customer fields, when getting customers,then all customers are returned',async()=>{
    //given
    mockCustomerDbGetAllCustomers.mockResolvedValue(customers);
    //when
    const returnedCustomers=await customerService.getAllCustomers();
    //then
    expect(mockCustomerDbGetAllCustomers).toHaveBeenCalledTimes(1);
    expect(returnedCustomers).toEqual(customers);
})

