import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import avatar from "./images/avatar.jpg";
import "./Header.css";
const Header = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const f_userName = localStorage.getItem("f_name");
  const l_userName = localStorage.getItem("l_name");

  let useName = `${f_userName} ${l_userName} `;
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    setIsLoggedIn(token);
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
          <button
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Welcome,
            <br />
            {useName}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <Link class="dropdown-item" to="/profile">
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
