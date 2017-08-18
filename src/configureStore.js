// @flow

import {applyMiddleware, createStore, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

const configureStore = ():void => {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

};

export default configureStore;