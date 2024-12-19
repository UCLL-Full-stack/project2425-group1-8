import React from "react";
import { Crop } from "@types";

type Props = {
  crops: Array<Crop>;
  selectedCrop: (crop: Crop) => void;
};
const CropsOverviewTable: React.FC<Props> = ({
  crops,
  selectedCrop,
}: Props) => {
  return (
    <>
      {crops && (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">
                {/* <h2>Crops Name</h2>{" "} */}
              </th>
              {/* <th scope="col">purchasePrice</th>
              <th scope="col">marketPrice</th>
              <th scope="col">totalYield</th>
              <th scope="col">attentionRange</th>
              <th scope="col">growthDurationInMonths</th> */}
            </tr>
          </thead>
          <tbody>
            {crops.map((crop, index) => (
              <tr key={index} onClick={() => selectedCrop(crop)} role="button">
                <td>{crop.name} </td>
                {/* <td>{crop.purchasePrice} </td>
                <td>{crop.marketPrice} </td>
                <td>{crop.attentionRange} </td>
                <td>{crop.totalYield} </td>
                <td>{crop.growthDurationInMonths} </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default CropsOverviewTable;
