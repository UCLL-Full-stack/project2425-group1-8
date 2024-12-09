const getAllResources = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL + "/resources", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const ResourceService={
    getAllResources
  }
export default ResourceService;
  