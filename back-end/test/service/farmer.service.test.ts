import { Farmer } from "../../model/farmer";
import farmerDb from "../../repository/farmer.db";
import farmerService from "../../service/farmer.service";

const farmer = new Farmer({
    name: "Yusuf Doe",
    password:"yusuf123",
    email: "yusufdoe@gmail.com",
    farmingPractice: "agroforestry",
    farmSizeInHectares: 200,
    role:"farmer"
});

// let mockfarmerDbGetFarmer: jest.SpyInstance<Promise<Farmer>, [string], any>;
// let mockfarmerDbGetFarmer:jest.Mock;
const  mockfarmerDbGetFarmer=jest.fn();
beforeEach(() => {
    // mockfarmerDbGetFarmer = jest.spyOn(farmerDb, "getFarmer");
    // mockfarmerDbGetFarmer=jest.fn();
    farmerDb.getFarmer=mockfarmerDbGetFarmer;
    mockfarmerDbGetFarmer.mockResolvedValue(farmer)
});

afterEach(() => {
    jest.clearAllMocks();
});

test("given a farmer, when asking for a logged-in farmer by email, then a farmer is returned", async () => {
    mockfarmerDbGetFarmer.mockResolvedValue(farmer);
    const email = "yusufdoe@gmail.com";

    const loggedinFarmer = await farmerService.getFarmer(email);

    expect(mockfarmerDbGetFarmer).toHaveBeenCalledTimes(1);
    expect(mockfarmerDbGetFarmer).toHaveBeenCalledWith(email);
    expect(loggedinFarmer).toEqual(farmer);
});
