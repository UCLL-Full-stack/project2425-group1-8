import CustomerTable from "@/components/customer/customersTable";
import { fireEvent, render, screen } from "@testing-library/react";
import * as React from "react";

const customers = [
  {
    name: "Alex",
    address: "Hassrode",
    password: "alexman123",
    email: "alex123@gmail.com",
    role: "customer",
    cropPreference: [
      {
        name: "maize",
        purchasePrice: 10,
        marketPrice: 40,
        totalYield: 200,
        attentionRange: 3,
        growthDurationInMonths: 15,
      },
    ],
  },
  {
    name: "Alexis",
    password: "alexis123",
    address: "Ghent",
    email: "alexis123@gmail.com",
    role: "customer",
    cropPreference: [],
  },
];

let mockSelectedcustomer: jest.Mock;
mockSelectedcustomer = jest.fn();

test("given customers-when you want to see customer overview - then customers are rendered", async () => {
  render(
    <CustomerTable
      customers={customers}
      selectCustomer={mockSelectedcustomer}
    />
  );
  expect(screen.getByText("Alex"));
  expect(screen.getByText("Alexis"));
});

test("given customers - when you click on a customer - then the customer's details are displayed", () => {
  render(
    <CustomerTable
      customers={customers}
      selectCustomer={mockSelectedcustomer}
    />
  );

  // Find and click the first customer
  const firstCustomerRow = screen.getByTestId("customer-0");
  fireEvent.click(firstCustomerRow);

  // Ensure the mock function is called with the correct customer
  expect(mockSelectedcustomer).toHaveBeenCalledWith(customers[0]);
});

export {};
