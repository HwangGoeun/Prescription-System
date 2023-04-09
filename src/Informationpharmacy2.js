import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import './main.css';
import { Footer } from "./footer/footer";

const Informationpharmacy2= ()=>{
    const navigate =useNavigate();
    const hospital_list=
    [{hos_name:"관악약국", location:"서울 관악구",hos_tel:"02-555-5555", hos_code:"코드번호 1",
      doc_name:"을지문덕", doc_major:"25년",doc_code:"코드번호 12", 
      phar_name:"서울대병원",phar_tel:"02-111-1111"  }];
    //  [
    //     { name: "세브란스병원", location: "서울 서대문구"},
    //     { name: "길병원", location: "인천 남동구"},
    //     { name: "서울대병원", location: "서울 종로구"},
    //     { name: "성모병원", location: "서울 영등포구"}
    // ];
   
    return(
      <>
        <div>
            <h3 className="header">Information</h3>
            <div>
            {hospital_list.map((pre, index) => {
                    return (<>
                         <>
        <div className="sidebar"><p className="sidebar-item">약국 정보 기입란</p></div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <div>
          <h1></h1>
            <h3>약국 정보</h3>
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
            <h3>약사 정보</h3>
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
            <h3>연계 병원 정보</h3>
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
          </div>
      </>
                        </>
                          ); 
                        })}
                     
             </div>                
        </div>
        <Footer></Footer>
      </>
    )
};
export default Informationpharmacy2;