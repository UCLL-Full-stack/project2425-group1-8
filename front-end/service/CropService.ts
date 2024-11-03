const getAllCrops=async()=>{

    return fetch(process.env.NEXT_PUBLIC_API_URL + "/crops",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    } )
};

const getCropById=(cropId:string)=>{
    return fetch(process.env.NEXT_PUBLIC_API_URL +`/crops/${cropId}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"

        }
    } )
}
const CropService={
    getAllCrops,getCropById
}
export default CropService;