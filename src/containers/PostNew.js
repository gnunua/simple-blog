// @flow

import React, {Component} from "react";
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {createPost} from "../actions";
import FormFiled from "../components/FormFiled";
import CustomLinkButton from "../components/CustomLinkButton";
import {createPostSelector} from "../selectors";
import PropTypes from "prop-types";

class PostNew extends Component {

    static propTypes = {
        created: PropTypes.bool.isRequired,
        submitting: PropTypes.bool.isRequired,
        pristine: PropTypes.bool.isRequired,
        history: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(fromData) {
        this.props.dispatch(createPost(fromData));
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.created === false && nextProps.created === true) {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.submitHandler)}>
                    <Field name="title" type="text" component={FormFiled} label="title"/>
                    <Field name="categories" type="text" component={FormFiled} label="categories"/>
                    <Field name="content" type="textarea" component={'textarea'} label="content"/>
                    <button
                        className="btn btn-default b-sub"
                        type="submit" disabled={this.props.submitting || this.props.pristine}>
                        Submit
                    </button>
                    <CustomLinkButton classNameSeq={"btn btn-info b-cen"} to={"/"}>
                        Cancel
                    </CustomLinkButton>
                </form>
            </div>
        );
    }
}

const validate = (values) => {
    const errors = {};
    if (!values.title) {
        errors.title = '*required';
    }

    if (!values.categories) {
        errors.categories = '*required';
    }

    if (!values.content) {
        errors.content = '*required';
    }
    return errors;
};

const mapStateToProps = (state) => ({...createPostSelector(state)});

export default reduxForm({
    form: 'createPost',
    validate
})(connect(mapStateToProps)(PostNew));