import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./profile.css";
import avatar from "./images/avatar.jpg";

import axios from "axios";

import Password from "../Password/Password";
const Profile = () => {
  const [first_name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory();
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
        setName(response.data.data.first_name);
        setLastName(response.data.data.last_name);
        setNumber(response.data.data.contact);
        setEmail(response.data.data.email);
        localStorage.setItem("f_name", response.data.data.first_name);
        localStorage.setItem("l_name", response.data.data.last_name);
      });
  }, []);
  const submitHandler = async (e) => {
    e.preventDefault();
    let user = { first_name, last_name, number };
    const token = localStorage.getItem("token");
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };

      await axios
        .put("https://bloomia.herokuapp.com/users/updateProfile", user, config)
        .then((response) => {
          console.log(response);
          if (response.data.message === "updated user successfully") {
            history.push("/");
            alert("Profile updated Successfuly");
          } else {
            localStorage.clear();
            alert("Invalid Password");
          }
        });
    } catch (error) {
      console.log(`the error is: ${error}`);
    }
  };
  const clickHandler = () => {
    history.push("/");
  };
  // profile image
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <button className="slide" onClick={clickHandler}>
        <i class="fa fa-arrow-left"></i>
      </button>
      <div className="container-fluid">
        <div className="col-12 image_Uploader">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={imageUploader}
            style={{
              display: "none",
            }}
          />
          <i
            className="fa fa-plus"
            onClick={() => imageUploader.current.click()}
          ></i>
          <div className="avatar">
            <img ref={uploadedImage} src={avatar} alt="avatar" />
          </div>
        </div>
        <div className="information-content">
          <p>Personal Information</p>
          <button className="tick" onClick={submitHandler}>
            <i className="fa fa-check "></i>
          </button>
          <button className="cancel" onClick={clickHandler}>
            <i className="fa fa-times "></i>
          </button>
        </div>
        <div className="row col-md-12">
          <div class="col-md-6 col-sm-6 col-xs-12 mb-3">
            <label for="first_name" class="form-label">
              First Name
            </label>
            <input
              type="text"
              class="form-control"
              id="first_name"
              placeholder="First Name"
              value={first_name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="col-md-6 col-sm-6 col-xs-12 mb-3">
            <label for="last_name" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              id="last_name"
              placeholder="Last Name"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div class="col-md-6 col-sm-6 col-xs-12 mb-3">
            <label for="number" class="form-label">
              Number
            </label>
            <input
              type="number"
              class="form-control"
              id="number"
              placeholder="Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div class="col-md-6 col-sm-6 col-xs-12 mb-3">
            <label for="email" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled="true"
              style={{ cursor: "not-allowed" }}
            />
          </div>
        </div>
        <hr />
        <Password />
      </div>
    </>
  );
};

export default Profile;
