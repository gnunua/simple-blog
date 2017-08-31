// @flow

import {asyncStatus} from "../helpers";
import {
    FETCH_POSTS_LIST_START,
    FETCH_POSTS_LIST_SUCCESS,
    FETCH_POSTS_LIST_FAIL,
    FETCH_POSTS_LIST_RESET
} from "../actions/actionTypes";
import type {Post} from "./reducerPost";
import type {AsyncStatus} from "../helpers";
import type {PostsAction} from "../actions";

export type PostsListState = {
    +posts: Array<Post>,
    +fetchingState: AsyncStatus
}

const initialData:PostsListState = {
    posts: [],
    fetchingState: asyncStatus()
};

const reducerPostsList = (state: PostsListState = initialData, action: PostsAction): PostsListState => {
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
        case FETCH_POSTS_LIST_RESET :
            return {
                ...state,
                fetchingState: asyncStatus()
            };
        default:
            return state;
    }
};

export default reducerPostsList;
