import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import Lists from './Lists';
import Hospital from './Addinfo';
import setHospital from './Addinfo'


const Information= ()=>{
    const navigate =useNavigate();
    const gotoAddinfo=()=>{
        navigate("/Addinfo");
    };

      
      
    return (
        
        <div>
            <h1>Information</h1>
            <Lists/>
        </div>
        
    )
};
export default Information;