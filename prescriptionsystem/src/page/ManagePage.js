import React from "react";

import "./Main.css"

function ManagePage() {
    return (
        <div>
            <h3 className="head">Management System</h3>
            <div className="main">
                <div>
                    <button>Hospital Management</button>
                    <button>Pharmacy Management</button>
                </div>

            </div>
        </div>
    );
}

export default ManagePage;