import React from "react";

function SidebarItemManage({ itemManage }) {
    return (
        <div className="sidebar-item">
            <p>{itemManage.name}</p>
        </div>
    );
}

export default SidebarItemManage;