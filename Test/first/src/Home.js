import React from "react";
import {useNavigate} from "react-router-dom";
import { Logout } from "./Logout/logout"

const Home= ()=>{
    const navigate =useNavigate();
    const gotoHospital=()=>{
        navigate("/Hospital");
    };
    const gotoPharmacy=()=>{
        navigate("/Pharmacy");
    };
    

    return(
        <>
        <div>
            <h1>management system</h1>
        </div>
            <div>
            <form>
                <div>
                    <button onClick={gotoHospital}>Hospital management</button>
                    <button onClick={gotoPharmacy}>Pharmacy management</button>
                </div>
                
                
                <div>
                <Logout/>
                    
                </div>
            </form>
        </div>
        </>
    )

};
export default Home;