import React from "react";

import "./Main.css"

function PharmacyHospitalList() {
    const presc = [
        { name: "연계 병원 1"},
        { name: "연계 병원 2"},
        { name: "연계 병원 3"}
    ];

    return (
        <div className="main">
            <h1 id="header">Prescription System</h1>
            <div className='list'>
                {presc.map((pre, index) => {
                    return (
                        <button variant="primary" size="lg">
                            {pre.name}
                        </button>
                    ); 
                })}
            </div>
        </div>
    );
}

export default PharmacyHospitalList;