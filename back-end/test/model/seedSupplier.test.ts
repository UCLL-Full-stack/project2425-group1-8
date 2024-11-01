import { Crop } from "../../model/crop";
import { SeedSupplier } from "../../model/seedSuplier";

//given
const crop1=new Crop({name:"maize",purchasePrice:10,marketPrice:40,totalYield:200,attentionRange:3,growthDurationInMonths:15})

const name="Alfaraj";
const address="Hassrode 14";
const email="alfaraj123@gmail.com";
const seedType=crop1;
test("given: Valid fields when: Creating seedSupplier then: A seedSuplier is created with those fields ",()=>{
    //when
    const seedSuplier=new SeedSupplier({
        name,
        address,
        email,
        seedType
    });
    //then
    expect(seedSuplier.getName()).toEqual(name);
    expect(seedSuplier.getAddress()).toEqual(address);
    expect(seedSuplier.getEmail()).toEqual(email);
    expect(seedSuplier.getSeedType()).toEqual(seedType);
})