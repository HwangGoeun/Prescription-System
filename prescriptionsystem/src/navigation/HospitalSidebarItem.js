import React from "react";

function HospitalSidebarItem({ item }) {
    return (
        <div className="sidebar-item">
            <p>{item.name}</p>
        </div>
    );
}

export default HospitalSidebarItem;