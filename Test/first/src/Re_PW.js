import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";




const Re_PW =()=>{

    const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
    
    

    
    

    const [password, setNumber]= useState({
        num1:getRandom(1000, 9999)
    });
    
    const {num1}=password;

    const Notice=()=>{
        alert("고객님의 비밀번호는"+num1+"입니다.");
    };

    return(

        <>
        <div style={{marginTop: 10, marginBottom:0}}>
            <h1 className="Name" style={{ fontSize: 40}}>Reset Password</h1>
        </div>
        <form  className="LoginBox">
        <label  style={{marginTop:10, marginLeft: 10, padding: 10, textAlign: "center"}}>Username</label>
        <input type="text" style={{ marginLeft: 95,marginTop:10, height: 30}} />
        <br></br>
        <label  style={{marginTop:10, marginLeft: 10, padding: 10, textAlign: "center"}}>Password</label>
        <input type="text" style={{marginLeft: 100,marginTop:10,height: 30}}  />
        <br></br>
        <label style={{marginTop:10, marginLeft: 10, padding: 10, textAlign: "center"}}>BirthDay</label>
        <input type="text" style={{marginLeft: 110,marginTop:10,height: 30}}  />

        
        </form>
        <div className="CenterButton">
        
            <button  style={{ marginTop : 20, marginLeft : 20, height: 50, width: 200, fontSize: 30, borderRadius: 20}} onClick={Notice}>확인</button>
        </div>
        
        
        </>

    );

}
export default Re_PW;