import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PharmacySidebar from "../navigation/PharmacySidebar";
import PharmacyHospitalList from "./PharmacyHospitalList";
import PharmacyPrescList from "./PharmacyPrescList";

function PharmacyPage() {
    return (
        <div>
            <h1>Pharmacy</h1>
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