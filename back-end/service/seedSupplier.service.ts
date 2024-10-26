import { SeedSupplier } from "../model/seedSuplier";
import seedSupplierDb from "../repository/seedSupplier.db";

const getAllseedSuppliers=async():Promise<SeedSupplier[]>=>{
    return seedSupplierDb.getAllseedSuppliers();
}

export default {getAllseedSuppliers};