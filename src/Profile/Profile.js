import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./profile.css";

import axios from "axios";

import Password from "../Password/Password";

const Profile = (props) => {
  const [first_name, setName] = useState("");

  const [last_name, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [Image, setImage] = useState("");
  const [refresh, setrefresh] = useState(false);
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
        setImage(response.data.data.profileImage);
        props.data(response.data.data);
        localStorage.setItem("f_name", response.data.data.first_name);
        localStorage.setItem("l_name", response.data.data.last_name);
      });
  }, [refresh]);
  const submitHandler = async (e) => {
    setIconchnage(true);
    setDisableReverse(true);
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
            setIconchnage(true);
            alert("Profile updated Successfuly");
            setrefresh(!refresh);
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
  const imageUploader = React.useRef();
  const imageSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("attachments", event.target.files[0]);
    console.log("Hi form data", formData);

    const token = localStorage.getItem("token");
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      axios
        .put("https://bloomia.herokuapp.com/users/upload", formData, config)
        .then((response) => {
          setrefresh(!refresh);
        });
    } catch (error) {
      console.log(`the error is: ${error}`);
    }
  };
  // image remove
  const token = localStorage.getItem("token");
  const remove = (event) => {
    setrefresh(!refresh);
    event.preventDefault();
    let formData = new FormData();
    formData.append("attachments", null);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      axios
        .put("https://bloomia.herokuapp.com/users/upload", formData, config)
        .then((response) => {});
    } catch (error) {
      console.log(`the error is: ${error}`);
    }
  };
  // Icon
  const [iconChange, setIconchnage] = useState(true);
  const [disableReverse, setDisableReverse] = useState(true);
  const changeIcons = () => {
    setDisableReverse(false);
    setIconchnage(false);
  };
  const chnageIconPen = () => {
    setIconchnage(true);
    setDisableReverse(true);
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
            onChange={imageSubmit}
            ref={imageUploader}
            style={{
              display: "none",
            }}
          />

          <div className="avatar">
            <img
              key={Date.now()}
              src={"https://bloomia.herokuapp.com/" + Image}
              alt="avatar"
            />
          </div>
          <div
            className="remove text-danger "
            onClick={remove}
            style={{
              cursor: "pointer",
              fontSize: "0.8rem",
              marginLeft: "10px",
            }}
          >
            remove Image
          </div>
          <i
            className="fa fa-pencil "
            onClick={() => imageUploader.current.click()}
          ></i>
        </div>
        <div className="information-content">
          <p className="Gilroy-Bold">Personal Information</p>
          {iconChange ? (
            <button className="pen" onClick={changeIcons}>
              <i className="fa fa-pencil "></i>
            </button>
          ) : (
            <>
              <button className="tick light" onClick={submitHandler}>
                <i className="fa fa-check "></i>
              </button>

              <button className="cancel" onClick={chnageIconPen}>
                <i className="fa fa-times "></i>
              </button>
            </>
          )}
        </div>
        <fieldset disabled={disableReverse}>
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
        </fieldset>
        <hr />
        <Password />
      </div>
    </>
  );
};

export default Profile;
