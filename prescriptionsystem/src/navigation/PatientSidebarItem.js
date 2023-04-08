import React from "react";

function PatientSidebarItem({ item }) {
    return (
        <div className="sidebar-item">
            <p>{item.name}</p>
        </div>
    );
}

export default PatientSidebarItem;