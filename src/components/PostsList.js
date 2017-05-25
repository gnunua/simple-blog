import React, {Component} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {fetchPostList} from "../actions/index";
import {postListSelector} from "../selectors";

class PostsList extends Component {

    componentDidMount() {
        this.props.dispatch(fetchPostList());
    }

    getList() {
        const {posts} = this.props;

        return posts.map(({id, title, categories}) => {
            return (
                <li key={id}>
                    <Link to={"posts/" + id}>
                        <span>
                            title {title}
                        </span>
                        <span>
                           category {categories}
                        </span>
                    </Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.getList()}
                </ul>

                <Link to="/posts/new">
                    create a new post
                </Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({...postListSelector(state)});

export default connect(mapStateToProps)(PostsList);