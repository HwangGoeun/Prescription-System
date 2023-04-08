import React from "react";
import styles from './App.css';
import { useNavigate } from "react-router-dom";

import './Manage.css';
import { Footer } from "./footer/footer";

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
        <h1 className="Name" >
        <img className="img" src={require('./img/logo_images.png')} alt="Logo" width="300" />
        
        </h1>   
        </div>
        <div className='LoginBox'>
            
        
                <form>
                    <h1 style={{marginBottom: 90, marginTop: 60, fontSize: 60}}>Login</h1>
                    <label htmlFor="username" style={{marginTop: 20, marginLeft: 10, padding: 20, fontSize: 30}}>Username</label>
                    <input type="text" style={{height: 30}} id="username" />

                    <label htmlFor="password" style={{marginTop: 20, marginLeft: 10, padding: 20, fontSize: 30}}>Password</label>
                    <input type="password" style={{height: 30}} id="password" />
                    
                    <div>
                    <button type="submit"  style={{ marginTop : 80, height: 50, width: 100, fontSize: 30, borderRadius: 20}} onClick={gotoHome}>Login</button>
                    <button type="submit"  style={{ marginTop : 80, height: 50, width: 100, fontSize: 30, borderRadius: 20}} onClick={gotoLayout}>Layout</button>
                    </div>
                    
                    <div>
                    <button style={{marginBottom:100, marginTop : 50, marginRight : 20, height: 50, width: 200, fontSize: 30, borderRadius: 20}} onClick={gotoSignup}>Sign Up</button>
                    <button style={{marginBottom:100, marginTop : 50, marginLeft : 20, height: 50, width: 200, fontSize: 30, borderRadius: 20}} onClick={gotoReset}>Find PW</button>
                    </div>
                    <Footer/>
                    
                    
                    

                </form>
            </div></>
    );  
}
export default Login;
    
