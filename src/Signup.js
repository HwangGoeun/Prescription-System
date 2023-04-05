import React from "react";
import { useNavigate } from "react-router-dom";





const SignUp =()=>{
    const navigate =useNavigate();

    const gotoMain=()=>{
        navigate("/");
    };
    

    return(
        <>
         <div style={{marginTop: 10, marginBottom:0}}>
        <h1 className="Name" style={{ fontSize: 40}}>Sign   Up</h1>
        </div>
        
        <form  className="LoginBox">
            <label  style={{marginTop:10, marginLeft: 10, padding: 10, textAlign: "center"}}>Username</label>
            <input type="text" style={{ marginLeft: 95,marginTop:10, height: 30}} />
            <br></br>
            <label  style={{marginTop:10, marginLeft: 10, padding: 10, textAlign: "center"}}>Password</label>
            <input type="password" style={{marginLeft: 100,marginTop:10,height: 30}}  />
            <br></br>
            <label style={{marginTop:10, marginLeft: 10, padding: 10, textAlign: "center"}}>BirthDay</label>
            <input type="text" style={{marginLeft: 110,marginTop:10,height: 30}}  />
            <br></br>
            <label  style={{marginTop:10, marginLeft: 10, padding: 10, textAlign: "center" }}>PhoneNumber</label>
            <input type="text" style={{marginLeft: 60,marginTop:10,height: 30}}  />

        </form>
        
        <div>
        <button style={{marginTop : 100, marginLeft : 20, height: 50, width: 200, fontSize: 30, borderRadius: 20}} onClick={gotoMain}>로그아웃</button>
        </div>
        </>

    );
    

}
export default SignUp;
