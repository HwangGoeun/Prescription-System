import React from "react";
import { Logout } from "../Logout/logout";

const WebWrite = () => {

    const styleObj = {
		// color: "yellow", 
		// backgroundColor: "black"
    border: 1                                //input 테두리 없애기
	}




    return(
<>

       <table border="1" width = "1500">

<thead>
  <tr>
    <th  colspan="10" height="100" align="center" valign = "middle" >처방전</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>교부번호</td>
    <td colspan="2"> <input type = "text" style={styleObj} /> </td>
    <td rowspan="4">의료기관</td>
    <td>의료기관 번호</td>
    <td colspan="2"><input type = "text" style={styleObj} /></td>
  </tr>
  <tr>
    <td rowspan="3">환자</td>
    <td rowspan="2">성명</td>
    <td rowspan="2"><input type = "text" style={styleObj} /></td>
    <td>명칭</td>
    <td colspan="2"><input type = "text" style={styleObj} /></td>
  </tr>
  <tr>
    <td>전화번호</td>
    <td colspan="2"><input type = "text" style={styleObj} /></td>
  </tr>
  <tr>
    <td>전화번호</td>
    <td><input type = "text" style={styleObj} /></td>
    <td>E-mail주소</td>
    <td colspan="2"><input type = "text" style={styleObj} /></td>
  </tr>
  <tr>
    <td colspan="2" rowspan="2">병명</td>
    <td rowspan="2"><input type = "text" style={styleObj} /></td>
    <td rowspan="2">담당의 성명</td>
    <td rowspan="2"><input type = "text" style={styleObj} placeholder="(서명 또는 날인)"/></td>
    <td>면허종별</td>
    <td><input type = "text" style={styleObj} /></td>
  </tr>
  <tr>
    <td>면허번호</td>
    <td><input type = "text" style={styleObj} /></td>
  </tr>
  <tr>
    <td colspan="3">처방 의약품의 명칭</td>
    <td>1회 투여량</td>
    <td>1일 투여횟수</td>
    <td>총 투약일수</td>
    <td>용법</td>
  </tr>
  <tr>
    <td colspan="3" rowspan="4"></td>
    <td><input type = "text" style={styleObj} /></td>
    <td><input type = "text" style={styleObj} /></td>
    <td><input type = "text" style={styleObj} /></td>
    <td><input type = "text" style={styleObj} /></td>
  </tr>
  <tr>
    <td><input type = "text" style={styleObj} /></td>
    <td><input type = "text" style={styleObj} /></td>
    <td><input type = "text" style={styleObj} /></td>
    <td><input type = "text" style={styleObj} /></td>
  </tr>
  <tr>
    <td><input type = "text" style={styleObj} /></td>
    <td><input type = "text" style={styleObj} /></td>
    <td><input type = "text" style={styleObj} /></td>
    <td><input type = "text" style={styleObj} /></td>
  </tr>
  <tr>
    <td><input type = "text" style={styleObj} /></td>
    <td><input type = "text" style={styleObj} /></td>
    <td><input type = "text" style={styleObj} /></td>
    <td>조제시 참고사항</td>
  </tr>
  <tr>
    <td colspan="6">주사제 처방내역(원내 조제 ㅁ, 원외 처방 ㅁ) </td>
    <td rowspan="3"><input type = "text" style={styleObj} /></td>
  </tr>
  <tr>
    <td colspan="6" rowspan="2"><input type = "text" style={styleObj} /></td>
  </tr>
</tbody>
</table>
<div>
  <Logout/>
</div>
</>
    );

};

export default WebWrite;