import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientSidebar from "../navigation/PatientSidebar";
import PatientPrescList from "./PatientPrescList";

function PatientPage() {
    return (
        <div>
            <div className="header">
                <h1>Patient</h1>
            </div>
            <BrowserRouter>
                <PatientSidebar></PatientSidebar>
                <Routes>
                    <Route path="/" element={<PatientPrescList/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default PatientPage;