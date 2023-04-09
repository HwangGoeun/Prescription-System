import React,{useState} from "react";
import {useNavigate} from "react-router-dom";



const Information2= ()=>{
    const navigate =useNavigate();
    const hospital_list2=
    [{hos_name:"길병원", location:"인천 동구",hos_tel:"032-123-4567", hos_code:"코드번호 3",
      doc_name:"강감찬", doc_major:"외과",doc_code:"코드번호 441", 
      phar_name:"희망 약국",phar_tel:"031-223-2211"  }];
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
            {hospital_list2.map((pre, index) => {
                    return (<>
                         <>
        <div>
          <h1>병원 정보 기입란</h1>
        </div>
        <div>
          <p>병원 정보</p>
          <table>
            <thead>
              <tr>
                <th>병원</th>
                <th>병원 코드</th>
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
          <p>의사 정보</p>
          <table>
            <thead>
              <tr>
                <th>담당의</th>
                <th>진료학과</th>
                <th>의사 코드</th>
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
          <p>연계 약국 정보</p>
          <table>
            <thead>
              <tr>
                <th>약국명</th>
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
export default Information2;