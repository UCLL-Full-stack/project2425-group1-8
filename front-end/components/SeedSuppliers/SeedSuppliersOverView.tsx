import SeedSupplierService from "@/service/SeedSupplier";
import { Crop, SeedSupplier } from "@/types";
import React, { useState } from "react";

type Props = {
  seedSuppliers: Array<SeedSupplier>;
  selectSeedSupplier: (SeedSupplier: SeedSupplier) => void;
  //   crops: Array<Crop>;
};

const SeedSuppliersOverView: React.FC<Props> = ({
  seedSuppliers,
  selectSeedSupplier,
}: Props) => {
  return (
    <>
      {seedSuppliers && (
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
