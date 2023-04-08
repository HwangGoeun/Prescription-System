import React from "react";
import {useNavigate} from "react-router-dom";
const Pharmacy= ()=>{
    const navigate =useNavigate();
    const gotoInformation_phar=()=>{
        navigate("/Informationpharmacy");
    };
    const gotoMain=()=>{
        navigate("/");
    };
    return (
        <>
        <div>
    <h1>Pharmacy list</h1>
    <button onClick={gotoInformation_phar}>add Pharmacy</button>
        </div>
        <div>
        <button style={{marginTop : 100, marginLeft : 20, height: 50, width: 200, fontSize: 30, borderRadius: 20}} onClick={gotoMain}>로그아웃</button>
        </div>
        </>
    )
};
export default Pharmacy;