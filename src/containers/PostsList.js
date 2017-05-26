import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPostList} from "../actions/index";
import {postListSelector} from "../selectors";
import PostListItem from "../components/PostListItem";
import CustomLinkButton from "../components/CustomLinkButton";
import Loader from "../components/Loader";
import PropTypes from "prop-types";

class PostsList extends Component {

    static propTypes = {
        posts: PropTypes.arrayOf(PropTypes.object).isRequired,
        fetchPostList: PropTypes.func.isRequired,
        isLoaded: PropTypes.bool.isRequired
    };

    componentDidMount() {
        this.props.fetchPostList();
    }

    render() {
        if (this.props.isLoaded === false) {
            return (
                <Loader/>
            );
        }

        return (
            <div>
                <ul>
                    <CustomLinkButton
                        classNameSeq={"btn btn-default c-btn"}
                        to={"/posts/new"}
                    >
                        Create a new post
                    </CustomLinkButton>

                    {
                        this.props.posts.map((post) => (
                            <PostListItem key={post.id} {...post}/>
                        ))
                    }
                </ul>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({...postListSelector(state)});

export default connect(mapStateToProps, {fetchPostList})(PostsList);