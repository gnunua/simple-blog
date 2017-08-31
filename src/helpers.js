// @flow

import {API_BASE_URL, KEY} from "./consts";

export type AsyncStatus = {|
    isStarted: boolean,
    isLoaded: boolean,
    isFailed: boolean,
    error: ?any,
|}

export const asyncStatus = (
    isStarted: boolean = false,
    isLoaded: boolean = false,
    isFailed: boolean = false,
    error: ?mixed = null
): AsyncStatus => ({
    isStarted,
    isLoaded,
    isFailed,
    error
});

export const makeUtlQueryString = (params) => {
    const esc = encodeURIComponent;
    return Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
};

export const handleRequest = (request: Promise<any>, start: Function, success: Function, fail: Function) => (dispatch: Function) => {
    dispatch(start());
    request
        .then(checkStatus)
        .then(parseJSON)
        .then(response => {
            dispatch(success(response));
        })
        .catch(err => {
            console.error(err);
            dispatch(fail(err));
        });
};

export const createRequest = (variable, url, params = {key: KEY}, payload) => {
    const fetchParams = {method: variable};
    if (variable === 'POST') {
        fetchParams.body = JSON.stringify(payload);
        fetchParams.headers = {
            'Content-Type': 'application/json'
        };
    }
    return fetch(`${API_BASE_URL}${url}?${makeUtlQueryString(params)}`, fetchParams);
};

const parseJSON = (response) => response.json();

const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
};