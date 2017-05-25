import {asyncStatus} from "../helpers";
import {FETCH_POSTS_LIST_START, FETCH_POSTS_LIST_SUCCESS, FETCH_POSTS_LIST_FAIL} from "../actions/actionTypes";

const initialData = {
    posts: [],
    fetchingState: asyncStatus()
};

const reducerPostsList = (state = initialData, action) => {
    switch (action.type) {
        case FETCH_POSTS_LIST_START:
            return {
                ...state,
                fetchingState: asyncStatus(true)
            };
        case FETCH_POSTS_LIST_FAIL:
            return {
                ...state,
                fetchingState: asyncStatus(false, false, true, action.payload)
            };
        case FETCH_POSTS_LIST_SUCCESS : {
            return {
                ...state,
                fetchingState: asyncStatus(false, true, false, null),
                posts: action.payload
            };
        }
        default:
            return state;
    }
};

export default reducerPostsList;
