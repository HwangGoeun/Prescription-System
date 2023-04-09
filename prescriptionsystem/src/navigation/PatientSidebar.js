import React from "react";
import { Link } from "react-router-dom";

import SidebarItem from "./PatientSidebarItem";

import "./Sidebar.css"

function PatientSidebar() {
    const items = [
        { name: "처방전 목록", path: "/" }
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

export default PatientSidebar;