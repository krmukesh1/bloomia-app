import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = (props) => {
  const history = useHistory();
  const token = localStorage.getItem("token");

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
          <div className="user">
            Welcome,
            <br />
            <h4>
              {props.Ondata.first_name} {props.Ondata.last_name}
            </h4>
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
                key={Date.now()}
                src={
                  "https://bloomia.herokuapp.com/" + props.Ondata.profileImage
                }
                alt="avatar"
              />
            }
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <Link className="dropdown-item" to="/profile">
                <i className="fa fa-user-circle"></i> Profile
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/" onClick={logoutHandler}>
                <i className="fa fa-sign-out"></i> Logout
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
