import React from "react";
import { useNavigate } from "react-router-dom";

import "./Main.css"

function PatientPrescList() {
    const presc = [
        { name: "방문 병원 1", date: "2023-04-05", path: "/Prescription1"},
        { name: "방문 병원 2", date: "2023-04-05", path: "/Prescription2"},
        { name: "방문 병원 3", date: "2023-04-08", path: "/Prescription3"}
    ];

    const navigate = useNavigate();
    const viewPresc = () => {
        navigate("/Prescription1");
    };

    return (
        <div className="main">
            <h1 id="header">Prescription System</h1>
            <div className='list'>
                {presc.map((pre, index) => {
                    return (
                        <div>
                            <button variant="primary" size="lg" onClick={viewPresc}>
                                {pre.name} / {pre.date}
                            </button>
                        </div>
                    ); 
                })}
            </div>
        </div>
    );
}

export default PatientPrescList;