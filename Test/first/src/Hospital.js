import React from "react";
import {useNavigate} from "react-router-dom";


import './Manage.css';
import { Footer } from "./footer/footer";

const Hospital= ()=>{
    const navigate =useNavigate();
    const gotoInformation=()=>{
        navigate("/Information");
    };
    return (
        <>
            <div className="hospital">
                <h1>Hospital list</h1>
                <button onClick={gotoInformation}>add hospital</button>
            </div>
            <Footer/>
        </>
    )
};
export default Hospital;