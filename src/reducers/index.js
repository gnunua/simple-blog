import {combineReducers} from "redux";
import {reducer as createPostFormReducer} from "redux-form";
import reducerPostsList from "./reducerPostsList";
import reducerCurrentPost from "./reducerCurrentPost";


const rootReducer = combineReducers({
    postsList: reducerPostsList,
    currentPost: reducerCurrentPost,
    form: createPostFormReducer

});

export default rootReducer;