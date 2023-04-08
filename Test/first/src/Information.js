import React from "react";
import {useNavigate} from "react-router-dom";
import { Logout } from "./Logout/logout";
const Information= ()=>{
    const navigate =useNavigate();
    const gotoAddinfo=()=>{
        navigate("/Addinfo");
    };

    

    return (
        <>
        <div>
            <h1>Information</h1>
      <button onClick={gotoAddinfo}>Addinfo</button>
        </div>
        <div><Logout/></div>
        
        </>
    )
};
export default Information;