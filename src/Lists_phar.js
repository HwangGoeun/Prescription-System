import React,{useState} from "react";
 

function List_phar({pharmacys,onRemove}){
    const {hos_name,hos_code,hos_tel,location,doc_code,doc_major,doc_name,phar_name,phar_tel, id} = pharmacys;
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

function Lists_phar({pharmacy, onRemove}) {
    return (
        <>
        <div>
          {pharmacy.map(
            pharmacys=>(<List_phar pharmacys={pharmacys} key={pharmacys.id} onRemove={onRemove}/>))}       
        </div>
        </>
    )
}
 
export default Lists_phar;