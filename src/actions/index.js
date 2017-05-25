import * as Actions from "./actionTypes";
import {API_BASE_URL, KEY} from "../consts";
import {makeUtlQueryString} from "../helpers";

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

export const fetchPostList = () => {
    const request = fetch(`${API_BASE_URL}/posts?${makeUtlQueryString({key: "gnunuaapikey"})}`);

    return function (dispatch) {

        dispatch(fetchPostListStart());

        request
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                dispatch(fetchPotListSuccess(json));
                console.log('parsed json', json);
            })
            .catch(function (ex) {
                dispatch(fetchPostListFail(ex));
                console.log('parsing failed', ex);
            });

    };
};

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

export const fetchPost = (id) => {

    const request = fetch(`${API_BASE_URL}/posts/${id}?${makeUtlQueryString({key: "gnunuaapikey"})}`);

    return function (dispatch) {

        dispatch(fetchPostStart());

        request
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                dispatch(fetchPostSuccess(json));
                console.log('parsed json', json);
            })
            .catch(function (ex) {
                dispatch(fetchPostFail(ex));
                console.log('parsing failed', ex);
            });

    };

};

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

export const deletePost = (id) => {
    const request = fetch(`${API_BASE_URL}/posts/${id}?${makeUtlQueryString({key: "gnunuaapikey"})}`,
        {method: 'DELETE'}
    );

    return function (dispatch) {

        dispatch(deletePostStart());

        request
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                dispatch(deletePostSuccess(json));
                console.log('parsed json', json);
            })
            .catch(function (ex) {
                dispatch(deletePostFail(ex));
                console.log('parsing failed', ex);
            });

    };

};

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

export const createPost = (payload) => {

    const request = fetch(`${API_BASE_URL}/posts/?${makeUtlQueryString({key: "gnunuaapikey"})}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(payload)
        }
    );

    return function (dispatch) {

        dispatch(createPostStart());

        request
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                dispatch(createPostSuccess(json));
                console.log('created json', json);
            })
            .catch(function (ex) {
                dispatch(createPostFail(ex));
                console.log('created failed', ex);
            });

    };

};
