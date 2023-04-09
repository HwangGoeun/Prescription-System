import React from 'react';
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';


const WebView = () => {


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

	return (
          <>
            <h3>View</h3>
            <Link to="/write"><button>수정하기</button></Link>
			      <hr />


			<table border="1" width = "1500" height="1000" align="center">

<thead>
  <tr>
    <th colspan="10" height="100" align="center" valign = "middle">처방전</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td align="center" valign = "middle">교부번호</td>
    <td colspan="2" > <p>No. {No}</p> </td>
    <td rowspan="4" align="center" valign = "middle">의료기관</td>
    <td align="center" valign = "middle">의료기관 번호</td>
    <td colspan="2"><p>{medical_facility_No}</p></td>
  </tr>
  <tr>
    <td rowspan="3" align="center" valign = "middle">환자</td>
    <td rowspan="2" align="center" valign = "middle">성명</td>
    <td rowspan="2"><p>{patient_name}</p></td>
    <td align="center" valign = "middle">명칭</td>
    <td colspan="2"><p>{medical_facility_name}</p></td>
  </tr>
  <tr>
    <td align="center" valign = "middle">전화번호</td>
    <td colspan="2"><p>{medical_facility_phone}</p></td>
  </tr>
  <tr>
    <td align="center" valign = "middle">전화번호</td>
    <td><p>{patient_phone}</p></td>
    <td align="center" valign = "middle">E-mail주소</td>
    <td colspan="2"><p>{medical_facility_email}</p></td>
  </tr>
  <tr>
    <td colspan="2" rowspan="2" align="center" valign = "middle">병명</td>
    <td rowspan="2"><p>{patient_disease}</p></td>
    <td rowspan="2" align="center" valign = "middle">담당의 성명</td>
    <td rowspan="2"><p>{doctor_name}</p></td>
    <td align="center" valign = "middle">면허종별</td>
    <td><p>{doctor_license_type}</p></td>
  </tr>
  <tr>
    <td align="center" valign = "middle">면허번호</td>
    <td><p>제 {doctor_license_No} 호</p></td>
  </tr>
  <tr>
    <td colspan="3" align="center" valign = "middle">처방 의약품의 명칭</td>
    <td align="center" valign = "middle">1회 투여량</td>
    <td align="center" valign = "middle">1일 투여횟수</td>
    <td align="center" valign = "middle">총 투약일수</td>
    <td align="center" valign = "middle">용법</td>
  </tr>
  <tr>
    <td colspan="3"> <p>{drug_rx_0}</p> </td>
    <td><p>{drug_strength_0}</p></td>
    <td><p>{drug_dose_0}</p></td>
    <td><p>{drug_duration_0}</p></td>
    <td><p>{drug_use_0}</p></td>
  </tr>
  <tr>
    <td colspan="3"><p>{drug_rx_1}</p></td>  
    <td><p>{drug_strength_1}</p></td>
    <td><p>{drug_dose_1}</p></td>
    <td><p>{drug_duration_1}</p></td>
    <td><p>{drug_use_1}</p></td>
  </tr>
  <tr>
  <td colspan="3"><p>{drug_rx_2}</p></td>
  <td><p>{drug_strength_2}</p></td>
    <td><p>{drug_dose_2}</p></td>
    <td><p>{drug_duration_2}</p></td>
    <td><p>{drug_use_2}</p></td>
  </tr>
  <tr>
    <td colspan="6" align="center" valign = "middle">주사제 처방내역</td>
    <td align="center" valign = "middle">조제시 참고사항</td>
  </tr>
  <tr>
    <td colspan="6"><p>{injectable_drug}</p></td>
    <td><p>{reference}</p></td>
  </tr>
</tbody>
</table>

		</>
	);
};

export default WebView;