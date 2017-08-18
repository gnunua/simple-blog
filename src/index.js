// @flow

import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import configureStore from "./configureStore";
import Main from "./components/Main";
import PostsList from "./containers/PostsList";
import PostsNew from "./containers/PostNew";
import Post from "./containers/Post";

const App = () => (
    <Main>
        <Switch>
            <Route exact path="/" component={PostsList}/>
            <Route path="/posts/new" component={PostsNew}/>
            <Route exact path="/posts/:id" component={Post}/>
            <Route render={() => (<h2>page not found!</h2>)}/>
        </Switch>
    </Main>
);

ReactDOM.render(
    <Provider store={configureStore()}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
