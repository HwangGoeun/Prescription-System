import React from "react";
import {useNavigate} from "react-router-dom";
import { Logout } from "./Logout/logout";
const Hospital= ()=>{
    const navigate =useNavigate();
    const gotoInformation=()=>{
        navigate("/Information");
    };

    

    return (
        <>
        <div>
    <h1>Hospital list</h1>
    <button onClick={gotoInformation}>add hospital</button>
        </div>
        <div>
           <Logout/>
        </div>
        </>
    )
};
export default Hospital;