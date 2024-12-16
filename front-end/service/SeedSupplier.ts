import { SeedSupplier } from "@/types";

const getAllSeedSuppliers = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL + "/seedSuppliers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
const addSeedSupplier= (seedSupplier:SeedSupplier)=>{
  try {
    const response = fetch(process.env.NEXT_PUBLIC_API_URL + "/seedSuppliers",{
      method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body: JSON.stringify(seedSupplier)
  })
  return response
  } catch (error) {
    console.error(error)
  }
}
  const SeedSupplierService={
    getAllSeedSuppliers,
    addSeedSupplier,
  }
export default SeedSupplierService;
  