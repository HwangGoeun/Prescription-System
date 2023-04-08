import React from "react";
import { Link } from "react-router-dom";

import SidebarItem from "./HospitalSidebarItem";

import "./Sidebar.css"

function HospitalSidebar() {
    const items = [
        { name: "처방전 목록", path: "/" },
        { name: "환자 목록", path: "/patient"}
    ];

    return (
        <div className="sidebar">
            {items.map((item, index) => {
                return (
                    <Link to={item.path} key={index}>
                        <SidebarItem 
                            item={item}
                        />
                    </Link>
                );
            })}
        </div>
    );
}

export default HospitalSidebar;