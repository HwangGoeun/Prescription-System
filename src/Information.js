import React from "react";
import {useNavigate} from "react-router-dom";
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
        </>
    )
};
export default Information;