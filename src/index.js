import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Route, IndexRoute, Router, browserHistory} from "react-router";
import configureStore from "./configureStore";
import Main from "./components/Main";
import PostsList from "./containers/PostsList";
import PostsNew from "./containers/PostNew";
import Post from "./containers/Post";

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
