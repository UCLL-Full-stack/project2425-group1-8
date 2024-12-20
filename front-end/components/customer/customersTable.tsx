import React, { useState } from "react";
import { Crop, Customer } from "@types";
import CropsOverviewTable from "../crops/CropsOverviewTable";

type props = {
  customers: Array<Customer>;
  selectCustomer: (customer: Customer) => void;
};

const CustomerTable: React.FC<props> = ({
  customers,
  selectCustomer,
}: props) => {
  return (
    <>
      {customers && (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr
                key={index}
                data-testid={`customer-${index}`}
                onClick={() => selectCustomer(customer)}
                role="button"
              >
                <td>{customer.name}</td>
                <td>{customer.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
  // const CustomerTable:React.FC<props> =({customers,selectCustomer}:props)=>{
  //     const [selectedCustomer,setSelectedCustomer]=useState<Customer|null>()
  //     // const[crops,setCrops]=useState<Array<Crop>|null>()
  //     const role=sessionStorage.getItem("userRole")
  //     const cropPreferences= selectedCustomer?.cropPreference
  //     console.log(cropPreferences)
  //     function selectedCrop(crop: Crop): void {

  //     }

  //     return (
  //         <>
  //         {/* {role==="customer"&& (
  //       <h3 className="text-danger">oooops...Looks like you're not Authorized!</h3>
  //     )} */}
  //         {customers &&  (
  //             <table className="table table-hover">
  //                 <thead>
  //                     <tr>
  //                         <th scope="col">Name</th>
  //                         <th scope="col">Email</th>
  //                     </tr>
  //                 </thead>
  //                 <tbody>
  //                     {customers.map((customer,index)=>(
  //                         <tr key={index} onClick={()=>setSelectedCustomer(customer)} role="button">
  //                             <td>{customer.name}</td>
  //                             <td>{customer.email}</td>
  //                         </tr>
  //                     ))}
  //                 </tbody>
  //             </table>
  //         )}
  //         {cropPreferences && cropPreferences && cropPreferences.length > 0 &&
  //         <CropsOverviewTable  crops={cropPreferences} />}

  //         </>
  //     );
};

export default CustomerTable;
