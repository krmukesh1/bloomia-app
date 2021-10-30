import React, { useState } from "react";
import backvideo from "./video/Light Mode.mp4";
import logo from "./video/Logo v1.png";

import "./Spinner.css";
const Spinner = () => {
  const [playState, setPlaystate] = useState("paused");

  const startanimation = () => {
    if (playState === "paused") {
      setPlaystate("running");
      document.getElementById("shape").style.animationPlayState = playState;
      document.getElementById("innercircle").style.animationPlayState =
        playState;
      document.getElementById("shape").classList.add("circle2");
      document.getElementById("innercircle").classList.add("innerCircle2");

      document.getElementById("paused-icon").classList.add("d-none");
      document.getElementById("play-icon").classList.remove("d-none");
    } else {
      setPlaystate("paused");
      document.getElementById("play-icon").classList.add("d-none");
      document.getElementById("paused-icon").classList.remove("d-none");
      document.getElementById("shape").style.animationPlayState = playState;
      document.getElementById("innercircle").style.animationPlayState =
        playState;
    }
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
        <div className="timer" id="demo"></div>
        <div className="display-time banner-shadow">
          <div className="play-button" onClick={startanimation}>
            <i id="play-icon" className="fa fa-play text-light"></i>
            <i id="paused-icon" className="fa fa-pause text-light d-none"></i>
          </div>
          <div id="squeezetype" className="timer-type"></div>
          <svg className="button" expanded="true" height="500px" width="500px">
            <circle
              id="shape"
              className="circle1"
              strokeLinecap="round"
              strokeDasharray="1256"
              strokeDashoffset="0"
              cx="50%"
              cy="50%"
              r="30%"
              stroke="#fd7279"
              strokeWidth="3%"
              fill="none"
            />
            <circle
              id="innercircle"
              className="circle innerCircle"
              cx="50%"
              cy="50%"
              r="25%"
              fill="#2f45c5"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Spinner;
