import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import "./Sidebar.css";
import Header from "../Components/Header";
import Profile from "../Profile/Profile";
import Setting from "../Setting/Setting";
import axios from "axios";
const SideBar = (props) => {
  const [userData, setUserData] = useState({});
  const Data = (value) => {
    setUserData(value);
  };
  const count = (value1) => {
    console.log(value1, "mukesh");
    props.datahome(value1);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    axios
      .get("https://bloomia.herokuapp.com/users/getUser", config)
      .then((response) => {
        console.log(response);
        setUserData(response.data.data);
      });
  }, []);

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
              <Header Ondata={userData} />
              <Route exact path="/profile">
                <Profile data={Data} />
              </Route>
              <Route exact path="/">
                <Setting datavalue={count} />
              </Route>
            </Router>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
