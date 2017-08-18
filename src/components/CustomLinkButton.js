// @flow

import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

type Props = {
    classNameSeq: string,
    to: string,
    children: any,
};

const CustomLinkButton = ({classNameSeq, to, children}: Props) => (
    <div className={classNameSeq}>
        <Link to={to}>
            {children}
        </Link>
    </div>
);

CustomLinkButton.propTypes = {
    classNameSeq: PropTypes.string,
    to: PropTypes.string
};

export default CustomLinkButton;