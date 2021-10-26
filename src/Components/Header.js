import React, { useState, useEffect } from "react";

import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import avatar from "./images/avatar.jpg";

import "./Header.css";
const Header = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [image, setImage] = useState("");
  let useName = `${fname} ${lname} `;
  useEffect(() => {
    setIsLoggedIn(token);
    console.log(localStorage.getItem("f_name"));
    setFName(localStorage.getItem("f_name"));
    setLName(localStorage.getItem("l_name"));
    setImage(localStorage.getItem("Image"));
  }, []);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    history.push("/");
    setIsLoggedIn(false);
  };

  return (
    <>
      {/* <Navbar expand="lg"> */}
      {isLoggedIn ? (
        <div class="dropdown">
          <div className="user">
            Welcome,
            <br />
            <h4>{useName}</h4>
          </div>
          <button
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {
              <img
                className="headerIcon"
                src={"https://bloomia.herokuapp.com/" + image}
                alt="avatar"
              />
            }
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <Link className="dropdown-item" to="/profile">
                Profile
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/" onClick={logoutHandler}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="nav">
          <a href="/login" className="btn login">
            Login
          </a>
          <a href="register" className="btn btn-primary">
            Signup
          </a>
        </div>
      )}
      {/* </Navbar> */}
    </>
  );
};

export default Header;
