import React, {Component} from "react";
import {Link, withRouter} from "react-router";
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {createPost} from "../actions";
import FormFiled from "../components/FormFiled";
import {createPostSelector} from "../selectors";
import PropTypes from "prop-types";

class PostNew extends Component {

    static propTypes = {
        created: PropTypes.bool.isRequired,
        submitting: PropTypes.bool.isRequired,
        pristine: PropTypes.bool.isRequired,
        router: PropTypes.object.isRequired,
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

const mapStateToProps = (state) => ({...createPostSelector(state)});

export default reduxForm({
    form: 'createPost',
    validate
})(connect(mapStateToProps)(withRouter(PostNew)));