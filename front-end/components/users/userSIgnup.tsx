"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Crop, StatusMessage } from "@types";
import CustomerService from "@/service/CustomerService";
import UserService from "@/service/UserService";
import React from "react";
import classNames from "classnames";
import CropsOverviewTable from "../crops/CropsOverviewTable";
import CropService from "@/service/CropService";

const UserSignup: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [selectedOption, setselectedOption] = useState("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [crops, setCrops] = useState<Crop[]>([]);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [roleError, setRoleError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [statusMessage, setStatusMessage] = useState<StatusMessage[]>();

  const defaultCrop = {
    name: "Sorghum",
    purchasePrice: 20,
    marketPrice: 40,
    totalYield: 100,
    attentionRange: 3,
    growthDurationInMonths: 6,
  };
  const [selectedCrop, setSelectedCrop] = useState<Crop>(defaultCrop);

  const getCrops = async () => {
    const response = await CropService.getAllCrops();
    const cropsData = await response.json();
    setCrops(cropsData as Crop[]);
  };
  useEffect(() => {
    getCrops();
  }, []);

  // const validate= ()=>{
  //     let result= true;
  //     if(!name||name?.trim()===""){
  //         result=false;
  //         console.log("nameerror")
  //     // }else if (!selectedOption||selectedOption?.trim()===""){
  //     //     result=false;
  //     //     console.log("roleerror")

  //     }else if(!email||email?.trim()==="") {
  //         result=false;
  //         console.log("emailerror")

  //     }else if(!password||password?.trim()===""){
  //         result=false;
  //         console.log("passworderror")

  const validate = () => {
    let result = true;
    if (!name || name?.trim() === "") {
      setNameError("Name is required");
      result = false;
      // }else if (!selectedOption||selectedOption?.trim()===""){
      //     result=false;
      //     console.log("roleerror")
    } else if (!password || password?.trim() === "") {
      setPasswordError("Password is required");
      result = false;
    } else if (!address || address?.trim() === "") {
      setAddressError("address is required");
      result = false;
    } else if (!email || email?.trim() === "") {
      setEmailError("Email is required");
      result = false;
    } else if (role === "") {
      setRoleError("Please select your Role!");
      result = false;
    }

    return result;
  };
  const removeErrors = () => {
    setNameError("");
    setPasswordError("");
    setRoleError("");
    setStatusMessage([]);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    removeErrors();
    if (!validate()) {
      return;
    }
    setStatusMessage([
      {
        message: "Signup successful!",
        type: "success",
      },
    ]);
    statusMessage;
    setTimeout(() => {
      router.push("/");
    }, 1000);
    sessionStorage.setItem("newUser", name);

    const response = await UserService.addUsers(
      name,
      password,
      email,
      address,
      role || "customer",
      selectedCrop
    );
    console.log(response);
    if (response) {
      console.log("User added successfully!");
    } else {
      console.error("Failed to add user.");
    }
    return response;
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setselectedOption(value);
    setRole(value);
    sessionStorage.setItem("selectedOption", value);
  };

  return (
    <>
      <div className="text-center">
        <h3>User SignUp</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-2 flex flex-col ">
            <label htmlFor="nameInput">UserName:</label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue:500 block w-full p-2.5"
            />
            {nameError && <p className="text-danger">{nameError}</p>}

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue:500 block w-full p-2.5"
            />
            {passwordError && <p className="text-danger">{passwordError}</p>}

            <label htmlFor="Address">Address:</label>
            <input
              type="address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue:500 block w-full p-2.5"
            />
            {addressError && <p className="text-danger">{addressError}</p>}

            <label htmlFor="email">Email:</label>
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue:500 block w-full "
            />
            {emailError && <p className="text-danger">{emailError}</p>}
          </div>

          <div>
            <div>
              <label htmlFor="dropdown">Role</label>
              <select
                id="dropdown"
                value={role}
                onChange={handleChange}
                className="mb-1 mt-1 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue:500 block w-full p-2.5"
              >
                <option value="" disabled>
                  choose your role
                </option>
                <option value="customer">Customer</option>
                <option value="seedSupplier">SeedSupplier</option>
              </select>
            </div>
          </div>
          {roleError && <p className="text-danger">{roleError}</p>}
          <div>
            {role === "seedSupplier" && (
              <>
                <p>Please Choose the crop you will supply!</p>
                <CropsOverviewTable
                  crops={crops}
                  selectedCrop={setSelectedCrop}
                />
              </>
            )}
          </div>
          <button
            type="submit"
            className="px-5 py-2 bg-blue-500 text-black rounded-lg"
          >
            SignUp
          </button>
          {/* {statusMessage && Array.isArray(statusMessage) &&  <p className="text-green">{statusMessage[0]}</p>} */}
        </form>
      </div>
    </>
  );
};
export default UserSignup;
