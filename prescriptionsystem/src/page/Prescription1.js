import React from "react";

import "./MedicineItem";

import "./Main.css"

function Prescription1() {
    const medicine = [
        { name: "대원알마게이트정", class: "제산제", usage: "1일, 3회, 1정/1일", storage: "밀폐용기, 실온보관"},
        { name: "에코민캡슐500마이크로그램", class: "신경장애약", usage: "1일, 3회, 1캡슐/1일", storage: "기밀용기"},
        { name: "영일시메티딘정200밀리그램", class: "위산과다증약", usage: "1일, 3회, 1정/1일", storage: "자광기밀용기, 실온보관"}
    ];

    return (
        <div className="main">
            <h1 id="header">약 목록</h1>
            <div className='list'>
                {medicine.map((med, index) => {
                    return (
                        <div className="main">
                            <div className="medicineBox">
                                <p>약명 : {med.name}</p>
                                <p>분류 : {med.class}</p>
                                <p>용법 : {med.usage}</p>
                                <p>보관 : {med.storage}</p>
                            </div>
                            <br></br>
                        </div>                        
                    ); 
                })}
            </div>
        </div>
    );
}

export default Prescription1;