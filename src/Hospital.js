import React from "react";
import {useNavigate} from "react-router-dom";
const Hospital= ()=>{
    const navigate =useNavigate();
    const gotoInformation=()=>{
        navigate("/Information");
    }
    const gotoAddinfo=()=>{
        navigate("/Addinfo");
    };
    const hospital_list = [
        { name: "세브란스병원", location: "서울 서대문구"},
        { name: "길병원", location: "인천 남동구"},
        { name: "서울대병원", location: "서울 종로구"},
        { name: "성모병원", location: "서울 영등포구"}
    ];
    return (
       <> 
        <h3 className="Hospitalhead" style={{fontSize:40}}>Hospital list</h3> 
        <div>
            <div className="header"> 
            <div style={{ display: "flex", flexDirection: "column", alignItems:"center",justifyContent:"center", gap: "10px" }}>
                <button style={{ border: "2px solid black", padding: "20px", borderRadius: "5px" }} 
                onClick={gotoAddinfo}>
                 추가
                </button>
            </div>
                <h3>병원목록</h3>
            </div>
            <div>
            {hospital_list.map((pre, index) => {
                    return (<>
                        <button variant="primary" onClick={gotoInformation}>
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
export default Hospital;