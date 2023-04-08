import React from "react";
import {useNavigate} from "react-router-dom";
import { Footer } from "./footer/footer";
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
        <h3 class name="Homehead" style={{fontSize:40}}>Management System</h3>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "strech", justifyContent: "center", height: "50vh" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <button style={{ border: "2px solid black", padding: "50px", borderRadius: "5px" }} onClick={gotoHospital}>
              Hospital Management
            </button>
            <button style={{ border: "2px solid black", padding: "50px", borderRadius: "5px" }} onClick={gotoPharmacy}>
              Pharmacy Management
            </button>
            
          </div>
        </div>
        <Footer/>
        </>
      );
    };
    
    export default Home;