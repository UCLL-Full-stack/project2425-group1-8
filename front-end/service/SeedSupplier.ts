const getAllSeedSuppliers = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL + "/seedSuppliers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const SeedSupplierService={
    getAllSeedSuppliers
  }
export default SeedSupplierService;
  