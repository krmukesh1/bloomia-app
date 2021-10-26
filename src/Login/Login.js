import React, { useState, useEffect } from "react";
import "./login.css";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import logo from "./logo/Logo v1.png";
const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [Image, setImage] = useState("");

  const submitHandler = async (e) => {
    let user = { email, password };
    e.preventDefault();
    try {
      if (email && password.length > 5) {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        axios
          .post("https://bloomia.herokuapp.com/users/login", user, config)
          .then((response) => {
            console.log(response);
            localStorage.setItem("token", response.data.token);
            const userinfo1 = localStorage.getItem("token");
            console.log("Mukesh", userinfo1);
            if (response.data.sucess) {
              const config = {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + response.data.token,
                },
              };
              axios
                .get("https://bloomia.herokuapp.com/users/getUser", config)
                .then((response) => {
                  console.log(response);
                  setName(response.data.data.first_name);
                  setLastName(response.data.data.last_name);
                  setImage(response.data.data.profileImage);
                  localStorage.setItem("f_name", response.data.data.first_name);
                  localStorage.setItem("l_name", response.data.data.last_name);
                  localStorage.setItem(
                    "Image",
                    response.data.data.profileImage
                  );
                  history.push("/");
                });

              alert("user Login Successfully");
            } else {
              localStorage.clear();
              alert("Invalid Details");
            }
          });
      }
    } catch (error) {
      console.log(`the error is: ${error}`);
    }
    setEmail("");
    setPassword("");
  };

  const token = localStorage.getItem("token");
  console.log(token);

  return (
    <>
      <div className="col-sm-6 offset-sm-3 text-center" id="login">
        <div className="images pb-5">
          <img src={logo} alt="logo" />
        </div>
        <div className="content pb-3">
          <h3>Welcome Back to Bloomia.</h3>
          <p>Please enter your address and password to login</p>
        </div>
        <div className="form-control mb-4">
          <input
            type="text"
            placeholder="Enter your email address"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="control-button">
            <i className="fa fa-envelope"></i>
          </span>
        </div>
        <div className="form-control">
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="control-button">
            <i className="fa fa-lock "></i>
          </span>
        </div>
        <div className="forget-password">
          <Link to="">Forget Your password?</Link>
        </div>
        <button className="btn btn-primary" onClick={submitHandler}>
          Sign in
        </button>
        <div className="link">
          Don't have an account? ?<a href="/register"> Sign Up</a>
        </div>
      </div>
    </>
  );
};
export default Login;
