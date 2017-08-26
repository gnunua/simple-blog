// @flow

import * as React from "react";

type Props = {
    children?: React.Node,
};

const Main = ({children}: Props) => {
    return (
        <div className="container">
            <div className="jumbotron">
                {children}
            </div>
        </div>
    );
};

export default Main;