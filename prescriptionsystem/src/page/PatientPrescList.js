import React from "react";
import { useNavigate } from "react-router-dom";

import "./Main.css"

function PatientPrescList() {
    const presc = [
        { name: "길병원", date: "2023-04-05", location: "인천 남동구"},
        { name: "세브란스 병원", date: "2023-04-05", location: "서울 서대문구"},
        { name: "성모 병원", date: "2023-04-08", location: "서울 영등포구"}
    ];

    const navigate = useNavigate();
    const viewPresc = () => {
        navigate("/Prescription1");
    };

    return (
        <div className="main">
            {/* <h1 id="header">Prescription System</h1> */}
            <div className='list'>
                {presc.map((pre, index) => {
                    return (
                        <div>
                            <button variant="primary" size="lg" onClick={viewPresc}>
                                <div className="buttonText">
                                    <div className="name">{pre.name}</div>
                                    <br></br>
                                    {pre.date}
                                    <br></br>
                                    {pre.location}
                                </div>
                                <div className="logo"> </div>
                            </button>
                        </div>
                    ); 
                })}
            </div>
        </div>
    );
}

export default PatientPrescList;