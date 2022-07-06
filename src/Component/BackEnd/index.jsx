import React, { Fragment } from "react";
import Header from "./Header/Header";
import Sidebar from "./SidebarMenu/Sidebar";
import { Outlet } from "react-router-dom";
import './index.css';

class BackEnd extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="dashboard">
          <Header />

          <div className="siderbar_dashboard">
            <Sidebar />
            <div className="dashboard_content">
              <Outlet/>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BackEnd;
