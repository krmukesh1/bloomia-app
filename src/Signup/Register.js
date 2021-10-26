import React, { useState } from "react";
import "../Login/login.css";
import axios from "axios";
import { useHistory } from "react-router";
import logo from "./logo/Logo v1.png";
const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [contact, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = async (e) => {
    let users = { first_name, last_name, password, contact, email };
    e.preventDefault();
    console.log(users);
    try {
      if (
        first_name &&
        last_name &&
        password &&
        email &&
        contact &&
        password.length > 5
      ) {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        const { data } = await axios.post(
          "https://bloomia.herokuapp.com/users/signup",
          users,
          config
        );
        if (data.message === "user created successfully") {
          history.push("/home");
        }
      } else {
        alert("Invalid Details");
      }
    } catch (error) {
      console.log(`the error is: ${error}`);
    }
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setNumber("");
  };
  return (
    <>
      <div className="col-sm-6 offset-sm-3 text-center" id="signup">
        <div className="images ">
          <img src={logo} alt="" />
        </div>
        <h3>Welcome to Bloomia.</h3>
        <p>Please enter your details to create your account.</p>
        <div className="form-control mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="first name"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <span className="control-button">
            <i className="fa fa-user"></i>
          </span>
        </div>
        <div className="form-control mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="last name"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
          <span className="control-button">
            <i className="fa fa-user"></i>
          </span>
        </div>

        <div className="form-control mb-2">
          <input
            type="number"
            className="form-control"
            placeholder="number"
            value={contact}
            onChange={(e) => setNumber(e.target.value)}
          />
          <span className="control-button">
            <i className="fa fa-phone"></i>
          </span>
        </div>
        <div className="form-control mb-2">
          <input
            type="email"
            className="form-control"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="control-button">
            <i className="fa fa-envelope"></i>
          </span>
        </div>
        <div className="form-control mb-2">
          <input
            type="password"
            className="form-control"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="control-button">
            <i className="fa fa-lock"></i>
          </span>
        </div>
        <button className="btn btn-primary text-center" onClick={submitHandler}>
          Sign Up
        </button>
        <div className="link">
          Already Have an Account?
          <a href="/login"> Sign In</a>
        </div>
      </div>
    </>
  );
};

export default Register;
