// @flow

import React from "react";

const Main = ({children}:any) => {
    return (
        <div className="container">
            <div className="jumbotron">
                {children}
            </div>
        </div>
    );
};

export default Main;