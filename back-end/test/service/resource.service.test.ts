import { Resource } from "../../model/resource";
import resourceDb from "../../repository/resource.db";
import resourceService from "../../service/resource.service";

const resources:Resource[]= [
    new Resource({
        name:"BKL tractor",
        manufacturer:"manufact",
        service_duration:12,
        service_start_date:new Date(12/2/2024)
    }),
    new Resource({
        name:"Bow rake",
        manufacturer:"AgriExpo",
        service_duration:2,
        service_start_date:new Date(12/10/2024)
    }),
];
// let mockResourceDbGetAllResources:jest.Mock;
// let mockResourceDbGetAllResources:jest.SpyInstance<Resource[],[],any >;
const mockResourceDbGetAllResources=jest.fn();

beforeEach(()=>{
    // mockResourceDbGetAllResources=jest.spyOn(resourceDb,'getAllResources');
    // mockResourceDbGetAllResources=jest.fn();
    resourceDb.getAllResources=mockResourceDbGetAllResources;
    mockResourceDbGetAllResources.mockResolvedValue(resources)
});

afterEach(()=>{
    jest.clearAllMocks();
})

test('given valid customer fields, when getting customers,then all customers are returned',async()=>{
    //given
    mockResourceDbGetAllResources.mockReturnValue(resources);
    //when
    const returnedresources=await resourceService.getAllResources();
    //then
    expect(mockResourceDbGetAllResources).toHaveBeenCalledTimes(1);
    expect(returnedresources).toEqual(resources);
})

