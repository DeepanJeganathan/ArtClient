import { FETCH_ART_FAIL, FETCH_ART_REQUEST, FETCH_ART_SUCCESS, FETCH_COMMENT_REQUEST, FETCH_TOTAL, POST_COMMENT_FAIL, POST_COMMENT_SUCCESS } from "./artTypes"


const initialState = {
    loading: false,
    data: [],
    error: '',
    pageCount: 1,
    total: 0,
    comment_post: false,
    comments: []
}

const artReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_ART_REQUEST:
            return { ...state, loading: true };
        case FETCH_ART_SUCCESS:
            return { ...state, loading: false, data: [...action.payload] }
        case FETCH_ART_FAIL:
            return { ...state, loading: false, error: action.payload }
        case FETCH_TOTAL:
            return { ...state, total: action.payload }
        case POST_COMMENT_SUCCESS:
            return { ...state, comment_post: true }
        case POST_COMMENT_FAIL:
            return { ...state, comment_post: false }
        case FETCH_COMMENT_REQUEST:
            return { ...state, comments: action.payload }
        default:
            return state;
    }


}
export default artReducer;