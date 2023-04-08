import React from "react";

function HospitalPatient() {
    const presc = [
        { name: "방문 환자 1"},
        { name: "방문 환자 2"},
        { name: "방문 환자 3"},
        { name: "방문 환자 4"}
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

export default HospitalPatient;