// @flow

import * as Actions from "./actionTypes";
import {createRequest, handleRequest} from "../helpers";

export const resetPostList = () => ({
    type: Actions.FETCH_POSTS_LIST_RESET
});

const fetchPostListStart = () => ({
    type: Actions.FETCH_POSTS_LIST_START
});

const fetchPotListSuccess = (response) => ({
    type: Actions.FETCH_POSTS_LIST_SUCCESS,
    payload: response
});

const fetchPostListFail = (err) => ({
    type: Actions.FETCH_POSTS_LIST_FAIL,
    payload: err
});

export const fetchPostList = () => handleRequest(
    createRequest('GET', '/posts'),
    fetchPostListStart,
    fetchPotListSuccess,
    fetchPostListFail
);

export const resetPost = () => ({
    type: Actions.FETCH_POST_RESET
});

const fetchPostStart = () => ({
    type: Actions.FETCH_POST_START
});

const fetchPostSuccess = (response) => ({
    type: Actions.FETCH_POST_SUCCESS,
    payload: response
});

const fetchPostFail = (err) => ({
    type: Actions.FETCH_POST_FAIL,
    payload: err
});

export const fetchPost = (id : string) => handleRequest(
    createRequest('GET', `/posts/${id}`),
    fetchPostStart,
    fetchPostSuccess,
    fetchPostFail
);

const deletePostStart = () => ({
    type: Actions.DELETE_POST_START
});

const deletePostSuccess = (response) => ({
    type: Actions.DELETE_POST_SUCCESS,
    payload: response
});

const deletePostFail = (err) => ({
    type: Actions.DELETE_POST_FAIL,
    payload: err
});

export const deletePost = (id:string) => handleRequest(
    createRequest('DELETE', `/posts/${id}`),
    deletePostStart,
    deletePostSuccess,
    deletePostFail
);

const createPostStart = () => ({
    type: Actions.CREATE_POST_START
});

const createPostSuccess = (response) => ({
    type: Actions.CREATE_POST_SUCCESS,
    payload: response
});

const createPostFail = (err) => ({
    type: Actions.CREATE_POST_FAIL,
    payload: err
});

export const createPost = (payload) => handleRequest(
    createRequest('POST', '/posts', undefined, ),
    createPostStart,
    createPostSuccess,
    createPostFail
);