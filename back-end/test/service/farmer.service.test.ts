import { Farmer } from "../../model/farmer";
import farmerDb from "../../repository/farmer.db";
import farmerService from "../../service/farmer.service";

const farmer = new Farmer({
    name: "Yusuf Doe",
    email: "yusufdoe@gmail.com",
    farmingPractice: "agroforestry",
    farmSizeInHectares: 200,
});

let mockfarmerDbGetFarmer: jest.SpyInstance<Promise<Farmer>, [string], any>;

beforeEach(() => {
    mockfarmerDbGetFarmer = jest.spyOn(farmerDb, "getFarmer");
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
