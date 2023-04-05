import React from "react";
import { Link } from "react-router-dom";

import SidebarItemManage from "./SidebarItemManage";

import "./Sidebar.css"

function SidebarManage() {
    const itemsManage = [
        { name: "병원 목록", path: "/" },
        { name: "약국 목록", path: "/pharmacy"}
    ];

    return (
        <div className="sidebar">
            {itemsManage.map((itemManage, index) => {
                return (
                    <Link to={itemManage.path} key={index}>
                        <SidebarItemManage 
                            itemManage={itemManage}
                        />
                    </Link>
                );
            })}
        </div>
    );
}

export default SidebarManage;