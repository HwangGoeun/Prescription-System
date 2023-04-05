import React from "react";
import {useNavigate} from "react-router-dom";
const Pharmacy= ()=>{
    const navigate =useNavigate();
    const gotoInformation_phar=()=>{
        navigate("/Informationpharmacy");
    };
    return (
        <>
        <div>
    <h1>Pharmacy list</h1>
    <button onClick={gotoInformation_phar}>add Pharmacy</button>
        </div>
        </>
    )
};
export default Pharmacy;