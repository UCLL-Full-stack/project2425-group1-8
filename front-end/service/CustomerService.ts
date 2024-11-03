const getAllCustomers=async()=>{
    return fetch(process.env.NEXT_PUBLIC_API_URL +"/customers",{
        method:"GET",
        headers:{
            "content-Type":"application/json",
        }
    });
};
const getCustomerByName=(customerName:string)=>{
    return fetch(process.env.NEXT_PUBLIC_API_URL + `/customers/${customerName}`,{
        method:"GET",
        headers:{
            "content-Type":"application/json",
        },
    })
}

const CustomerService ={
    getAllCustomers,
    getCustomerByName,
};

export default CustomerService;