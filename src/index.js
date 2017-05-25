import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Route, IndexRoute, Router, browserHistory} from "react-router";
import configureStore from "./configureStore";
import Main from "./components/Main";
import PostsList from "./components/PostsList";
import PostsNew from "./components/PostNew";
import Post from "./components/Post";

ReactDOM.render(
    <Provider store={configureStore()}>
        <Router history={browserHistory}>
            <Route path="/" components={Main}>
                <IndexRoute component={PostsList}/>
                <Route path="/posts/new" component={PostsNew}/>
                <Route path="/posts/:id" component={Post}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
