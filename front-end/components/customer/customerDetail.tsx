import React from 'react';
import { Customer } from '@types';

type props={
    customer:Customer;
};

const CustomerDetail:React.FC<props> =({ customer }: props)=>{
    return (
        <>
          {customer && (
            <table>
                <tr>
                    <td>Name:</td>
                    <td>{customer.name}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>{customer.email}</td>
                </tr>
                <tr>
                    <td>Address:</td>
                    <td>{customer.address}</td>
                </tr>
                <tr>
                    <td>Number of Crop Preference:</td>
                    <td>{customer.cropPreference.length}</td>
                </tr>
            </table>
          )}
        </>
    );
};

export default CustomerDetail;