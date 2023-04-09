import React from "react";

function MedicineItem({ medicine }) {
    return (
        <div className="medicine-item">
            <p>{medicine.name}</p>
        </div>
    );
}

export default MedicineItem;