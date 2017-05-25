import React, {Component} from "react";
import {Link, withRouter} from "react-router";
import {connect} from 'react-redux';
import {fetchPost, deletePost} from "../actions";
import {postSelector} from "../selectors";
import Loader from "../components/Loader";

class Post extends Component {
    constructor(props) {
        super(props);
        this.deletePostHandler = this.deletePostHandler.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchPost(this.props.params.id));
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.deleted === false && nextProps.deleted === true) {
            this.props.router.push('/');
        }
    }

    deletePostHandler() {
        this.props.dispatch(deletePost(this.props.params.id));
    }

    render() {
        if (!this.props.post) {
            return (
                <Loader/>
            );
        }
        const {post: {title, categories, content}} = this.props;

        return (
            <div>

                <Link to="/">
                    back to posts
                </Link>

                <button onClick={this.deletePostHandler}>
                    delete post
                </button>

                <h2> {title}</h2>
                <p>categries : {categories}</p>
                <p>{content}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({...postSelector(state)});

export default connect(mapStateToProps)(withRouter(Post));