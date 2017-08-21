// @flow

import React from "react";
import PropTypes from "prop-types";

type Meta = {
    touched: boolean,
    error: string,
    warning:string
}

type Props = {
    input: Object,
    label: string,
    type: string,
    meta: Meta
}

const FormFiled = ({input, label, type, meta: {touched, error, warning}} : Props) => (
    <div className="form-group">
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} className="form-control"/>
            {touched &&
            ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
        </div>
    </div>
);



export default FormFiled;