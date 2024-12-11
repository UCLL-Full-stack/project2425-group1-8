import { useRouter } from "next/router"
import { useState } from "react";
import {Crop, Role} from '@types';
import CustomerService from "@/service/CustomerService";
import UserService from "@/service/UserService";

const UserSignup : React.FC = ()=>{
const router=useRouter();
const [name,setName]=useState<string>("");
const [role,setRole]=useState <Role>();
const [selectedOption,setselectedOption]=useState("");
const [email,setEmail]=useState<string>("")
const [address,setAddress]=useState<string>("")
const [cropPreference,setcropPreference]=useState<Crop[]>([])



const validate= ()=>{
    let result= true;
    if(!name||name.trim()===""){
        result=false;
    }else if (!role||role.trim()===""){
        result=false;
    }

    return result;
};

const handleSubmit = async (event:React.FormEvent)=>{
    event.preventDefault();

    if (!validate()){
        return;
    }
    sessionStorage.setItem("newUser",name);
    // sessionStorage.setItem("userRole",selectedOption);
   const response= await UserService.addUsers(name,sessionStorage.getItem("selectedOption") as Role,address,email)
 
 if (response.ok) {
    console.log("User added successfully!");
} else {
    console.error("Failed to add user.");
}
return response;
}

const handleChange= (e:React.ChangeEvent<HTMLSelectElement>)=>{
    const value=e.target.value;
    setselectedOption(value);
    sessionStorage.setItem("selectedOption", value);
};

return(
    <>
    <h3>User SignUp</h3>
    <form onSubmit={handleSubmit}>
        <label htmlFor="nameInput">
            UserName:
        </label>
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)} />
        <label htmlFor="email">
            Email:
        </label>
        <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} />
        <label htmlFor="address">
            Address:
        </label>
        <input type="text" value={address} onChange={(event)=>setAddress(event.target.value)} />
        <button type="submit">
            SignUp
        </button>

    <div >
            <div >
                <label htmlFor="dropdown">Role</label>
                <select id="dropdown" value={selectedOption} onChange={handleChange}>
                    <option value="" disabled>choose your role</option>
                    <option value="farmer">Farmer</option>
                    <option value="customer">Customer</option>
                    <option value="seedsupplier">SeedSupplier</option>
                </select>
                {selectedOption && <p>Selected: {selectedOption}</p>}
            </div>
        

    </div>
    </form>

    </>
)

};

export default UserSignup;