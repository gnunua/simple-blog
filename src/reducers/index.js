// @flow

import {combineReducers} from "redux";
import {reducer as createPostFormReducer} from "redux-form";
import reducerPostsList from "./reducerPostsList";
import reducerPost from "./reducerPost";

const rootReducer = combineReducers({
    postsList: reducerPostsList,
    post: reducerPost,
    form: createPostFormReducer
});

export default rootReducer;