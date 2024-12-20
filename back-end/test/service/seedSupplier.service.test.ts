import { Crop } from "../../model/crop";
import { SeedSupplier } from "../../model/seedSuplier";
import seedSupplierDb from "../../repository/seedSupplier.db";
import seedSupplierService from "../../service/seedSupplier.service";
import { CropInput } from "../../types";


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

const seedSupliers:SeedSupplier[]= [
    new SeedSupplier({
        name:"Fletcher",
        password:"flitcher123",
        address:"Genk",
        email:"fletcher123@gmail.com",
        seedType:crop,
        role:"seedSupplier"
    }),
    new SeedSupplier({
        name:"Fletcheris",
        password:"fletchers123",
        address:"Luik",
        email:"fletcheris123@gmail.com",
        seedType:crop,
        role:"seedsupplier"
    })
];

// let mockSeedSupplierDbGetAllSeedSuppliers:jest.SpyInstance<Promise<SeedSupplier[]>,[],any >;
// let mockSeedSuppliers:jest.Mock;
const    mockSeedSuppliers=jest.fn()

beforeEach(()=>{
   seedSupplierDb.getAllseedSuppliers=mockSeedSuppliers;
   mockSeedSuppliers.mockResolvedValue(seedSupliers)
    // mockSeedSupplierDbGetAllSeedSuppliers=jest.spyOn(seedSupplierDb,'getAllseedSuppliers');
});

afterEach(()=>{
    jest.clearAllMocks();
})

test('given valid SeedSupplier fields, when getting SeedSuppliers,then all SeedSuppliers are returned',async()=>{
    //given
    mockSeedSuppliers.mockResolvedValue(seedSupliers);
    //when
    const returnedSeedSuppliers=await seedSupplierService.getAllseedSuppliers();
    //then
    expect(mockSeedSuppliers).toHaveBeenCalledTimes(1);
    expect(returnedSeedSuppliers).toEqual(seedSupliers);
})

