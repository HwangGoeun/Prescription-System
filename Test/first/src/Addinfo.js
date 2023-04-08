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

    const gotoMain=()=>{
        navigate("/");
    };
    const handleEdit =()=>{
        navigate("/Information");
    }
    return(
        <>
        <div>
         <button onClick={handleConfirm}>
            Delete information of Hospital
         </button>
        <button onClick={handleEdit}>Edit Information</button>
        </div>
        <div>
            <button style={{marginTop : 100, marginLeft : 20, height: 50, width: 200, fontSize: 30, borderRadius: 20}} onClick={gotoMain}>로그아웃</button>
        </div>
        </>
    )
};
export default Addinfo;