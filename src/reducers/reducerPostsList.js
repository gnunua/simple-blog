// @flow

import {asyncStatus} from "../helpers";
import type {PostsListState} from "../types";

const initialData:PostsListState = {
    posts: [],
    fetchingState: asyncStatus()
};

const reducerPostsList = (state: PostsListState = initialData, action: Action): PostsListState => {
    switch (action.type) {
        case 'FETCH_POSTS_LIST_START':
            return {
                ...state,
                fetchingState: asyncStatus(true)
            };
        case 'FETCH_POSTS_LIST_FAIL':
            return {
                ...state,
                fetchingState: asyncStatus(false, false, true, action.payload)
            };
        case 'FETCH_POSTS_LIST_SUCCESS' :
            return {
                fetchingState: asyncStatus(false, true, false, action.payload),
                posts: action.payload
            };
        case 'FETCH_POSTS_LIST_RESET' :
            return {
                ...state,
                fetchingState: asyncStatus()
            };
        default:
            return state;
    }
};

export default reducerPostsList;
