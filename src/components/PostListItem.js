// @flow

import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const PostListItem = ({id, title, categories}) => (
    <li className="list-group-item well well-sm font-weight-normal">
        <Link to={"posts/" + id}>
            <span>
                Title: {title},
            </span>
            <span className="pull-right">
                 Categories {categories}
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