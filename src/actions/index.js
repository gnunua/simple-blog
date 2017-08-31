// @flow

import * as Actions from "./actionTypes";
import {createRequest, handleRequest} from "../helpers";
import type {Post} from "../reducers/reducerPost";

export type SimpleAction = {
    type: string,
    error?: string,
    payload?: Post
};

export type PostsAction = {
    type: string,
    error?: string,
    payload?: Array<Post>
}

export const resetPostList = (): PostsAction => ({
    type: Actions.FETCH_POSTS_LIST_RESET
});

const fetchPostListStart = (): PostsAction => ({
    type: Actions.FETCH_POSTS_LIST_START
});

const fetchPotListSuccess = (response): PostsAction => ({
    type: Actions.FETCH_POSTS_LIST_SUCCESS,
    payload: response
});

const fetchPostListFail = (err): PostsAction => ({
    type: Actions.FETCH_POSTS_LIST_FAIL,
    payload: err
});

export const fetchPostList = () => handleRequest(
    createRequest('GET', '/posts'),
    fetchPostListStart,
    fetchPotListSuccess,
    fetchPostListFail
);

export const resetPost = (): SimpleAction => ({
    type: Actions.FETCH_POST_RESET
});

const fetchPostStart = (): SimpleAction => ({
    type: Actions.FETCH_POST_START
});

const fetchPostSuccess = (response): SimpleAction => ({
    type: Actions.FETCH_POST_SUCCESS,
    payload: response
});

const fetchPostFail = (err): SimpleAction => ({
    type: Actions.FETCH_POST_FAIL,
    payload: err
});

export const fetchPost = (id: string) => handleRequest(
    createRequest('GET', `/posts/${id}`),
    fetchPostStart,
    fetchPostSuccess,
    fetchPostFail
);

const deletePostStart = (): SimpleAction => ({
    type: Actions.DELETE_POST_START
});

const deletePostSuccess = (response): SimpleAction => ({
    type: Actions.DELETE_POST_SUCCESS,
    payload: response
});

const deletePostFail = (err): SimpleAction => ({
    type: Actions.DELETE_POST_FAIL,
    payload: err
});

export const deletePost = (id: string) => handleRequest(
    createRequest('DELETE', `/posts/${id}`),
    deletePostStart,
    deletePostSuccess,
    deletePostFail
);

const createPostStart = (): SimpleAction => ({
    type: Actions.CREATE_POST_START
});

const createPostSuccess = (response): SimpleAction => ({
    type: Actions.CREATE_POST_SUCCESS,
    payload: response
});

const createPostFail = (err): SimpleAction => ({
    type: Actions.CREATE_POST_FAIL,
    payload: err
});

export const createPost = (payload) => handleRequest(
    createRequest('POST', '/posts', undefined),
    createPostStart,
    createPostSuccess,
    createPostFail
);