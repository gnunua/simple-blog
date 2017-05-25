import React from "react";
import {Link} from "react-router";


const Post = () => {
    return (
        <div>

            <Link to="/">
                index
            </Link>

            <Link to="/">
                back to posts
            </Link>
            <button>
                delete posts
            </button>

            <h2>post title</h2>
            <h3>post content</h3>


        </div>
    )
};

export default Post;