import React from "react";
import {useNavigate} from "react-router-dom";
import { Footer } from "./footer/footer";

const Informationpharmacy=()=>
{   const navigate =useNavigate();
    const gotoAddinfophar=()=>{
        navigate("/Addinfophar");
    };
    return(
        <>
        <div>
            <button onClick={gotoAddinfophar}>Addinfophar</button>
        </div>
        <Footer/>
        </>
    );
};

export default Informationpharmacy;