import React, {Component} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {fetchPostList} from "../actions/index";
import {postListSelector} from "../selectors";
import PostListItem from "../components/PostListItem";
import PropTypes from "prop-types";

class PostsList extends Component {

    static propTypes = {
        posts: PropTypes.arrayOf(PropTypes.object).isRequired,
        fetchPostList: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.fetchPostList();
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.posts.map((post) => (
                            <PostListItem key={post.id} {...post}/>
                        ))
                    }
                </ul>

                <Link to="/posts/new">
                    create a new post
                </Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({...postListSelector(state)});

export default connect(mapStateToProps, {fetchPostList})(PostsList);