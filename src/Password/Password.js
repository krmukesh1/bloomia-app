import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const Password = () => {
  const [newPassword, setNPassword] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const submitHandler = async (e) => {
    e.preventDefault();
    let user = { newPassword, password };
    const token = localStorage.getItem("token");
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };

      await axios
        .put("https://bloomia.herokuapp.com/users/updatePassword", user, config)
        .then((response) => {
          console.log(response);
          if (response.data.message === "updated password successfully") {
            history.push("/header");
            alert("updated Successfuly");
          } else {
            localStorage.clear();
            alert("Invalid Details");
          }
        });
    } catch (error) {
      console.log(`the error is: ${error}`);
    }
  };
  // Icon
  const [passiconChange, setPassIconchnage] = useState(true);
  const [disablePassReverse, setDisablePassReverse] = useState(true);
  const changePassIcons = () => {
    setPassIconchnage(false);
    setDisablePassReverse(false);
  };
  const chnagePassIconPen = () => {
    setPassIconchnage(true);
    setDisablePassReverse(true);
  };
  return (
    <div>
      <div className="row col-md-12">
        <p>Password Settings</p>
        {passiconChange ? (
          <button className="pen" onClick={changePassIcons}>
            <i className="fa fa-pencil "></i>
          </button>
        ) : (
          <>
            <button className="tick light" onClick={submitHandler}>
              <i className="fa fa-check "></i>
            </button>

            <button className="cancel" onClick={chnagePassIconPen}>
              <i className="fa fa-times "></i>
            </button>
          </>
        )}
        <fieldset disabled={disablePassReverse}>
          <div class="col-md-6 col-sm-6 col-xs-12 mb-3">
            <label for="npassword" class="form-label">
              New Password
            </label>
            <input
              type="password"
              class="form-control"
              id="npassword"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNPassword(e.target.value)}
            />
          </div>

          <div class="col-md-6 col-sm-6 col-xs-12 mb-3">
            <label for="cPassword" class="form-label">
              Old Password
            </label>
            <input
              type="password"
              class="form-control"
              id="cPassword"
              placeholder="Old Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </fieldset>
        <div class="col-md-8 col-sm-8 col-xs-12 mb-3">
          <button className="btn btn-primary" onClick={submitHandler}>
            Save Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Password;
