import {combineReducers} from "redux";
import reducerPostsList from "./reducerPostsList";

const rootReducer = combineReducers({
    postsList: reducerPostsList
});

export default rootReducer;