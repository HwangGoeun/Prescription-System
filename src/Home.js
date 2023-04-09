import React from "react";
import {useNavigate} from "react-router-dom";
import './main.css';
const Home= ()=>{
    const navigate =useNavigate();
    const gotoHospital=()=>{
        navigate("/Hospital");
    };
    const gotoPharmacy=()=>{
        navigate("/Pharmacy");
    };
    return (
        <>
        <h3 className="header" >Management System</h3>
        <div className="sidebar"><p className="sidebar-item">병원/약국 관리</p></div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "strech", justifyContent: "center", height: "50vh" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <button className="button" onClick={gotoHospital}>
              Hospital Management
            </button>
            <button className="button" onClick={gotoPharmacy}>
              Pharmacy Management
            </button>
          </div>
        </div>
        </>
      );
    };
    
    export default Home;