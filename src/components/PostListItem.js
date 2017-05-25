import React from "react";
import {Link} from "react-router";
import PropTypes from "prop-types";

const PostListItem = ({id, title, categories}) => (
    <li>
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

PostListItem.propTypes = {
    title: PropTypes.string,
    categories: PropTypes.string,
    id: PropTypes.number.isRequired
};

export default PostListItem;