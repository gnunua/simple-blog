import React from "react";
import {Link} from "react-router"

const PostNew = () => {
    return (
        <div>
            <h3>create new post</h3>
            <button>Create</button>

            <Link to="/">Cancel</Link>
        </div>
    )
};

export default PostNew;