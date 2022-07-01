import React, { Fragment } from "react";
import './Header.css';


class Header extends React.Component{
    render(){
        return(
            <Fragment>
            <div className="top_navbar">
            <div className="nav_header">
              <img src="./images/rabblesoft-logo-pink-white.png" />
            </div>

            <div className="right-header">
              <ul className="nav navbar-left">
                <li className="sidebar_toggle">
                  <a>
                    <i className="bi bi-menu-button"></i>
                  </a>
                </li>
              </ul>

              <ul className="nav navbar-right">
                <li className="dropdown l1">
                  <a>
                    <i className="bi bi-envelope"></i>
                  </a>
                </li>
                <li className="dropdown l2">
                  <a>
                    <i className="bi bi-bell-fill"></i>
                  </a>
                </li>
                <li className="dropdown l3">
                  <a>
                    <i className="bi bi-list-task"></i>
                  </a>
                </li>
                <li className="dropdown l4">
                  <a>
                    <i className="bi bi-person"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
            
            </Fragment>
        )
    }
}

export default Header;