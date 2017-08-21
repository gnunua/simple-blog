// @flow

import React from "react";
import {Link} from "react-router-dom";

type Props = {
    title: string,
    categories: string,
    id: number
};

const PostListItem = ({id, title, categories} : Props) => (
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

export default PostListItem;