import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {inputInfo0,inputInfo1,inputInfo2,inputInfo3,
      inputInfo4,inputInfo5,inputInfo6,inputInfo7,
      inputInfo8,inputInfo9,inputInfo10,inputInfo11,
      inputInfo12,inputInfo13,inputInfo14,inputInfo15,
      inputInfo16,inputInfo17,inputInfo18,inputInfo19,
      inputInfo20,inputInfo21,inputInfo22,inputInfo23,
      inputInfo24,inputInfo25,inputInfo26,inputInfo27,
      } from './userSlice';

const WebWrite = () => {

      const styleObj = {
            border: 1                                //input 테두리 없애기
      }


    const No = useSelector(state=>state.No);

    const patient_name = useSelector(state=>state.patient.name);
    const patient_phone = useSelector(state=>state.patient.phone);
    const patient_disease = useSelector(state=>state.patient.disease);

    const medical_facility_No = useSelector(state=>state.medical_facility.No);
    const medical_facility_name = useSelector(state=>state.medical_facility.name);
    const medical_facility_phone = useSelector(state=>state.medical_facility.phone);
    const medical_facility_email = useSelector(state=>state.medical_facility.email);

    const doctor_name = useSelector(state=>state.doctor.name);
    const doctor_license_type = useSelector(state=>state.doctor.license_type);
    const doctor_license_No = useSelector(state=>state.doctor.license_No);

    const drug_rx_0 = useSelector(state=>state.drug.rx);
    const drug_strength_0 = useSelector(state=>state.drug.strength);
    const drug_dose_0 = useSelector(state=>state.drug.dose);
    const drug_duration_0 = useSelector(state=>state.drug.duration);
    const drug_use_0 = useSelector(state=>state.drug.use);

    const drug_rx_1 = useSelector(state=>state.drug1.rx);
    const drug_strength_1 = useSelector(state=>state.drug1.strength);
    const drug_dose_1 = useSelector(state=>state.drug1.dose);
    const drug_duration_1 = useSelector(state=>state.drug1.duration);
    const drug_use_1 = useSelector(state=>state.drug1.use);

    const drug_rx_2 = useSelector(state=>state.drug2.rx);
    const drug_strength_2 = useSelector(state=>state.drug2.strength);
    const drug_dose_2 = useSelector(state=>state.drug2.dose);
    const drug_duration_2 = useSelector(state=>state.drug2.duration);
    const drug_use_2 = useSelector(state=>state.drug2.use);

    const injectable_drug = useSelector(state=>state.injectable_drug);
    const reference = useSelector(state=>state.reference);

    const dispatch = useDispatch();

      const handleOnInfo0 = (e) => {
            dispatch(inputInfo0(e.target.value));
      } 
      const handleOnInfo1 = (e) => {
            dispatch(inputInfo1(e.target.value));
      }
      const handleOnInfo2 = (e) => {
            dispatch(inputInfo2(e.target.value));
      } 
      const handleOnInfo3 = (e) => {
            dispatch(inputInfo3(e.target.value));
      }
      const handleOnInfo4 = (e) => {
            dispatch(inputInfo4(e.target.value));
      }
      const handleOnInfo5 = (e) => {
            dispatch(inputInfo5(e.target.value));
      } 
      const handleOnInfo6 = (e) => {
            dispatch(inputInfo6(e.target.value));
      }
      const handleOnInfo7 = (e) => {
            dispatch(inputInfo7(e.target.value));
      }
      const handleOnInfo8 = (e) => {
            dispatch(inputInfo8(e.target.value));
      } 
      const handleOnInfo9 = (e) => {
            dispatch(inputInfo9(e.target.value));
      }
      const handleOnInfo10 = (e) => {
            dispatch(inputInfo10(e.target.value));
      }
      const handleOnInfo11 = (e) => {
            dispatch(inputInfo11(e.target.value));
      } 
      const handleOnInfo12 = (e) => {
            dispatch(inputInfo12(e.target.value));
      }
      const handleOnInfo13 = (e) => {
            dispatch(inputInfo13(e.target.value));
      }
      const handleOnInfo14 = (e) => {
            dispatch(inputInfo14(e.target.value));
      }
      const handleOnInfo15 = (e) => {
            dispatch(inputInfo15(e.target.value));
      }
      const handleOnInfo16 = (e) => {
            dispatch(inputInfo16(e.target.value));
      }
      const handleOnInfo17 = (e) => {
            dispatch(inputInfo17(e.target.value));
      }
      const handleOnInfo18 = (e) => {
            dispatch(inputInfo18(e.target.value));
      } 
      const handleOnInfo19 = (e) => {
            dispatch(inputInfo19(e.target.value));
      }
      const handleOnInfo20 = (e) => {
            dispatch(inputInfo20(e.target.value));
      }
      const handleOnInfo21 = (e) => {
            dispatch(inputInfo21(e.target.value));
      }
      const handleOnInfo22 = (e) => {
            dispatch(inputInfo22(e.target.value));
      }
      const handleOnInfo23 = (e) => {
            dispatch(inputInfo23(e.target.value));
      }
      const handleOnInfo24 = (e) => {
            dispatch(inputInfo24(e.target.value));
      }
      const handleOnInfo25 = (e) => {
            dispatch(inputInfo25(e.target.value));
      }
      const handleOnInfo26 = (e) => {
            dispatch(inputInfo26(e.target.value));
      }
      const handleOnInfo27 = (e) => {
            dispatch(inputInfo27(e.target.value));
      }


	return (
		<>

            <h3>Write</h3>
            <Link to="/view"><button>저장하기</button></Link>
            <hr/>


            {/* <input type="text" value={No} onChange= {handleOnInfo0} style={styleObj}/> */}
            {/* <input type="text" value={patient_name} onChange= {handleOnInfo1} style={styleObj}/> */}
            {/* <input type="text" value={patient_phone} onChange= {handleOnInfo2} style={styleObj}/> */}
            {/* <input type="text" value={patient_disease} onChange= {handleOnInfo3} style={styleObj}/> */}

            {/* <input type="text" value={medical_facility_No} onChange= {handleOnInfo4} style={styleObj}/> */}
            {/* <input type="text" value={medical_facility_name} onChange= {handleOnInfo5} style={styleObj}/> */}
            {/* <input type="text" value={medical_facility_phone} onChange= {handleOnInfo6} style={styleObj}/> */}
            {/* <input type="text" value={medical_facility_email} onChange= {handleOnInfo7} style={styleObj}/> */}

            {/* <input type="text" value={doctor_name} onChange= {handleOnInfo8} style={styleObj}/> */}
            {/* <input type="text" value={doctor_license_type} onChange= {handleOnInfo9} style={styleObj}/> */}
            {/* <input type="text" value={doctor_license_No} onChange= {handleOnInfo10} style={styleObj}/> */}

            {/* <input type="text" value={drug_rx_0} onChange= {handleOnInfo11} style={styleObj}/> */}
            {/* <input type="text" value={drug_strength_0} onChange= {handleOnInfo12} style={styleObj}/> */}
            {/* <input type="text" value={drug_dose_0} onChange= {handleOnInfo13} style={styleObj}/> */}
            {/* <input type="text" value={drug_duration_0} onChange= {handleOnInfo14} style={styleObj}/> */}
            {/* <input type="text" value={drug_use_0} onChange= {handleOnInfo15} style={styleObj}/> */}

            {/* <input type="text" value={drug_rx_1} onChange= {handleOnInfo16} style={styleObj}/> */}
            {/* <input type="text" value={drug_strength_1} onChange= {handleOnInfo17} style={styleObj}/> */}
            {/* <input type="text" value={drug_dose_1} onChange= {handleOnInfo18} style={styleObj}/> */}
            {/* <input type="text" value={drug_duration_1} onChange= {handleOnInfo19} style={styleObj}/>      */}
            {/* <input type="text" value={drug_use_1} onChange= {handleOnInfo20} style={styleObj}/> */}

            {/* <input type="text" value={drug_rx_2} onChange= {handleOnInfo21} style={styleObj}/> */}
            {/* <input type="text" value={drug_strength_2} onChange= {handleOnInfo22} style={styleObj}/> */}
            {/* <input type="text" value={drug_dose_2} onChange= {handleOnInfo23} style={styleObj}/> */}
            {/* <input type="text" value={drug_duration_2} onChange= {handleOnInfo24} style={styleObj}/> */}
            {/* <input type="text" value={drug_use_2} onChange= {handleOnInfo25} style={styleObj}/> */}

            {/* <input type="text" value={injectable_drug} onChange= {handleOnInfo26} style={styleObj}/> */}
            {/* <input type="text" value={reference} onChange= {handleOnInfo27} style={styleObj}/> */}



            <table border="1" width = "1500" height="1000" align="center">

<thead>
  <tr>
    <th colspan="10" height="100" align="center" valign = "middle">처방전</th>
  </tr>
</thead>

<tbody>
  <tr>
    <td align="center" valign = "middle">교부번호</td>
    <td colspan="2" >No. <input type="text" value={No} onChange= {handleOnInfo0} style={styleObj}/> </td>
    <td rowspan="4" align="center" valign = "middle">의료기관</td>
    <td align="center" valign = "middle">의료기관 번호</td>
    <td colspan="2"><input type="text" value={medical_facility_No} onChange= {handleOnInfo4} style={styleObj}/></td>
  </tr>
  <tr>
    <td rowspan="3" align="center" valign = "middle">환자</td>
    <td rowspan="2" align="center" valign = "middle">성명</td>
    <td rowspan="2"><input type="text" value={patient_name} onChange= {handleOnInfo1} style={styleObj}/></td>
    <td align="center" valign = "middle">명칭</td>
    <td colspan="2"><input type="text" value={medical_facility_name} onChange= {handleOnInfo5} style={styleObj}/></td>
  </tr>
  <tr>
    <td align="center" valign = "middle">전화번호</td>
    <td colspan="2"><input type="text" value={medical_facility_phone} onChange= {handleOnInfo6} style={styleObj}/></td>
  </tr>
  <tr>
    <td align="center" valign = "middle">전화번호</td>
    <td><input type="text" value={patient_phone} onChange= {handleOnInfo2} style={styleObj}/></td>
    <td align="center" valign = "middle">E-mail주소</td>
    <td colspan="2"><input type="text" value={medical_facility_email} onChange= {handleOnInfo7} style={styleObj}/></td>
  </tr>
  <tr>
    <td colspan="2" rowspan="2" align="center" valign = "middle">병명</td>
    <td rowspan="2"><input type="text" value={patient_disease} onChange= {handleOnInfo3} style={styleObj}/></td>
    <td rowspan="2" align="center" valign = "middle">담당의 성명</td>
    <td rowspan="2"><input type="text" value={doctor_name} onChange= {handleOnInfo8} placeholder="(서명 또는 날인)" style={styleObj}/></td>
    <td align="center" valign = "middle">면허종별</td>
    <td><input type="text" value={doctor_license_type} onChange= {handleOnInfo9} style={styleObj}/></td>
  </tr>
  <tr>
    <td align="center" valign = "middle">면허번호</td>
    <td>제 <input type="text" value={doctor_license_No} onChange= {handleOnInfo10} style={styleObj}/>호</td>
  </tr>
  <tr>
    <td colspan="3" align="center" valign = "middle">처방 의약품의 명칭</td>
    <td align="center" valign = "middle">1회 투여량</td>
    <td align="center" valign = "middle">1일 투여횟수</td>
    <td align="center" valign = "middle">총 투약일수</td>
    <td align="center" valign = "middle">용법</td>
  </tr>
  <tr>
    <td colspan="3"><input type="text" value={drug_rx_0} onChange= {handleOnInfo11} style={styleObj}/></td>
    <td>  <input type="text" value={drug_strength_0} onChange= {handleOnInfo12} style={styleObj}/>  </td>
    <td>  <input type="text" value={drug_dose_0} onChange= {handleOnInfo13} style={styleObj}/>  </td>
    <td><input type="text" value={drug_duration_0} onChange= {handleOnInfo14} style={styleObj}/></td>
    <td><input type="text" value={drug_use_0} onChange= {handleOnInfo15} style={styleObj}/></td>
  </tr>
  <tr>
  <td colspan="3"><input type="text" value={drug_rx_1} onChange= {handleOnInfo16} style={styleObj}/></td>
  <td><input type="text" value={drug_strength_1} onChange= {handleOnInfo17} style={styleObj}/></td>
    <td><input type="text" value={drug_dose_1} onChange= {handleOnInfo18} style={styleObj}/></td>
    <td><input type="text" value={drug_duration_1} onChange= {handleOnInfo19} style={styleObj}/></td>
    <td><input type="text" value={drug_use_1} onChange= {handleOnInfo20} style={styleObj}/></td>
  </tr>
  <tr>
  <td colspan="3"><input type="text" value={drug_rx_2} onChange= {handleOnInfo21} style={styleObj}/></td>
    <td>  <input type="text" value={drug_strength_2} onChange= {handleOnInfo22} style={styleObj}/>  </td>
    <td>  <input type="text" value={drug_dose_2} onChange= {handleOnInfo23} style={styleObj}/>  </td>
    <td>  <input type="text" value={drug_duration_2} onChange= {handleOnInfo24} style={styleObj}/>  </td>
    <td>   <input type="text" value={drug_use_2} onChange= {handleOnInfo25} style={styleObj}/>  </td>
  </tr>
  <tr>
    <td colspan="6" align="center" valign = "middle">주사제 처방내역</td>
    <td align="center" valign = "middle">조제시 참고사항</td>
  </tr>
  <tr>
    <td colspan="6"><input type="text" value={injectable_drug} onChange= {handleOnInfo26} style={styleObj}/></td>
    <td><input type="text" value={reference} onChange= {handleOnInfo27} style={styleObj}/></td>
  </tr>
</tbody>

</table>



      </>
	);
};

export default WebWrite;