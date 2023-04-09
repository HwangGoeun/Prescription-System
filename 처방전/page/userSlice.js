import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    No: '',                 //0

    patient: {
        name: '',           //1
        phone: '',          //2
        disease: ''         //3
    },

    medical_facility:{
        No: '',             //4
        name: '',           //5
        phone: '',          //6
        email: ''           //7
    },  
    doctor:{
        name:'',            //8
        license_type:'',    //9
        license_No: ''      //10
    },
    drug: {
            rx: '',         //11
            strength: '',   //12
            dose:'',        //13
            duration:'',    //14
            use:''          //15
        },
        drug1:{
            rx: '',         //16
            strength: '',   //17
            dose:'',        //18
            duration:'',    //19
            use:''          //20
        },
        drug2:{
            rx: '',         //21
            strength: '',   //22
            dose:'',        //23
            duration:'',    //24
            use:''          //25
        },

      injectable_drug:'',   //26
      reference:''          //27

}


const userSlice = createSlice({
  name: 'userInfo',
  initialState,

  reducers: {
    inputInfo0: (state, action) =>{
        state.No = action.payload;
    },
    inputInfo1: (state, action) =>{
        state.patient.name = action.payload;
    },
    inputInfo2: (state, action) =>{
        state.patient.phone = action.payload;
    },
    inputInfo3: (state, action) =>{
        state.patient.disease = action.payload;
    },
    inputInfo4: (state, action) =>{
        state.medical_facility.No = action.payload;
    },
    inputInfo5: (state, action) =>{
        state.medical_facility.name = action.payload;
    },
    inputInfo6: (state, action) =>{
        state.medical_facility.phone = action.payload;
    },
    inputInfo7: (state, action) =>{
        state.medical_facility.email = action.payload;
    },
    inputInfo8: (state, action) =>{
        state.doctor.name = action.payload;
    },
    inputInfo9: (state, action) =>{
        state.doctor.license_type = action.payload;
    },
    inputInfo10: (state, action) =>{
        state.doctor.license_No = action.payload;
    },
    inputInfo11: (state, action) =>{
        state.drug.rx = action.payload;
    },
    inputInfo12: (state, action) =>{
        state.drug.strength = action.payload;
    },
    inputInfo13: (state, action) =>{
        state.drug.dose = action.payload;
    },
    inputInfo14: (state, action) =>{
        state.drug.duration = action.payload;
    },
    inputInfo15: (state, action) =>{
        state.drug.use = action.payload;
    },
    inputInfo16: (state, action) =>{
        state.drug1.rx = action.payload;
    },
    inputInfo17: (state, action) =>{
        state.drug1.strength = action.payload;
    },
    inputInfo18: (state, action) =>{
        state.drug1.dose = action.payload;
    },
    inputInfo19: (state, action) =>{
        state.drug1.duration = action.payload;
    },
    inputInfo20: (state, action) =>{
        state.drug1.use = action.payload;
    },
    inputInfo21: (state, action) =>{
        state.drug2.rx = action.payload;
    },
    inputInfo22: (state, action) =>{
        state.drug2.strength = action.payload;
    },
    inputInfo23: (state, action) =>{
        state.drug2.dose = action.payload;
    },
    inputInfo24: (state, action) =>{
        state.drug2.duration = action.payload;
    },
    inputInfo25: (state, action) =>{
        state.drug2.use = action.payload;
    },
    inputInfo26: (state, action) =>{
        state.injectable_drug = action.payload;
    },
    inputInfo27: (state, action) =>{
        state.reference = action.payload;
    }

}
});

export const {
    inputInfo0,inputInfo1,inputInfo2,inputInfo3,
    inputInfo4,inputInfo5,inputInfo6,inputInfo7,
      inputInfo8,inputInfo9,inputInfo10,inputInfo11,
      inputInfo12,inputInfo13,inputInfo14,inputInfo15,
      inputInfo16,inputInfo17,inputInfo18,inputInfo19,
      inputInfo20,inputInfo21,inputInfo22,inputInfo23,
      inputInfo24,inputInfo25,inputInfo26,inputInfo27,
    } = userSlice.actions;

export default userSlice.reducer;