import React from "react";
import {Link} from "react-router";


const PostsList = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={"posts/" + 1}>
                        post 1
                    </Link>
                </li>

                <li>
                    <Link to={"posts/" + 2}>
                        post 2
                    </Link>
                </li>

                <li>
                    <Link to={"posts/" + 3}>
                        post 3
                    </Link>
                </li>

            </ul>

            <Link to="/posts/new">
                create a new post
            </Link>
        </div>
    )
};

export default PostsList;