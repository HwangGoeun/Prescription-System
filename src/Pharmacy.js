import React from "react";
import {useNavigate} from "react-router-dom";
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
        <h3 className="Hospitalhead" style={{fontSize:40}}>Pharmacy list</h3> 
        <div>
            <div className="header"> 
            <div style={{ display: "flex", flexDirection: "column", alignItems:"center",justifyContent:"center", gap: "10px" }}>
                <button style={{ border: "2px solid black", padding: "20px", borderRadius: "5px" }} 
                onClick={gotoAddinfophar}>
                 추가
                </button>
            </div>
                <h3>약국목록</h3>
            </div>
            <div>
            {pharmacy_list.map((pre, index) => {
                    return (<>
                        <button variant="primary" onClick={gotoInformation}>
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
                        <button variant="primary" onClick={gotoInformation2}>
                            {pre.name} / {pre.location}
                        </button>
                        <p></p>   
                        </>
                    ); 
                })}
            </div>
      </div>
      </>
    )
};
export default Pharmacy;