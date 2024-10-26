import { Resource } from "../../model/resource";

//given
const name="BKL tractor";
const manufacturer="manufact";
const service_duration=12;
const service_start_date=new Date(12/2/2024);

test('given: valid fields when: resource is created then: resourse is created with those fields',()=>{
//when
    const resource=new Resource({
        name,
        manufacturer,
        service_duration,
        service_start_date
    });
    //then
    expect(resource.getName()).toEqual(name);
    expect(resource.getManufacturer()).toEqual(manufacturer);
    expect(resource.getServiceDuration()).toEqual(service_duration);
    expect(resource.getServiceStartDate()).toEqual(service_start_date)
})