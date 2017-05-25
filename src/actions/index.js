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
    const request = fetch(`${API_BASE_URL}/posts/?${makeUtlQueryString({key: 123})}`);

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