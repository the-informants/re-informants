import axios from 'axios'


const initialState = {
    searchvalue: []
}

const SEARCHVALUE = 'SEARCHVALUE'

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCHVALUE + '_FULFILLED':
            return { ...state, searchvalue: action.payload.searchvalue }
        default:    
            return state;
    }
}

export function search(searchvalue) {
    return {
      type: SEARCHVALUE
    //   payload: axios.post(`/api/search?searchvalue=${searchvalue}`)  
        }
    }

    //Create a second function that pushes the current search value to the redux store. 