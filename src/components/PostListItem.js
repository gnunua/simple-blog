import React from "react";
import {Link} from "react-router";

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
export default PostListItem;