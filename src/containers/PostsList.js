// @flow

import * as React from "react";
import {connect} from "react-redux";
import {fetchPostList} from "../actions/index";
import {postListSelector} from "../selectors";
import PostListItem from "../components/PostListItem";
import CustomLinkButton from "../components/CustomLinkButton";
import Loader from "../components/Loader";

type Post = {
    id: string,
    title: string,
    categories: string,
    id: number
}

type Props = {
    posts: Array<Post>,
    fetchPostList: Function,
    isLoaded: boolean,
}

class PostsList extends React.Component<Props> {

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