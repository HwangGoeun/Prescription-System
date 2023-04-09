import React from "react";

import "./Main.css"

function PharmacyPrescList() {
    const presc = [
        { name: "김환자", birth: "2002-06-27", date: "2023-03-05", time:"13:00"},
        { name: "황환자", birth: "2002-10-11", date: "2023-04-06", time:"13:34"},
        { name: "송환자", birth: "2002-12-20", date: "2023-04-07", time:"14:34"}
    ];

    return (
        <div className="main">
            <div className='list'>
                {presc.map((pre, index) => {
                    return (
                        <button variant="primary" size="lg">
                            <div className="buttonText">
                                <div className="name">{pre.name}</div>
                                <br></br>
                                {pre.date} {pre.time}
                            </div>
                        </button>
                    ); 
                })}
            </div>
        </div>
    );
}

export default PharmacyPrescList;