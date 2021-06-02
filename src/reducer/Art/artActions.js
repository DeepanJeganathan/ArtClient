import axios from 'axios'
import { FETCH_ART_FAIL, FETCH_ART_REQUEST, FETCH_ART_SUCCESS, FETCH_COMMENT_REQUEST, FETCH_TOTAL, POST_COMMENT_FAIL, POST_COMMENT_SUCCESS } from "./artTypes"

//http://192.168.0.105:8080/
const url = "http://192.168.0.105:8080/api/art"
const comment_url = "http://192.168.0.105:8080/api/comment"


export const fetch_art_request = () => {

    return {
        type: FETCH_ART_REQUEST
    }
}

export const fetch_art_success = (data) => {
    return {
        type: FETCH_ART_SUCCESS,
        payload: data
    }
}

export const fetch_art_fail = (errorMsg) => {
    return {
        type: FETCH_ART_FAIL,
        payload: errorMsg
    }
}

export const fetch_total = (count) => {
    return {
        type: FETCH_TOTAL,
        payload: count
    }
}

export const post_comment_success = () => {

    return {
        type: POST_COMMENT_SUCCESS,
        payload: true
    }
}

export const fetch_comment_request = (data) => {

    return {
        type: FETCH_COMMENT_REQUEST,
        payload: data
    }

}

export const post_comment_fail = () => {

    return {
        type: POST_COMMENT_FAIL,
        payload: false
    }
}

export const fetch_art = (num, searchTerm) => {

   
    return (dispatch) => {
        dispatch(fetch_art_request())
        axios.get(url, { params: { PageNumber: num, PageSize: 21, search: searchTerm } }).then(res => dispatch(fetch_art_success(res.data))).catch(err => {dispatch(fetch_art_fail(err.msg));console.log(err.msg)})
    }
}

export const fetch_count = () => {

    return (dispatch) => {
        axios.get(url + '/total').then(res => dispatch(fetch_total(res.data))).catch(err => console.log("error in getting page value"))
    }
}

export const post_comment = (msg, id) => {
    
    return (dispatch) => {
        axios.post(comment_url, msg).then(res => { dispatch(post_comment_success()); dispatch(fetch_comments(id)) }).catch(err => dispatch(post_comment_fail()))
    }
}
export const fetch_comments = (id) => {

    return (dispatch) => {
        axios.get(comment_url + '/' + id).then(res => dispatch(fetch_comment_request(res.data))).catch(err => console.log(err.msg))
    }
}