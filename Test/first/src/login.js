import React from "react";
import styles from './App.css';
import { useNavigate } from "react-router-dom";

const Login=()=>{

    const navigate =useNavigate();


    const gotoHome=()=>{
        navigate("/Home");
    };
    const gotoSignup=()=>{
        navigate("/Signup");
    };
    const gotoReset=()=>{
        navigate("/Re_PW");
    };

    const gotoLayout=()=>{
        navigate("/daeun/Layout");
    };

    return(
        

        <>
        <div style={{marginTop: 10, marginBottom:0}}>
        <h1 className="Name" style={{ fontSize: 40}}>웹이름</h1>
        </div>
        <div className='LoginBox'>
            
        
                <form>
                    <label htmlFor="username" style={{ marginLeft: 10, padding: 10}}>Username</label>
                    <input type="text" style={{height: 30}} id="username" />

                    <label htmlFor="password" style={{ marginLeft: 10, padding: 10}}>Password</label>
                    <input type="password" style={{height: 30}} id="password" />
                    
                    <div>
                    <button type="submit"  style={{ marginTop : 20, height: 50, width: 100, fontSize: 30, borderRadius: 20}} onClick={gotoHome}>Login</button>
                    <button type="submit"  style={{ marginTop : 20, height: 50, width: 100, fontSize: 30, borderRadius: 20}} onClick={gotoLayout}>Layout</button>
                    </div>
                    
                    <div>
                    <button style={{marginTop : 20, marginRight : 20, height: 50, width: 200, fontSize: 30, borderRadius: 20}} onClick={gotoSignup}>Sign Up</button>
                    <button style={{marginTop : 20, marginLeft : 20, height: 50, width: 200, fontSize: 30, borderRadius: 20}} onClick={gotoReset}>Find PW</button>
                    </div>
                    

                </form>
            </div></>
    );  
}
export default Login;
    
