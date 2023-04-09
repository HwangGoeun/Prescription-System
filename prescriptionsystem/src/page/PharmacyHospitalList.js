import React from "react";

import "./Main.css"

function PharmacyHospitalList() {
    const presc = [
        { name: "길병원", date: "2023-04-05", location: "인천 남동구"},
        { name: "세브란스 병원", date: "2023-04-05", location: "서울 서대문구"},
        { name: "성모 병원", date: "2023-04-08", location: "서울 영등포구"}
    ];

    return (
        <div className="main">
            {/* <h1 id="header">Prescription System</h1> */}
            <div className='list'>
                {presc.map((pre) => {
                    return (
                        <button variant="primary" size="lg">
                            <div className="buttonText">
                                <div className="name">{pre.name}</div>
                                <br></br>
                                {pre.location}
                            </div>
                            <div className="logo"> </div>
                        </button>
                    ); 
                })}
            </div>
        </div>
    );
}

export default PharmacyHospitalList;