import React, {Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {fetchPost, deletePost, resetPost, resetPostList} from "../actions";
import {postSelector} from "../selectors";
import Loader from "../components/Loader";
import PostContent from "../components/PostContent";
import PropTypes from "prop-types";

class Post extends Component {

    static propTypes = {
        post: PropTypes.object,
        deleted: PropTypes.bool.isRequired,
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        fetchPost: PropTypes.func.isRequired,
        deletePost: PropTypes.func.isRequired,
        resetPostList: PropTypes.func.isRequired,
        resetPost: PropTypes.func.isRequired,
        isLoaded: PropTypes.bool.isRequired
    };

    constructor(props) {
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

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchPost,
    deletePost,
    resetPostList,
    resetPost
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Post);