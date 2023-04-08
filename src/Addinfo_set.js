import React from "react";

const Addinfo_set=({hos_name,hos_code,hos_tel,location,doc_code,doc_major,doc_name,phar_name,phar_tel,handleHospitalChange,handleEdit})=>{
    return(
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
                <th><button onClick={handleEdit}>추가</button></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> <input type="text"  name="hos_name"  value={hos_name}  onChange={handleHospitalChange} /></td>
                <td> <input type="text"  name="hos_code"  value={hos_code} onChange={handleHospitalChange} /></td>
                <td> <input type="text"  name="location"  value={location} onChange={handleHospitalChange} /></td>
                <td> <input type="text"  name="hos_tel"   value={hos_tel} onChange={handleHospitalChange} /></td>
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
                <td><input type="text"  name="doc_name"  value={doc_name} onChange={handleHospitalChange} /></td>
                <td><input type="text"  name="doc_major" value={doc_major} onChange={handleHospitalChange} /></td>
                <td><input type="text"  name="doc_code"  value={doc_code} onChange={handleHospitalChange} /></td>
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
                <td><input type="text"  name="phar_name"  value={phar_name} onChange={handleHospitalChange} /></td>
                <td><input type="text"  name="phar_tel"  value={phar_tel} onChange={handleHospitalChange} /></td>
              </tr>
            </tbody>
          </table>
          <h2>추가한 정보</h2>
        </div>
      </>
  
    )
    }
export default Addinfo_set;