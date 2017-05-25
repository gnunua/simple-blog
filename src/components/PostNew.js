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
                <Field
                    name="title"
                    type="text"
                    component={renderField}
                    label="title"
                />

                <Field
                    name="category"
                    type="text"
                    component={renderField}
                    label="category"
                />

                <Field
                    name="content"
                    type="textarea"
                    component={renderField}
                    label="content"
                />

                <button type="submit" disabled={props.submitting || props.pristine}>Submit</button>

                <Link to="/">Cancel</Link>
            </form>
        </div>
    );
};

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched &&
            ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
        </div>
    </div>
);

const validate = (values) => {
    const errors = {};
    if (!values.title) {
        errors.title = '*required';
    }

    if (!values.category) {
        errors.category = '*required';
    }

    if (!values.content) {
        errors.content = '*required';
    }
    return errors;
};

PostNew = reduxForm({
    form: 'createPost',
    validate
})(connect()(PostNew));

export default PostNew;