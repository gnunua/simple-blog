import React, {Component} from "react";
import {Link, withRouter} from "react-router";

import {connect} from 'react-redux';
import {fetchPost, deletePost} from "../actions";

class Post extends Component {
    constructor(props) {
        super(props);
        this.deletePostHandler = this.deletePostHandler.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchPost(this.props.params.id));
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.isLoaded === false && nextProps.isLoaded === true) {
            this.props.router.push('/');
        }
    }

    deletePostHandler() {
        this.props.dispatch(deletePost(this.props.params.id));
    }

    render() {
        if (!this.props.currentPost) {
            return (null);
        }
        const {currentPost: {title, categories, content}} = this.props;

        return (
            <div>
                <Link to="/">
                    index
                </Link>

                <Link to="/">
                    back to posts
                </Link>
                <button onClick={this.deletePostHandler}>
                    delete post
                </button>

                <h2>{title}</h2>
                <p>categries : {categories}</p>
                <p>{content}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentPost: state.post.currentPost,
    isLoaded: state.post.deletingState.isLoaded
});

export default connect(mapStateToProps)(withRouter(Post));