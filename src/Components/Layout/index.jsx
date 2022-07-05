import React, { Fragment } from "react";

class Layout extends React.Component 
{
    render() {
        return (
            <div>
                <h1>Headers</h1>
                <div>Siderbar</div>
                {this.props.children}
                <h1>Footer</h1>
            </div>
        )
    }
}

export default Layout;