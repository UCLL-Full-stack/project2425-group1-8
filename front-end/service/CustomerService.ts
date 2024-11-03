const getAllCustomers=async()=>{
    return fetch(process.env.NEXT_PUBLIC_API_URL +"/customers",{
        method:"GET",
        headers:{
            "content-Type":"application/json",
        }
    });
};

const CustomerService ={
    getAllCustomers
};

export default CustomerService;