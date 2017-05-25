import {asyncStatus} from "../helpers";
import {FETCH_POST_START, FETCH_POST_SUCCESS, FETCH_POST_FAIL} from "../actions/actionTypes";

const initialData = {
    post: null,
    fetchingState: asyncStatus()
};

const reducerCurrentPost = (state = initialData, action) => {
    switch (action.type) {
        case FETCH_POST_START:
            return {
                ...state,
                fetchingState: asyncStatus(true)
            };
        case FETCH_POST_FAIL:
            return {
                ...state,
                fetchingState: asyncStatus(false, false, true, action.payload)
            };
        case FETCH_POST_SUCCESS : {
            return {
                ...state,
                fetchingState: asyncStatus(false, true, false, null),
                post: action.payload
            };
        }
        default:
            return state;
    }
};

export default reducerCurrentPost;
