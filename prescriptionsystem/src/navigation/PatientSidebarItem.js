import React from "react";

import "./Sidebar.css"

function PatientSidebarItem({ item }) {
    return (
        <div className="sidebar-item">
            <p>{item.name}</p>
        </div>
    );
}

export default PatientSidebarItem;