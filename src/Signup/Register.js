import React, { useState } from "react";
import "../Login/login.css";
import axios from "axios";
import { useHistory } from "react-router";
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
          <img src="images/Logo v1.png" alt="" />
        </div>
        <h1>Welcome to Bloomia.</h1>
        <p>Please enter your details to create your account.</p>
        <input
          type="text"
          className="form-control"
          placeholder="first name"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="last name"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <input
          type="password"
          className="form-control"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="number"
          className="form-control"
          placeholder="number"
          value={contact}
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <input
          type="email"
          className="form-control"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button className="btn btn-primary text-center" onClick={submitHandler}>
          Sign Up
        </button>
        <div className="link">
          Already Have an Account?
          <a href="/login"> Sign In</a>
        </div>
      </div>
      {/* <div className="loginContainer">
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              value={first_name}
              placeholder="Enter First name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="name">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="name"
              value={last_name}
              placeholder="Enter Last name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Number</Form.Label>
            <Form.Control
              type="number"
              value={contact}
              placeholder="Number"
              onChange={(e) => setNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Have an Account ? <a href="/login">Login</a>
          </Col>
        </Row>
      </div> */}
    </>
  );
};

export default Register;
