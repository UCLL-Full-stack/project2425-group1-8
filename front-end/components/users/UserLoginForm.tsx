import { StatusMessage } from "@/types";
import { useRouter } from "next/router";
import React, { useState } from "react";

const UserLoginForm = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [role, setRole] = useState("");
  const [roleError, setRoleError] = useState("");

  const [StatusMessage, setStatusMessage] = useState<StatusMessage[]>();
  const removeErrors = () => {
    setNameError("");
    setPasswordError("");
    setRoleError("");
    setStatusMessage([]);
  };

  const validate = (): boolean => {
    let result = true;
    if (!name) {
      setNameError("Name is required");
      result = false;
    }
    if (!password) {
      setPasswordError("Password is required");
      result = false;
    }
    if (!role) {
      setRoleError("Role is required");
      result = false;
    }
    return result;
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    removeErrors();

    if (!validate()) return;

    setStatusMessage([
      {
        message: "Login successful!",
        type: "success",
      },
    ]);
    sessionStorage.setItem("loggedInUser", name);
    sessionStorage.setItem("userRole", role);

    setTimeout(() => {
      router.push("/");
    }, 1000);
  };
  return (
    <form className="text-center" onSubmit={handleSubmit}>
      {/* <h2>Welcome back</h2> */}
      <p> You can sign in to your page</p>
      {/* <p>
        Already registered? <a href="/signIn">Sign in </a>
      </p> */}
      <div className="mb-2 flex ">
        <label htmlFor="name" className=" mb-1">
          Username:
        </label>
        <div>
          <input
            id="nameInput"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue:500 block w-full p-2.5"
          />
          {nameError && <p className="text-danger">{nameError}</p>}
        </div>
      </div>
      <div className="mb-2">
        <label htmlFor="password">Password:</label>
        <div>
          <input
            id="passwordInput"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue:500 block w-full p-2.5"
          />
          {passwordError && <p className="text-danger">{passwordError}</p>}
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="role">Select Role:</label>
        <div>
          <select
            id="role"
            value={role}
            onChange={(event) => setRole(event.target.value)}
            className="mb-1 mt-1 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue:500 block w-full p-2.5"
          >
            <option value="" disabled>
              Select your role
            </option>
            <option value="farmer">Farmer</option>
            <option value="customer">Customer</option>
            <option value="seedSupplier">Seed Supplier</option>
          </select>
          {roleError && <p className="text-danger">{roleError}</p>}
        </div>
      </div>
      <button type="submit" className="px-5   ">
        Sign in
      </button>
    </form>
  );
};

export default UserLoginForm;
