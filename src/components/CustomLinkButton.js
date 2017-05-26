import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router";

const CustomLinkButton = ({classNameSeq, to, children}) => (
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