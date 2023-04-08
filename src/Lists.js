import React,{useState} from "react";
 

function List({hospitals,onRemove}){
    const {hos_name,hos_code,hos_tel,location,doc_code,doc_major,doc_name,phar_name,phar_tel, id} = hospitals;
    return (
        <div>
            <button onClick={()=>onRemove(id)}>삭제</button>
            <p> {hos_name} {hos_tel} {location} {hos_code}   
             </p>
             <p>
                 {doc_name} {doc_major} {doc_code}
             </p>
             <p>
                {phar_name} {phar_tel}
             </p>
             
        </div>
        
    )
};

function Lists({hospital, onRemove}) {
    return (
        <>
        <div>
          {hospital.map(
            hospitals=>(<List hospitals={hospitals} key={hospitals.id} onRemove={onRemove}/>))}       
        </div>
        </>
    )
}
 
export default Lists;