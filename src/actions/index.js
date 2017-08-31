// @flow

import * as Actions from "./actionTypes";
import {createRequest, handleRequest} from "../helpers";
import type {Action} from "./types.js";

export const resetPostList = (): Action => ({
    type: Actions.FETCH_POSTS_LIST_RESET
});

const fetchPostListStart = (): Action => ({
    type: Actions.FETCH_POSTS_LIST_START
});

const fetchPotListSuccess = (response): Action => ({
    type: Actions.FETCH_POSTS_LIST_SUCCESS,
    payload: response
});

const fetchPostListFail = (err): Action => ({
    type: Actions.FETCH_POSTS_LIST_FAIL,
    payload: err
});

export const fetchPostList = () => handleRequest(
    createRequest('GET', '/posts'),
    fetchPostListStart,
    fetchPotListSuccess,
    fetchPostListFail
);

export const resetPost = (): Action => ({
    type: Actions.FETCH_POST_RESET
});

const fetchPostStart = (): Action => ({
    type: Actions.FETCH_POST_START
});

const fetchPostSuccess = (response): Action => ({
    type: Actions.FETCH_POST_SUCCESS,
    payload: response
});

const fetchPostFail = (err): Action => ({
    type: Actions.FETCH_POST_FAIL,
    payload: err
});

export const fetchPost = (id: string) => handleRequest(
    createRequest('GET', `/posts/${id}`),
    fetchPostStart,
    fetchPostSuccess,
    fetchPostFail
);

const deletePostStart = (): Action => ({
    type: Actions.DELETE_POST_START
});

const deletePostSuccess = (response): Action => ({
    type: Actions.DELETE_POST_SUCCESS,
    payload: response
});

const deletePostFail = (err): Action => ({
    type: Actions.DELETE_POST_FAIL,
    payload: err
});

export const deletePost = (id: string) => handleRequest(
    createRequest('DELETE', `/posts/${id}`),
    deletePostStart,
    deletePostSuccess,
    deletePostFail
);

const createPostStart = (): Action => ({
    type: Actions.CREATE_POST_START
});

const createPostSuccess = (response): Action => ({
    type: Actions.CREATE_POST_SUCCESS,
    payload: response
});

const createPostFail = (err): Action => ({
    type: Actions.CREATE_POST_FAIL,
    payload: err
});

export const createPost = (payload) => handleRequest(
    createRequest('POST', '/posts', undefined),
    createPostStart,
    createPostSuccess,
    createPostFail
);