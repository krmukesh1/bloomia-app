import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import "./Sidebar.css";
import Header from "../Components/Header";
import Profile from "../Profile/Profile";
import Setting from "../Setting.js/Setting";

const SideBar = () => {
  return (
    <>
      <button
        className="btn "
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars />
        </Link>
      </button>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel"></h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="p-1">
            <Router>
              <Header />

              <Route exact path="/profile" component={Profile} />
              <Route exact path="/" component={Setting} />
            </Router>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
