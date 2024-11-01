import { Farmer } from "../../model/farmer";
import farmerDb from "../../repository/farmer.db";
import farmerService from "../../service/farmer.service";

const farmer=new Farmer(  { 
    name:"Yusuf Doe",
    email:"yusufdoe@gmail.com",
    farmingPractice:"agroforestry",
    farmSizeInHectares:200})


let mockfarmerDbGetFarmer:jest.SpyInstance<Farmer,[],any>;

beforeEach(()=>{
    mockfarmerDbGetFarmer=jest.spyOn(farmerDb,'getFarmer');
});


afterEach(()=>{
    jest.clearAllMocks();
});

test('given:a farmer, when:asking for a logged in farmer then a farmer is returned',async ()=>{
    //given
    mockfarmerDbGetFarmer.mockReturnValue(farmer);

    //when
    const loggedinFarmer=await farmerService.getFarmer();

    //then 
    expect(mockfarmerDbGetFarmer).toHaveBeenCalledTimes(1);
    expect(loggedinFarmer).toEqual(farmer);
})