import React,{useRef,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Addinfo_set from './Addinfo_set';
import Lists from './Lists';


const Addinfo = () => {
    const [inputs,setInputs]=useState({
        hos_tel:'', hos_name:'',
        location:'', hos_code:'',
        doc_code:'', doc_name:'',doc_major:'',
        phar_name:'', phar_tel:'',

    });
    const navigate = useNavigate();
    const{hos_name,hos_code,location,hos_tel, doc_code,doc_name,doc_major,phar_name,phar_tel}=inputs;
    const handleHospitalChange = (e) => {
        const { name, value } = e.target;
        setInputs({
          ...inputs,
          [name]: value
        });
      };   //inputs에 값 넣음
    const [hospital, setHospital] = useState([
        {   id:1,
            hos_name:' ', hos_code:' ',
            location:' ', hos_tel:' ',
            doc_code:' ', doc_name:' ',
            doc_major:' ', phar_name:' ', phar_tel:' ',
        }               
    ]);//출력하는 값
    const nextId =useRef(2);
    const handleEdit = () => {
        const hospitals = {
            id: nextId.current,
            hos_code,hos_name,
            hos_tel, location,
            doc_code,doc_major,doc_name,
            phar_name,phar_tel,
          }
          setHospital([...hospital, hospitals])
          setInputs({
            hos_tel:'', hos_name:'',
            location:'', hos_code:'',
            doc_code:'', doc_name:'',doc_major:'',
            phar_name:'', phar_tel:''
          })
          console.log(nextId.current);
          nextId.current += 1;
          alert('추가 완료');
                   
       //  navigate('/Information');
    };

    const onRemove = id => {
      if (window.confirm('삭제하겠습니까?')) {
        // User clicked "OK"
        setHospital(hospital.filter(hospitals => hospitals.id !== id));
        alert('삭제 완료');
      }
    }
     //hospital hospitals 중 뭐가 주체 ? =hospital

  
  return (
    <>
    <Addinfo_set
        hos_name={hos_name}
        hos_code={hos_code}
        hos_tel={hos_tel}
        location={location}
        doc_name={doc_name}
        doc_code={doc_code}
        doc_major={doc_major}
        phar_name={phar_name}
        phar_tel={phar_tel}
        handleHospitalChange={handleHospitalChange}
        handleEdit={handleEdit}
    />
     <Lists hospital={hospital} onRemove={onRemove}/>     
    </>
  )
  }; 
export default Addinfo;

