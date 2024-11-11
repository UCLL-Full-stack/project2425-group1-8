import { Crop } from "../../model/crop";
import cropDb from "../../repository/crop.db";
import cropService from "../../service/crop.service";

const crops=[
    new Crop({name:"maize",
           purchasePrice:10,
            marketPrice:40,
            totalYield:200,
           attentionRange:3,
           growthDurationInMonths:15}),
        
           new Crop({name:"Barley",
            purchasePrice:15,
             marketPrice:45,
             totalYield:205,
            attentionRange:4,
            growthDurationInMonths:9}),
]

let mockcropDbGetAllCrops:jest.SpyInstance<Promise<Crop[]>,[],any>;

beforeEach(()=>{
    mockcropDbGetAllCrops=jest.spyOn(cropDb,'getAllCrops');
});

afterEach(()=>{
    jest.clearAllMocks();
});
test('given valid crops , when:getting all crops, then:all crops are returned',async ()=>{
    //given
    mockcropDbGetAllCrops.mockResolvedValue(crops);

    //when
    const allCrops=await cropService.getAllCrops();

    //then
    expect(mockcropDbGetAllCrops).toHaveBeenCalledTimes(1);
    expect(allCrops).toEqual(crops);
})
