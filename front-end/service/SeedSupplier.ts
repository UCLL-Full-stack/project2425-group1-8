import { SeedSupplier } from "@/types";

const getAllSeedSuppliers = () => {
  const token=localStorage.getItem("loggedInUser")? JSON.parse(localStorage.getItem("loggedInUser")|| "{}")?.token:null;
    return fetch(process.env.NEXT_PUBLIC_API_URL + "/seedSuppliers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization":`Bearer ${token}`

      },
    });
  };
const addSeedSupplier= (seedSupplier:SeedSupplier)=>{
  try {
    const token=localStorage.getItem("loggedInUser")? JSON.parse(localStorage.getItem("loggedInUser")|| "{}")?.token:null;

    const response = fetch(process.env.NEXT_PUBLIC_API_URL + "/seedSuppliers",{
      method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`

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
  