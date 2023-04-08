import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientSidebar from "../navigation/PatientSidebar";
import PatientPrescList from "./PatientPrescList";

function PatientPage() {
    return (
        <div>
            <h1>Patient</h1>
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