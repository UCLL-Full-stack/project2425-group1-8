import { Crop } from "@/types";
import React from "react";

type Props = {
  crop: Crop;
};

const CropDetails: React.FC<Props> = ({ crop }: Props) => {
  return (
    <>
      {crop && (
        <table>
          <tr>
            <td>ID:</td>
            <td>{crop.id} </td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{crop.name} </td>
          </tr>
          <tr>
            <td>PurchasePrice:</td>
            <td>{crop.purchasePrice} </td>
          </tr>
          <tr>
            <td>MarketPrice:</td>
            <td>{crop.marketPrice} </td>
          </tr>
          <tr>
            <td>TotalYield:</td>
            <td>{crop.totalYield} </td>
          </tr>
          <tr>
            <td>AttentionRange:</td>
            <td>{crop.attentionRange} </td>
          </tr>
          <tr>
            <td>GrowthDurationInMonths:</td>
            <td>{crop.growthDurationInMonths} </td>
          </tr>
        </table>
      )}
    </>
  );
};

export default CropDetails;
