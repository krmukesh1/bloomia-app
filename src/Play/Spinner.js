import React, { useState, useRef } from "react";
import backvideo from "./video/Light Mode.mp4";
import logo from "./video/Logo v1.png";

import "./Spinner.css";
const Spinner = (props) => {
  const [playState, setPlaystate] = useState("paused");
  // const [timeCount, setTimeCount] = useState({});
  console.log(props.SpinnerValue);
  const rep = useRef(null);
  const reps = useRef(null);

  const start = () => {
    setPlaystate("running");
    document.getElementById("shape").style.animationPlayState = "running";
    longfunction();
  };
  let i = props.SpinnerValue.a3;
  let j = props.SpinnerValue.b3;
  // let i = 2;
  console.log(i, "brain");
  let time = 0;
  const pause = () => {
    clearInterval(rep.current);
    setPlaystate("paused");
    document.getElementById("shape").style.animationPlayState = "paused";
    document.getElementById("innercircle").style.animationPlayState = "paused";
    document.getElementById("shape").style.animationDuration = `${time}s`;
    document.getElementById("innercircle").style.animationDuration = `${time}s`;
  };

  function longfunction() {
    document.getElementById("shape").classList.add("circle2");
    document.getElementById("shape").classList.remove("circle1");
    document.getElementById(
      "shape"
    ).style.animationDuration = `${props.SpinnerValue.a1}s`;
    document.getElementById("prop").innerText = `${props.SpinnerValue.a1}s`;
    document.getElementById("name").innerText = `Long Squeeze`;
    setTimeout(() => {
      rest();
    }, props.SpinnerValue.a1 * 1000);
  }
  function rest() {
    document.getElementById("shape").classList.add("circle1");
    document.getElementById("shape").classList.remove("circle2");
    document.getElementById(
      "shape"
    ).style.animationDuration = `${props.SpinnerValue.a2}s`;
    document.getElementById("prop").innerText = `${props.SpinnerValue.a2}s`;
    document.getElementById("name").innerText = `Rest`;

    console.log(i, "brain");
    rep.current = setTimeout(() => {
      i--;
      if (i === 0) {
        short();
        return;
      }
      longfunction();
      // iconChnage();
    }, props.SpinnerValue.a2 * 1000);
  }
  function short() {
    document.getElementById("shape").classList.add("circle2");
    document.getElementById("shape").classList.remove("circle1");
    document.getElementById(
      "shape"
    ).style.animationDuration = `${props.SpinnerValue.b1}s`;

    document.getElementById("innercircle").classList.add("innerCircle2");
    document.getElementById("innercircle").classList.remove("innerCircle1");
    document.getElementById(
      "innercircle"
    ).style.animationDuration = `${props.SpinnerValue.b1}s`;
    document.getElementById("prop").innerText = `${props.SpinnerValue.b1}s`;
    document.getElementById("name").innerText = `Short Squeeze`;
    setTimeout(() => {
      shortRest();
    }, props.SpinnerValue.b1 * 1000);
  }
  function shortRest() {
    document.getElementById("shape").classList.add("circle1");
    document.getElementById("shape").classList.remove("circle2");
    document.getElementById(
      "shape"
    ).style.animationDuration = `${props.SpinnerValue.b2}s`;
    document.getElementById("innercircle").classList.add("innerCircle1");
    document.getElementById("innercircle").classList.remove("innerCircle2");
    document.getElementById(
      "shape"
    ).style.animationDuration = `${props.SpinnerValue.b2}s`;
    document.getElementById("prop").innerText = `${props.SpinnerValue.b2}s`;
    document.getElementById("name").innerText = `Rest`;
    console.log(j, "Inventory");
    reps.current = setTimeout(() => {
      j--;
      if (j === 0) {
        iconChnage();
        return;
      }
      short();
      // iconChnage();
    }, props.SpinnerValue.a2 * 1000);
  }
  function iconChnage() {
    setPlaystate("paused");
  }
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
          <p className="prop" id="prop"></p>
          <div className="play-button">
            {playState === "paused" && (
              <i
                onClick={start}
                id="play-icon"
                className="fa fa-play text-light"
              ></i>
            )}
            {playState === "running" && (
              <i
                id="paused-icon"
                onClick={pause}
                className="fa fa-pause text-light "
              ></i>
            )}
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
              className="circle"
              cx="50%"
              cy="50%"
              r="25%"
              fill="#2f45c5"
            />
          </svg>
          <p id="name"></p>
        </div>
      </section>
    </>
  );
};

export default Spinner;
