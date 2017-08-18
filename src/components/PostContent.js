// @flow

import React from "react";
import PropTypes from "prop-types";
import CustomLinkButton from "./CustomLinkButton";

const PostContent = ({title, categories, content, deletePost}) => (
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

PostContent.propTypes = {
    title: PropTypes.string.isRequired,
    categories: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    deletePost: PropTypes.func.isRequired
};

export default PostContent;