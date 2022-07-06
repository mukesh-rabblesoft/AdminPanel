import React, { Fragment } from "react";
import './index.css';
import Header from "./Header";
import { Outlet } from "react-router-dom";


class FrontEnd extends React.Component{
    render(){
        return(
            <Fragment>
           <div className="container-fluid">
           <Header/>
           </div>
            <div className="container">
            <Outlet/>
            </div>
            </Fragment>
        )
    }
}

export default FrontEnd;