import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PharmacySidebar from "../navigation/PharmacySidebar";
import PharmacyHospitalList from "./PharmacyHospitalList";
import PharmacyPrescList from "./PharmacyPrescList";

import "./Main.css";

function PharmacyPage() {
    return (
        <div>
            <div className="header">
                <h1>Pharmacy</h1>
            </div>
            <BrowserRouter>
                <PharmacySidebar></PharmacySidebar>
                <Routes>
                    <Route path="/" element={<PharmacyPrescList />} />
                    <Route path='/pharmacyHospitalList' element={<PharmacyHospitalList />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default PharmacyPage;