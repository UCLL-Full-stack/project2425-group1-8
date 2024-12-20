import SeedSupplierService from "@/service/SeedSupplier";
import { Crop, SeedSupplier } from "@/types";
import React, { useState } from "react";
import classNames from "classnames";

type Props = {
  seedSuppliers: Array<SeedSupplier>;
  selectSeedSupplier: (SeedSupplier: SeedSupplier) => void;
  //   crops: Array<Crop>;
};

const SeedSuppliersOverView: React.FC<Props> = ({
  seedSuppliers,
  selectSeedSupplier,
}: Props) => {

  const role=sessionStorage.getItem("userRole")
  return (
    <>
    {role==="customer"&& (
      <h3 className="text-danger">oooops...Looks like you're not Authorized!</h3>
    )}
    {role==="seedSupplier"&& (
      <h3 className="text-danger">oooops...Looks like you're not Authorized!</h3>
    )}
    {role!="seedSupplier"&&  role!="customer" && role!="farmer" && role==="" &&(
      <h3 className="text-danger">oooops...Looks like you're not Logged in!</h3>
    )}
      {seedSuppliers && role!="customer" && role!="seedSupplier" && (
        <>
          <table className="text-left">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {seedSuppliers.map((seedSupplier, index) => (
                <tr
                  key={index}
                  onClick={() => selectSeedSupplier(seedSupplier)}
                  role="button"
                >
                  <td>{seedSupplier.name}</td>
                  <td>{seedSupplier.address}</td>
                  <td>{seedSupplier.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* 
          {selectedSeedSupplier && (
            <section className="mt-5">
              <h2 className="text-center">Crops</h2>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Purchase Price</th>
                    <th scope="col">Market Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {crops.map((crop, index) => (
                    <tr key={index}>
                      <td>{crop.name}</td>
                      <td>{crop.purchasePrice}</td>
                      <td>{crop.marketPrice}</td>
                      <td>
                        {!selectedSeedSupplier.crops.find(
                          (s) => s.name === crop.name
                        ) && (
                          <button
                            className="text-primary"
                            onClick={() => handleAddition(crop)}
                          >
                            Add
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section> */}
          {/* )} */}
        </>
      )}
    </>
  );
};

export default SeedSuppliersOverView;
