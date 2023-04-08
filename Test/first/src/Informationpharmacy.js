import React from "react";
import {useNavigate} from "react-router-dom";
const Informationpharmacy=()=>
{   const navigate =useNavigate();
    const gotoAddinfophar=()=>{
        navigate("/Addinfophar");
    };
    const gotoMain=()=>{
        navigate("/");
    };

    return(
        <>
        <div>
            <button onClick={gotoAddinfophar}>Addinfophar</button>
        </div>
        <div>
        <button style={{marginTop : 100, marginLeft : 20, height: 50, width: 200, fontSize: 30, borderRadius: 20}} onClick={gotoMain}>로그아웃</button>
        </div>
        </>
        
    );
};

export default Informationpharmacy;