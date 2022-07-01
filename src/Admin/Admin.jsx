import React, { Fragment } from "react";
import {Link} from "react-router-dom";
import './Admin.css';

class Admin extends React.Component{
    render(){
        return(
            <Fragment>
            <section className="ftco-section">
            <div className="container">
         
            <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
            <div className="login-wrap p-4 p-md-5">
            <div className="icon d-flex align-items-center justify-content-center">
            <span className="fa fa-user-o"><i className="bi bi-person"></i></span>
            </div>
            <h3 className="text-center mb-4">Have an account?</h3>
            <form action="/" className="login-form">
            <div className="form-group">
            <input type="text" className="form-control rounded-left" placeholder="Username" required="" />
            </div>
            <div className="form-group d-flex">
            <input type="password" className="form-control rounded-left" placeholder="Password" required="" />
            </div>
            <div className="form-group d-md-flex">
            <div className="w-50">
            <label className="checkbox-wrap checkbox-primary">Remember Me
            <input type="checkbox" className="check" />
            <span className="checkmark"></span>
            </label>
            </div>
            <div className="w-50 text-md-right">
            <a href="/" className="forget" >Forgot Password</a>
            </div>
            </div>
            <div className="form-group">
            <Link to="/dashboard" className="btn btn-primary rounded submit p-3 px-5">Login</Link>
            </div>
            </form>
            </div>
            </div>
            </div>
            </div>
            </section>
            </Fragment>
        )
    }
}

export default Admin;