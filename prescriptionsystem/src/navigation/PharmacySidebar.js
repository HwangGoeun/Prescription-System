import React from "react";
import { Link } from "react-router-dom";

import SidebarItem from "./PharmacySidebarItem";

import "./Sidebar.css"

function PharmacySidebar() {
    const items = [
        { name: "처방전 목록", path: "/" },
        { name: "병원 목록", path: "/pharmacyHospitalList"}
    ];

    return (
        <div className="sidebar">
            {items.map((item, index) => {
                return (
                    <Link to={item.path} key={index} style={{textDecoration: "none"}}>
                        <SidebarItem 
                            item={item}
                        />
                    </Link>
                );
            })}
        </div>
    );
}

export default PharmacySidebar;