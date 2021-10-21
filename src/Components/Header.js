import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const f_userName = localStorage.getItem("f_name");
  const l_userName = localStorage.getItem("l_name");
  let useName = `Welcome ${f_userName} ${l_userName}`;
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    setIsLoggedIn(token);
  }, []);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };
  return (
    <>
      <Navbar expand="lg">
        {isLoggedIn ? (
          <Nav className="ml-auto">
            <NavDropdown title={useName} id="navbarScrollingDropdown">
              <NavDropdown.Item to="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
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
      </Navbar>
    </>
  );
};

export default Header;
