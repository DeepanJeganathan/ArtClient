
import { FETCH_ART_FAIL, FETCH_ART_REQUEST, FETCH_ART_SUCCESS } from "./artTypes"


const initialState={
    loading: false,
    data: [],
    error: '',
    pageCount:1
}

const artReducer=(state=initialState,action)=>{


switch(action.type){

    case FETCH_ART_REQUEST:
    console.log('loading')
        return {...state, loading:true};
    case FETCH_ART_SUCCESS:
    console.log('success')
        console.log(action.payload.length);
        return {...state, loading:false, data:[...action.payload]}
    case FETCH_ART_FAIL:
    console.log('fail')
        return {...state, loading:false, error:action.payload}
        default:
            return state;
}


}
export default artReducer;