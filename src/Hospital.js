import React from "react";
import {useNavigate} from "react-router-dom";
import './main.css';
import { Footer } from "./footer/footer";
const Hospital= ()=>{
    const navigate =useNavigate();
    const gotoInformation=()=>{
        navigate("/Information");
    }
    const gotoInformation2=()=>{
        navigate("/Information2");
    }
    const gotoAddinfo=()=>{
        navigate("/Addinfo");
    };
    const hospital_list = [
        { name: "세브란스병원", location: "서울 서대문구"},
       
    ];
    const hospital_list2= [
        { name: "길병원", location: "인천 남동구"},
        
    ];
    return (
       <> 
        <h3 className="header">Hospital list</h3> 
        <div className="sidebar"><p className="sidebar-item">병원 목록</p></div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
            <div> 
                <button style={{ border: "2px solid black", padding: "10px", borderRadius: "5px" }} 
                onClick={gotoAddinfo}>
                 추가
                </button>
            </div>
            <div>
            {hospital_list.map((pre, index) => {
                    return (<>
                        <button className="button" variant="primary" onClick={gotoInformation} >
                            {pre.name} / {pre.location}
                        </button>
                        <p></p>   
                        </>
                    ); 
                })}
            </div>
            <div>
            {hospital_list2.map((pre, index) => {
                    return (<>
                        <button variant="primary" className="button" onClick={gotoInformation2}>
                            {pre.name} / {pre.location}
                        </button>
                        <p></p>   
                        </>
                    ); 
                })}
            </div>
      </div>
      <Footer></Footer>
      </>
    )
};
export default Hospital;