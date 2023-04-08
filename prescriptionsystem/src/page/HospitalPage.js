import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HospitalSidebar from "../navigation/HospitalSidebar";
import HospitalPatient from "./HospitalPatient";
import HospitalPrescList from "./HospitalPrescList";

function HospitalPage() {
    return (
        <div>
            <h1>Hospital</h1>
            <BrowserRouter>
                <HospitalSidebar></HospitalSidebar>
                <Routes>
                    <Route path="/" element={<HospitalPrescList />} />
                    <Route path='/patient' element={<HospitalPatient />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default HospitalPage;