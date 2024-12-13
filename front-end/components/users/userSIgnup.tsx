import { useRouter } from "next/router"
import { useState } from "react";
import {Crop, Role} from '@types';
import CustomerService from "@/service/CustomerService";
import UserService from "@/service/UserService";
import React from "react";
import classNames from "classnames";

const UserSignup : React.FC = ()=>{
const router=useRouter();
const [name,setName]=useState<string>("");
const [role,setRole]=useState<Role>("customer");
const [selectedOption,setselectedOption]=useState("");
const [email,setEmail]=useState<string>("")
const [address,setAddress]=useState<string>("")
const [cropPreference,setcropPreference]=useState<Crop[]>([])
const [password,setPassword]=useState<string>("");



const validate= ()=>{
    let result= true;
    if(!name||name?.trim()===""){
        result=false;
        console.log("nameerror")
    }else if (!role||role?.trim()===""){
        result=false;
        console.log("roleerror")

    }else if(!email||email?.trim()==="") {
        result=false;
        console.log("emailerror")

    }else if(!password||password?.trim()===""){
        result=false;
        console.log("passworderror")

    }

    return result;
};

const handleSubmit = async (event:React.FormEvent)=>{
    event.preventDefault();

    if (!validate()){
        console.log("exiting")
        return;
    }
    sessionStorage.setItem("newUser",name);
    // sessionStorage.setItem("userRole",selectedOption);
    setPassword(password)
   const response= await UserService.addUsers(name,password,role,address,email);
 if (response.ok) {
    console.log("User added successfully!");
} else {
    console.error("Failed to add user.");
}
return response;
}

const handleChange= (e:React.ChangeEvent<HTMLSelectElement>)=>{
    const value=e.target.value;
    // setselectedOption(value);
    setRole(role)
    sessionStorage.setItem("selectedOption", value);
};

return(
    <>
    <h3>User SignUp</h3>
    <form onSubmit={handleSubmit} className="text-center">
        <label htmlFor="nameInput">
            UserName:
        </label>
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)}
            className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue:500 block w-full p-2.5"
            />

        <label htmlFor="password">
            Password:
        </label>
        <input type="text" value={password} onChange={(event)=>setPassword(event.target.value)} 
        className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue:500 block w-full p-2.5"
        />

        <label htmlFor="password">
            Email:
        </label>
        <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} 
        className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue:500 block w-full "

        />

        <label htmlFor="address">
            Address:
        </label>
        <input type="text" value={address} onChange={(event)=>setAddress(event.target.value)} 
        className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue:500 block w-full p-2.5"

        />

        

    <div >
            <div >
                <label htmlFor="dropdown">Role</label>
                <select id="dropdown" value={role} onChange={handleChange}
                className="mb-1 mt-1 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue:500 block w-full p-2.5"

                >

                    <option value="" disabled>choose your role</option>
                    <option value="farmer">Farmer</option>
                    <option value="customer">Customer</option>
                    <option value="seedsupplier">SeedSupplier</option>
                </select>
                {role && <p>Selected: {role}</p>}
            </div>
        

    </div>
    <button type="submit" className="px-5   ">
            SignUp
        </button>
    </form>

    </>
)

};

export default UserSignup;