import { Crop } from "../../model/crop"
import { Customer } from "../../model/customer"

// given
const crop1=new Crop({name:"maize",purchasePrice:10,marketPrice:40,totalYield:200,attentionRange:3,growthDurationInMonths:15
})

const name="Alex"
const address="Hassrode"
const email="alex123@gmail.com"
const password='alex123'
const cropPreference=[crop1]
test("given: Valid Fields When: Creating Customer then: A Customer Is Created With Those Fields",()=>{
//when
const role='customer'
const customer=new Customer({
    name,
    password,
    address,
    email,
    cropPreference,
    role
});
//then
expect(customer.getName()).toEqual(name);
expect(customer.getAddress()).toEqual(address);
expect(customer.getEmail()).toEqual(email);
expect(customer.getCropPreference()).toContain(crop1);

});