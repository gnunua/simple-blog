// @flow

import React, {Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {fetchPost, deletePost, resetPost, resetPostList} from "../actions";
import {postSelector} from "../selectors";
import Loader from "../components/Loader";
import PostContent from "../components/PostContent";
import type { Dispatch } from "redux";


type Props = {
    post: {},
    deleted: boolean,
    match: {
        params: {
            id: string,
        }
    },
    history: {
        push: (path: string)=>void
    },
    fetchPost: Function,
    deletePost: Function,
    resetPostList: Function,
    resetPost: Function,
    isLoaded: boolean
}

class Post extends Component<Props> {
    props: Props;
    deletePostHandler: ()=>void;

    constructor(props: Props) {
        super(props);
        this.deletePostHandler = this.deletePostHandler.bind(this);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
        this.props.resetPostList();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.deleted === false && nextProps.deleted === true) {
            this.props.history.push('/');
            this.props.resetPost();
        }
    }

    deletePostHandler() {
        this.props.deletePost(this.props.match.params.id);
        this.props.resetPost();
    }

    render() {
        if (this.props.isLoaded === false) {
            return (
                <Loader/>
            );
        }

        return (
            <PostContent {...this.props.post} deletePost={this.deletePostHandler}/>
        );
    }
}

const mapStateToProps = (state) => ({...postSelector(state)});

const mapDispatchToProps = (dispatch: Dispatch<*>) => bindActionCreators({
    fetchPost,
    deletePost,
    resetPostList,
    resetPost
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Post);