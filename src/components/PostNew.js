import React, {Component} from "react";
import {Link, withRouter} from "react-router";
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {createPost} from "../actions";
import FormFiled from "./FormFiled";

class PostNew extends Component {
    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(fromData) {
        this.props.dispatch(createPost(fromData));
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.isLoaded === false && nextProps.isLoaded === true) {
            this.props.router.push('/');
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.submitHandler)}>
                    <Field name="title" type="text" component={FormFiled} label="title"/>
                    <Field name="category" type="text" component={FormFiled} label="category"/>
                    <Field name="content" type="textarea" component={FormFiled} label="content"/>
                    <button type="submit" disabled={this.props.submitting || this.props.pristine}>
                        Submit
                    </button>
                    <Link to="/">
                        Cancel
                    </Link>
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

    if (!values.category) {
        errors.category = '*required';
    }

    if (!values.content) {
        errors.content = '*required';
    }
    return errors;
};

const mapStateToProps = (state) => ({isLoaded: state.post.creatingState.isLoaded});

export default reduxForm({
    form: 'createPost',
    validate
})(connect(mapStateToProps)(withRouter(PostNew)));