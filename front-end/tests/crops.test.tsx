//given
const crops = [
  {
    name: "maize",
    purchasePrice: 10,
    marketPrice: 40,
    totalYield: 200,
    attentionRange: 3,
    growthDurationInMonths: 15,
  },

  {
    name: "Barley",
    purchasePrice: 15,
    marketPrice: 45,
    totalYield: 205,
    attentionRange: 4,
    growthDurationInMonths: 9,
  },
];

import CropsOverviewTable from "@/components/crops/CropsOverviewTable";
import { render, screen } from "@testing-library/react";
import test from "node:test";

let mockSelectedCrop: jest.Mock;
mockSelectedCrop = jest.fn();

test("given crops-when you want to see crop overview-then crops are rendered"),
  async () => {
    //when
    render(
      <CropsOverviewTable crops={crops} selectedCrop={mockSelectedCrop} />
    );

    //then
    expect(screen.getByText("maize"));
    expect(screen.getByText("Barley"));
  };
