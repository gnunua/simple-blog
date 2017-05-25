import React from "react";
import {Link} from "react-router";
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {createPost} from "../actions";

let PostNew = (props) => {

    const submitHandler = (fromData) => {
        props.dispatch(createPost(fromData));
    };

    return (
        <div>
             <form onSubmit={props.handleSubmit(submitHandler)}>
                <div>
                    <label htmlFor="title">Title</label>
                    <Field name="title" component="input" type="text"/>
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <Field name="category" component="input" type="text"/>
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <Field name="content" component="textarea" type="text"/>
                </div>
                <button type="submit">Submit</button>
                <Link to="/">Cancel</Link>
            </form>
        </div>
    );
};

PostNew = reduxForm({
    form: 'createPost'
})(connect()(PostNew));

export default PostNew;