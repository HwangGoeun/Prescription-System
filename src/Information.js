import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import './main.css';
import { Footer } from "./footer/footer";
const Information= ()=>{
    const navigate =useNavigate();
    const hospital_list =
    [{hos_name:"세브란스병원", location:"서울 서대문구",hos_tel:"031-663-2213", hos_code:"코드번호 3443",
      doc_name:"홍길동", doc_major:"내과",doc_code:"코드번호 342", 
      phar_name:"길약국",phar_tel:"031-553-2211"  }];
    //  [
    //     { name: "세브란스병원", location: "서울 서대문구"},
    //     { name: "길병원", location: "인천 남동구"},
    //     { name: "서울대병원", location: "서울 종로구"},
    //     { name: "성모병원", location: "서울 영등포구"}
    // ];
   
    return (
        
        <div>
            <h3 className="header">Information</h3>
            <div className="sidebar"><p className="sidebar-item">병원 정보</p></div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <div>
            {hospital_list.map((pre, index) => {
                    return (<>
                         <>

        <div>
          <h3>병원 정보</h3>
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
          <h3>의사 정보</h3>
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
          <h3>연계 약국 정보</h3>
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
             <Footer></Footer>               
        </div>
 
        
    )
};
export default Information;