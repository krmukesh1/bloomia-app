import React, { useState } from "react";
import backvideo from "./video/Light Mode.mp4";
import logo from "./video/Logo v1.png";

import "./Spinner.css";
const Spinner = () => {
  const [toggle, setToggle] = useState(true);
  const clickChnage = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <section id="banner">
        <div class="back-video">
          <video src={backvideo} autoPlay loop muted type="mp4"></video>
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div class="banner-shadow">
          <p className="number">1</p>
          <i
            className={toggle ? "fa fa-play" : "fa fa-pause"}
            onClick={clickChnage}
          ></i>
          <p className="content">Content</p>
        </div>
      </section>
    </>
  );
};

export default Spinner;
