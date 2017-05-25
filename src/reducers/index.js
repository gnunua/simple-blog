import {combineReducers} from "redux";
import reducerPostsList from "./reducerPostsList";
import reducerCurrentPost from "./reducerCurrentPost";

const rootReducer = combineReducers({
    postsList: reducerPostsList,
    currentPost: reducerCurrentPost
});

export default rootReducer;