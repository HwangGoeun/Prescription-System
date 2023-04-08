import React from "react";
import { Link } from "react-router-dom";

import "../css/Sidebar.css"

function SidebarHospital() {
    const items = [
        { name: "처방전 목록", path: "/" },
        { name: "환자 목록", path: "/people"}
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

export default SidebarHospital;