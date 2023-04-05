import React from 'react';
import { useNavigate } from 'react-router-dom';
const Addinfophar=()=>{
    const navigate =useNavigate();
    const handleConfirm = () => {
        if (window.confirm('Do you want to delete?')) {
          // User clicked "OK"
          alert('Information of pharmacy deleted');
        } 
    };
    const handleEdit =()=>{
        navigate("/Informationpharmacy");
    }
    return(
        <div>
         <button onClick={handleConfirm}>
            Delete information of Pharmacy
         </button>
        <button onClick={handleEdit}>Edit Information</button>
        </div>
    )
};
export default Addinfophar;