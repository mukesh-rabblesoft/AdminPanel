import React, { Fragment } from "react";
import "./Dashboard.css";
import DTable from "../DTable/Dtable";

class Dashboard extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="dash_content">
          <div className="row">
            <div className="col-md-12">
              <div className="dash_title">
                <h1>
                  DashBoard <small>Content Overview</small>
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="cards">
                <div className="user_icon_top">
                  <div className="user_icon">
                    <i className="bi bi-people"></i>
                  </div>
                </div>
                <p className="user">user</p>
                <p className="count">265</p>
                <div className="more_info_btn">
                  <a>
                    more{" "}
                    <span>
                      <i className="bi bi-arrow-right-circle"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="cards cards_2">
                <div className="user_icon_top">
                  <div className="user_icon user_icon2">
                    <i className="bi bi-cash"></i>
                  </div>
                </div>

                <p className="user">REVENUE</p>
                <p className="count">$32,384</p>
                <div className="more_info_btn">
                  <a>
                    more{" "}
                    <span>
                      <i className="bi bi-arrow-right-circle"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="cards cards_3">
                <div className="user_icon_top">
                  <div className="user_icon user_icon3">
                    <i className="bi bi-alarm"></i>
                  </div>
                </div>

                <p className="user">ALERTS</p>
                <p className="count">9 New</p>
                <div className="more_info_btn">
                  <a>
                    more{" "}
                    <span>
                      <i className="bi bi-arrow-right-circle"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="cards cards_4">
                <div className="user_icon_top">
                  <div className="user_icon user_icon4">
                    <i className="bi bi-list-task"></i>
                  </div>
                </div>
                <p className="user">TASKS</p>
                <p className="count">10</p>
                <div className="more_info_btn">
                  <a>
                    more{" "}
                    <span>
                      <i className="bi bi-arrow-right-circle"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="cards cards_5">
                <div className="user_icon_top">
                  <div className="user_icon user_icon5">
                    <i className="bi bi-cart-check-fill"></i>
                  </div>
                </div>
                <p className="user">ORDERS</p>
                <p className="count">24</p>
                <div className="more_info_btn">
                  <a>
                    more{" "}
                    <span>
                      <i className="bi bi-arrow-right-circle"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="cards cards_6">
                <div className="user_icon_top">
                  <div className="user_icon user_icon6">
                    <i className="bi bi-chat-fill"></i>
                  </div>
                </div>

                <p className="user">MENTIONS</p>
                <p className="count">96</p>
                <div className="more_info_btn">
                  <a>
                    more{" "}
                    <span>
                      <i className="bi bi-arrow-right-circle"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Dashboard;
