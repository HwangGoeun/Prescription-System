import React from "react";
import {useNavigate} from "react-router-dom";
import './main.css';
const Pharmacy= ()=>{
    const navigate =useNavigate();
    const gotoInformation=()=>{
        navigate("/Informationpharmacy");
    }
    const gotoInformation2=()=>{
        navigate("/Informationpharmacy2");
    }
    const gotoAddinfophar=()=>{
        navigate("/Addinfophar");
    };
    const pharmacy_list = [
        { name: "연세 약국", location: "서울 서대문구"},
    ];
    const pharmacy_list2 = [
        { name: "가천 약국", location: "서울 서대문구"},
    ];
    return (
       <> 
        <h3 className="header" >Pharmacy list</h3> 
        <div className="sidebar"><p className="sidebar-item">병원 목록</p></div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <button style={{ border: "2px solid black", padding: "10px", borderRadius: "5px" }} 
                onClick={gotoAddinfophar}>
                 추가
            </button>
        
            <div>
            {pharmacy_list.map((pre, index) => {
                    return (<>
                        <button className="button" variant="primary" onClick={gotoInformation}>
                            {pre.name} / {pre.location}
                        </button>
                        <p></p>   
                        </>
                    ); 
                })}
            </div>
            <div>
            {pharmacy_list2.map((pre, index) => {
                    return (<>
                        <button className="button" variant="primary" onClick={gotoInformation2}>
                            {pre.name} / {pre.location}
                        </button>
                        <p></p>   
                        </>
                    ); 
                })}
            </div>
      </>
    )
};
export default Pharmacy;