import UserService from "@/service/UserService";
import { StatusMessage } from "@/types";
import classNames from "classnames";
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

  const [statusMessage, setStatusMessage] = useState<StatusMessage[]>();
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
    console.log(result);
    return result;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    console.log("Form submitted!");

    removeErrors();

    if (!validate()) return;
    try {
      const response = await UserService.loginUser({
        name: name,
        password: password,
        role: role,
      });

      if (response) {
        const user = await response.json();

        sessionStorage.setItem("loggedInUser", name);
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        setStatusMessage([
          {
            message: "Login successful!",
            type: "success",
          },
        ]);
        sessionStorage.setItem("userRole", role);

        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setStatusMessage([
          {
            message: "Login error",
            type: "error",
          },
        ]);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setStatusMessage([
        {
          message: "login error network",
          type: "error",
        },
      ]);
    }
  };
  return (
    <>
      {statusMessage && (
        <div className="row">
          <ul className="list-none mb-3 mx-auto">
            {statusMessage.map(({ message, type }, index) => (
              <li
                key={index}
                className={classNames({
                  "text-danger": type === "error",
                  "text-success": type === "success",
                })}
              >
                {message}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form className="text-center" onSubmit={handleSubmit}>
        <p> You can sign in to your page</p>
        {
          <p>
            Don't have account? create your account{" "}
            <a href="/login/signUp">Sign up</a>
          </p>
        }
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
              <option value="farmer">farmer</option>
              <option value="customer">customer</option>
              <option value="seedSupplier">seedSupplier</option>
            </select>
            {roleError && <p className="text-danger">{roleError}</p>}
          </div>
        </div>
        <button type="submit" className="px-5   ">
          Sign in
        </button>
      </form>
    </>
  );
};

export default UserLoginForm;
