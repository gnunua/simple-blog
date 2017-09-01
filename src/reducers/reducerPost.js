// @flow

import {asyncStatus} from "../helpers";
import type {PostState} from '../types';

const initialData:PostState = {
    currentPost: null,
    fetchingState: asyncStatus(),
    deletedPost: null,
    deletingState: asyncStatus(),
    createdPost: null,
    creatingState: asyncStatus()
};

const reducerPost = (state: PostState = initialData, action: Action): PostState => {
    switch (action.type) {
        case 'FETCH_POST_START':
            return {
                ...state,
                fetchingState: asyncStatus(true)
            };
        case 'FETCH_POST_FAIL':
            return {
                ...state,
                fetchingState: asyncStatus(false, false, true, action.payload)
            };
        case 'FETCH_POST_SUCCESS':
            return {
                ...state,
                fetchingState: asyncStatus(false, true, false, null),
                currentPost: action.payload
            };
        case 'FETCH_POST_RESET':
            return {
                ...state,
                fetchingState: asyncStatus()
            };
        case 'DELETE_POST_START':
            return {
                ...state,
                deletingState: asyncStatus(true)
            };
        case 'DELETE_POST_FAIL':
            return {
                ...state,
                deletingState: asyncStatus(false, false, true, action.payload)
            };
        case 'DELETE_POST_SUCCESS' :
            return {
                ...state,
                deletingState: asyncStatus(false, true, false, null),
                deletedPost: action.payload
            };
        case 'CREATE_POST_START':
            return {
                ...state,
                creatingState: asyncStatus(true)
            };
        case 'CREATE_POST_FAIL':
            return {
                ...state,
                creatingState: asyncStatus(false, false, true, action.payload)
            };
        case 'CREATE_POST_SUCCESS':
            return {
                ...state,
                creatingState: asyncStatus(false, true, false, null),
                createdPost: action.payload
            };
        default:
            return state;
    }
};

export default reducerPost;
