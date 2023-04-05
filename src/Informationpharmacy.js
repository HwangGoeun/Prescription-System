import React from "react";
import {useNavigate} from "react-router-dom";
const Informationpharmacy=()=>
{   const navigate =useNavigate();
    const gotoAddinfophar=()=>{
        navigate("/Addinfophar");
    };
    return(
        <div>
            <button onClick={gotoAddinfophar}>Addinfophar</button>
        </div>
    );
};

export default Informationpharmacy;