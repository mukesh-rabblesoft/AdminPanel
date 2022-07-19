import React, { Fragment } from "react";
import "./Sidebar.css";
import Mycontext from "../../../MainContext/MainContext";
import {Link} from 'react-router-dom';


class Sidebar extends React.Component {
  static contextType = Mycontext;

  render() {
    return (
      <Fragment>
        <div className={"sidebar_left " + this.context.sideb}>
          <div className="side_collapse" id="side">
            <ul>
              <li>
                <div className="admin_image">
                  <img src="../images/profile-pic.jpg" alt="admin image" />
                  <div className="admin_name">
                    <span className="adm_name">John Smith</span>
                    <span className="log_out">
                      <i className="bi bi-box-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <span className="sidebar_icon">
                  <i className="bi bi-speedometer2"></i>
                </span>
                <Link to="/admin/table" >DashBoard</Link>
                <a>DashBoard</a>
              </li>
              <li>
                <span className="sidebar_icon">
                  <i className="bi bi-file-bar-graph"></i>
                </span>
                <a>Charts</a>
              </li>
              <li>
                <span className="sidebar_icon">
                  <i className="bi bi-code-square"></i>
                </span>
                <a>Form</a>
              </li>
              <li>
                <span className="sidebar_icon">
                  <i className="bi bi-file-spreadsheet"></i>
                </span>
                <a>Tables</a>
              </li>
              <li>
                <span className="sidebar_icon">
                  <i className="bi bi-envelope-paper"></i>
                </span>
                <a>Message</a>
              </li>
              <li>
                <span className="sidebar_icon">
                  <i className="bi bi-calendar2"></i>
                </span>
                <a>Calender</a>
              </li>
              <li>
                <span className="sidebar_icon">
                  <i className="bi bi-file-earmark-break-fill"></i>
                </span>
                <a>Pages</a>
              </li>
              <li>
                <span className="sidebar_icon">
                  <i className="bi bi-file-earmark-break-fill"></i>
                </span>
                <a>Pages</a>
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Sidebar;
