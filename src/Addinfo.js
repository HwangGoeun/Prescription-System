import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Addinfo = () => {

    const navigate = useNavigate();
    const [hospital, setHospital] = useState([]);
    const [doctor, setDoctor] = useState([]);
    const [pharmacy, setPharmacy] = useState([]);
  
    const handleConfirm = () => {
      if (window.confirm('Do you want to delete?')) {
        // User clicked "OK"
        alert('Information of hospital deleted');
      }
    };
  
    const handleEdit = () => {
      alert('추가 완료');
      navigate('/Information');
    };
    const handleHospitalChange = (e) => {
      const { name, value } = e.target;
      setHospital((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleDoctorChange = (e) => {
      const { name, value } = e.target;
      setDoctor((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handlePharmacyChange = (e) => {
      const { name, value } = e.target;
      setPharmacy((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
  return (
    <>
      <div>
        <h1>병원 정보 기입란</h1>
        <button onClick={handleConfirm}>삭제</button>
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
              <td> <input type="text" name="hos_name"  onChange={handleHospitalChange} /></td>
              <td> <input type="text" name="hos_code" onChange={handleHospitalChange} /></td>
              <td> <input type="text" name="location"  onChange={handleHospitalChange} /></td>
              <td> <input type="text" name="hos_tel"  onChange={handleHospitalChange} /></td>
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
              <th><button onClick={handleEdit}>추가</button></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="text" name="doc_name"  onChange={handleDoctorChange} /></td>
              <td><input type="text" name="doc_major" onChange={handleDoctorChange} /></td>
              <td><input type="text" name="doc_code"  onChange={handleDoctorChange} /></td>
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
              <th><button onClick={handleEdit}>추가</button></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="text" name="phar_name"  onChange={handlePharmacyChange} /></td>
              <td><input type="text" name="phar_tel"  onChange={handlePharmacyChange} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
  }; 

export default Addinfo;
