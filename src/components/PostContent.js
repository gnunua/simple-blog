// @flow

import React from "react";
import PropTypes from "prop-types";
import CustomLinkButton from "./CustomLinkButton";

type Props = {
    title: string,
    categories: string,
    content: string,
    deletePost: Function
};

const PostContent = ({title, categories, content, deletePost}: Props) => (
    <div>
        <CustomLinkButton
            classNameSeq={"btn btn-link"}
            to={"/"}
        >
            <span>Back to posts</span>
        </CustomLinkButton>

        <button
            className="btn btn-warning pull-right"
            onClick={deletePost}>
            Delete post
        </button>
        <h3 className="text-success">{title}</h3>
        <h4 className="text-primary">categories : {categories}</h4>
        <p className="text-info">{content}</p>
    </div>
);

export default PostContent;