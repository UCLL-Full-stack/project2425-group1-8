import React from "react";
import { Customer} from '@types';


type props ={ 
    customers: Array<Customer>;
    selectCustomer: (customer: Customer)=>void;

};


const CustomerTable:React.FC<props> =({customers,selectCustomer}:props)=>{
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
                    {customers.map((customer,index)=>(
                        <tr key={index} onClick={()=>selectCustomer(customer)} role="button">
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
        </>
    );
};


export default CustomerTable;