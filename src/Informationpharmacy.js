import React,{useState} from "react";
import {useNavigate} from "react-router-dom";



const Informationpharmacy= ()=>{
    const navigate =useNavigate();
    const hospital_list=
    [{hos_name:"가천약국", location:"성남 수정구",hos_tel:"031-112-5532", hos_code:"코드번호 4",
      doc_name:"이순신", doc_major:"15년",doc_code:"코드번호 231", 
      phar_name:"길병원",phar_tel:"031-113-2211"  }];
    //  [
    //     { name: "세브란스병원", location: "서울 서대문구"},
    //     { name: "길병원", location: "인천 남동구"},
    //     { name: "서울대병원", location: "서울 종로구"},
    //     { name: "성모병원", location: "서울 영등포구"}
    // ];
   
    return (
        
        <div>
            <h1>Information</h1>
            <div>
            {hospital_list.map((pre, index) => {
                    return (<>
                         <>
        <div>
          <h1>약국 정보 기입란</h1>
        </div>
        <div>
          <p>약국 정보</p>
          <table>
            <thead>
              <tr>
                <th>약국</th>
                <th>약국 코드</th>
                <th>주소</th>
                <th>대표 연락처</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {pre.hos_name}</td>
                <td> {pre.hos_code}</td>
                <td> {pre.location}</td>
                <td> {pre.hos_tel}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <p>약사 정보</p>
          <table>
            <thead>
              <tr>
                <th>약사명</th>
                <th>경력</th>
                <th>약사 코드</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{pre.doc_name}</td>
                <td>{pre.doc_major}</td>
                <td>{pre.doc_code}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <p>연계 병원 정보</p>
          <table>
            <thead>
              <tr>
                <th>병원명</th>
                <th>전화번호</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{pre.phar_name}</td>
                <td>{pre.phar_tel}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
                        </>
                          ); 
                        })}
                    ;  
             </div>                
        </div>
        
    )
};
export default Informationpharmacy;