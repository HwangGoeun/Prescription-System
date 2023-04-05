import React from 'react';
import { useNavigate } from 'react-router-dom';
const Addinfo=()=>{
    const navigate =useNavigate();
    const handleConfirm = () => {
        if (window.confirm('Do you want to delete?')) {
          // User clicked "OK"
          alert('Information of hospital deleted');
        } 
    };
    const handleEdit =()=>{
        navigate("/Information");
    }
    return(
        <div>
         <button onClick={handleConfirm}>
            Delete information of Hospital
         </button>
        <button onClick={handleEdit}>Edit Information</button>
        </div>
    )
};
export default Addinfo;