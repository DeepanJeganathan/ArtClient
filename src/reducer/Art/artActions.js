 import axios from 'axios'
import { FETCH_ART_FAIL, FETCH_ART_REQUEST, FETCH_ART_SUCCESS } from "./artTypes";

const url="http://localhost:50793/api/art";


export const fetch_art_request=()=>{

    return {
        type:FETCH_ART_REQUEST
    }
}

export const fetch_art_success=(data)=>{
    return {
        type:FETCH_ART_SUCCESS,
        payload:data
    }
}

export const fetch_art_fail=(errorMsg)=>{
    return{
        type:FETCH_ART_FAIL,
        payload:errorMsg
    }
}

export const fetch_art=()=>{

    console.log("fetch art hit at art Action")
    return(dispatch)=>{
        dispatch(fetch_art_request());
        axios.get(url).then(res=>dispatch(fetch_art_success(res.data))).catch(err=>dispatch(fetch_art_fail(err.msg)));
    }
}