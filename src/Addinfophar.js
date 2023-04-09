import React,{useRef,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Addinfo_set_phar from './Addinfo_set_phar';
import Lists_phar from './Lists_phar';


const Addinfophar = () => {
    const [inputs,setInputs]=useState({
        phar_tel:'', phar_name:'',
        location:'', phar_code:'',
        doc_code:'', doc_name:'',doc_major:'',
        hos_name:'', hos_tel:'',

    });
    const navigate = useNavigate();
    const{phar_name,phar_code,location,phar_tel, doc_code,doc_name,doc_major,hos_name,hos_tel}=inputs;
    const handleHospitalChange = (e) => {
        const { name, value } = e.target;
        setInputs({
          ...inputs,
          [name]: value
        });
      };   //inputs에 값 넣음
    const [pharmacy, setPharmacy] = useState([
        {   id:1,
            phar_name:' ', phar_code:' ',
            location:' ', phar_tel:' ',
            doc_code:' ', doc_name:' ',
            doc_major:' ', hos_name:' ', hos_tel:' ',
        }               
    ]);//출력하는 값
    const nextId =useRef(2);
    const handleEdit = () => {
        const pharmacys = {
            id: nextId.current,
            phar_code,phar_name,
            phar_tel, location,
            doc_code,doc_major,doc_name,
            hos_name,hos_tel,
          }
          setPharmacy([...pharmacy, pharmacys])
          setInputs({
            phar_tel:'', phar_name:'',
            location:'', phar_code:'',
            doc_code:'', doc_name:'',doc_major:'',
            hos_name:'', hos_tel:''
          })
          console.log(nextId.current);
          nextId.current += 1;
          alert('추가 완료');
                   
       //  navigate('/Information');
    };

    const onRemove = id => {
      if (window.confirm('삭제하겠습니까?')) {
        // User clicked "OK"
        setPharmacy(pharmacy.filter(pharmacys => pharmacys.id !== id));
        alert('삭제 완료');
      }
    }
     //hospital hospitals 중 뭐가 주체 ? =hospital

  
  return (
    <>
    <Addinfo_set_phar
        phar_name={phar_name}
        phar_code={phar_code}
        phar_tel={phar_tel}
        location={location}
        doc_name={doc_name}
        doc_code={doc_code}
        doc_major={doc_major}
        hos_name={hos_name}
        hos_tel={hos_tel}
        handleHospitalChange={handleHospitalChange}
        handleEdit={handleEdit}
    />
     <Lists_phar pharmacy={pharmacy} onRemove={onRemove}/>     
    </>
  )
  }; 
export default Addinfophar;

