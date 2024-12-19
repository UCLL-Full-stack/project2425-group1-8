import { Crop } from "@/types";
import React from "react";
import { useTranslation } from "next-i18next";

type Props = {
  crop: Crop;
};

const CropDetails: React.FC<Props> = ({ crop }: Props) => {
      const { t,i18n } = useTranslation()
  
  return (
    <>
      {crop && (
        <table>
          <tr>
            <td>
              {/* ID: */}
              {t('Crops.cropdetails.ID')}
            </td>
            <td>{crop.id} </td>
          </tr>
          <tr>
            <td>
              {/* Name: */}
              {t('Crops.cropdetails.Name')}
            </td>
            <td>{crop.name} </td>
          </tr>
          <tr>
            <td>
              {/* PurchasePrice: */}
              {t('Crops.cropdetails.PurchasePrice')}
              </td>
            <td>{crop.purchasePrice} </td>
          </tr>
          <tr>
            <td>
              {/* MarketPrice: */}
              {t('Crops.cropdetails.MarketPrice')}
              </td>
            <td>{crop.marketPrice} </td>
          </tr>
          <tr>
            <td>
              {/* TotalYield: */}
              {t('Crops.cropdetails.TotalYield')}
              </td>
            <td>{crop.totalYield} </td>
          </tr>
          <tr>
            <td>
              {/* AttentionRange: */}
              {t('Crops.cropdetails.Attention Range')}
              </td>
            <td>{crop.attentionRange} </td>
          </tr>
          <tr>
            <td>
              {/* GrowthDurationInMonths: */}
              {t('Crops.cropdetails.GrowthDurationInMonths')}
              </td>
            <td>{crop.growthDurationInMonths} </td>
          </tr>
        </table>
      )}
    </>
  );
};

export default CropDetails;
