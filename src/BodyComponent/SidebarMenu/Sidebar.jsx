import React, { Fragment } from "react";
import "./Sidebar.css";


class Sidebar extends React.Component {
render() {
    return (
      <Fragment>
      <div className="sidebar_left">
      <div className="side_collapse" id="side">
        <ul>
          <li>
            <div className="admin_image">
              <img src="./images/profile-pic.jpg" alt="admin image" />
              <p>
              John Smith
              <span>
                <i className="bi bi-box-arrow-right"></i>
              </span>
            </p>
            </div>
          
          </li>
          <li>
          <span className="sidebar_icon"><i className="bi bi-speedometer2"></i></span>
            <a>DashBoard</a>
          </li>
          <li>
          <span className="sidebar_icon"><i className="bi bi-file-bar-graph"></i></span>
            <a>Charts</a>
          </li>
          <li>
          <span className="sidebar_icon"><i className="bi bi-code-square"></i></span>
            <a>Form</a>
          </li>
          <li>
          <span className="sidebar_icon"><i className="bi bi-file-spreadsheet"></i></span>
            <a>Tables</a>
          </li>
          <li>
          <span className="sidebar_icon"><i className="bi bi-envelope-paper"></i></span>
            <a>Message</a>
          </li>
          <li>
          <span className="sidebar_icon"><i className="bi bi-calendar2"></i></span>
            <a>Calender</a>
          </li>
          <li>
          <span className="sidebar_icon"><i className="bi bi-file-earmark-break-fill"></i></span>
            <a>Pages</a>
          </li>
          <li>
          <span className="sidebar_icon"><i className="bi bi-file-earmark-break-fill"></i></span>
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
