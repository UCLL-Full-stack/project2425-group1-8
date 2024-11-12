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
        address:"Genk",
        email:"fletcher123@gmail.com",
        seedType:crop
    }),
    new SeedSupplier({
        name:"Fletcheris",
        address:"Luik",
        email:"fletcheris123@gmail.com",
        seedType:crop
    })
];

let mockSeedSupplierDbGetAllSeedSuppliers:jest.SpyInstance<Promise<SeedSupplier[]>,[],any >;

beforeEach(()=>{
    mockSeedSupplierDbGetAllSeedSuppliers=jest.spyOn(seedSupplierDb,'getAllseedSuppliers');
});

afterEach(()=>{
    jest.clearAllMocks();
})

test('given valid SeedSupplier fields, when getting SeedSuppliers,then all SeedSuppliers are returned',async()=>{
    //given
    mockSeedSupplierDbGetAllSeedSuppliers.mockResolvedValue(seedSupliers);
    //when
    const returnedSeedSuppliers=await seedSupplierService.getAllseedSuppliers();
    //then
    expect(mockSeedSupplierDbGetAllSeedSuppliers).toHaveBeenCalledTimes(1);
    expect(returnedSeedSuppliers).toEqual(seedSupliers);
})

