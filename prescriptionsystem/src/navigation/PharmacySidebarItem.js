import React from "react";

function PharmacySidebarItem({ item }) {
    return (
        <div className="sidebar-item">
            <p>{item.name}</p>
        </div>
    );
}

export default PharmacySidebarItem;