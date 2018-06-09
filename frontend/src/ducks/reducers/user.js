import axios from 'axios';

const initialState = {
    informantInfo: {
        firstname: "",
        lastname: "",
        informantnotes: "",
        phone: "",
        address1: "",
        address2: "",
        city:"",
        state: "",
        zip:"",
        knowcommunityflag: "",
        knowreligionflag: "",
        knowcrimeflag: "", 
        knowschoolflag: "",
        availableflag: "" 
    },
    buyerInfo: {

    }
}
const SUBMIT_INFORMANT_INFO = "SUBMIT_INFORMANT_INFO"

export default (state = initialState, action) =>{
    switch (action.type) {
        case SUBMIT_INFORMANT_INFO: 
            let newInfomrnatInfo = {...state.informantInfo, ...action.payload}
                       
            console.log(111,action.payload)
            return{...state, ...newInfomrnatInfo}    
        default:
            return state
    }
}

export function submitInformantInfo(informantInfo){
    return {
        type: SUBMIT_INFORMANT_INFO,
        payload: /* axios.post('/api/informantInfo', */ informantInfo
    }
}