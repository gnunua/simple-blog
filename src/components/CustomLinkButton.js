// @flow

import * as React from "react";
import {Link} from "react-router-dom";

type Props = {
    classNameSeq: string,
    to: string,
    children?: React.Node;
};

const CustomLinkButton = ({classNameSeq, to, children}: Props) => (
    <div className={classNameSeq}>
        <Link to={to}>
            {children}
        </Link>
    </div>
);

export default CustomLinkButton;