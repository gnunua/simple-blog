//@flow

import * as React from "react";
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {createPost} from "../actions";
import FormFiled from "../components/FormFiled";
import CustomLinkButton from "../components/CustomLinkButton";
import {createPostSelector} from "../selectors";

type Props = {
    created: boolean,
    submitting: boolean,
    pristine: boolean,
    history: {
        push: (path:string)=>?any
    },
    handleSubmit: Function,
    dispatch: Function
}

class PostNew extends React.Component<Props> {
    submitHandler: Function;

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
        const {handleSubmit, submitting, pristine} = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit(this.submitHandler)}>
                    <Field name="title" type="text" component={FormFiled} label="title"/>
                    <Field name="categories" type="text" component={FormFiled} label="categories"/>
                    <Field name="content" type="textarea" component={'textarea'} label="content"/>
                    <button
                        className="btn btn-default b-sub"
                        type="submit" disabled={submitting || pristine}>
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