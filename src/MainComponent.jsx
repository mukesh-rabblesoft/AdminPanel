import React, { Fragment } from "react";
import "./Main.css";

import Header from "./Header/Header";
import Sidebar from "./BodyComponent/SidebarMenu/Sidebar";
import Dashboard from "./BodyComponent/DashBoard/Dashboard";

class Main extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="dashboard">
          <Header />

          <div className="siderbar_dashboard">
            <Sidebar />
            <div className="dashboard_content">
              <Dashboard/>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Main;
