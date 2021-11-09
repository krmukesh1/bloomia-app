import React, { useState, useRef, useEffect } from "react";
import backvideo from "./video/Light Mode.mp4";
import logo from "./video/Logo v1.png";

import "./Spinner.css";
const Spinner = (props) => {
  const [playState, setPlaystate] = useState("paused");
  const [newTime, setnewTime] = useState({});
  const [leftTime, setLeftTime] = useState({});
  const [Squeeze, setSqueeze] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const settingTime = {
    a1: props.SpinnerValue.a1,
    a2: props.SpinnerValue.a2,
    a3: props.SpinnerValue.a3,
    b1: props.SpinnerValue.b1,
    b2: props.SpinnerValue.b2,
    b3: props.SpinnerValue.b3,
  };
  const incrementa1 = useRef(null);
  const incrementa2 = useRef(null);
  const incrementb1 = useRef(null);
  const incrementb2 = useRef(null);
  const rep = useRef(null);
  const lshort = useRef(null);
  const reps = useRef(null);
  const sshort = useRef(null);

  const start = () => {
    setIsPaused(true);
    setIsActive(true);
    document.getElementById("shape").style.animationPlayState = "running";

    longfunction();
  };
  let i = newTime.a3;
  let j = newTime.b3;
  var k = newTime.a1;
  var l = newTime.a2;
  var m = newTime.b1;
  var n = newTime.b2;
  console.log("mukesh", i, j);
  const pause = () => {
    clearInterval(incrementa1.current);
    clearInterval(incrementa2.current);
    clearInterval(incrementb1.current);
    clearInterval(incrementb2.current);
    clearInterval(rep.current);
    clearInterval(lshort.current);
    clearInterval(reps.current);
    clearInterval(sshort.current);
    setIsPaused(false);

    document.getElementById("shape").style.animationPlayState = "paused";
    document.getElementById("innercircle").style.animationPlayState = "paused";
  };
  const [resumebutton, setResumebutton] = useState(0);
  useEffect(() => {
    setLeftTime(settingTime);
    setnewTime(settingTime);
  }, [props.SpinnerValue]);
  function longfunction() {
    setSqueeze(1);
    setResumebutton(1);
    console.log("Entry of Long");
    document.getElementById("shape").classList.add("circle2");
    document.getElementById("shape").classList.remove("circle1");
    document.getElementById(
      "shape"
    ).style.animationDuration = `${settingTime.a1}s`;
    document.getElementById("name").innerText = `Long Squeeze`;
    incrementa1.current = setInterval(() => {
      setLeftTime((previous) => {
        console.log("Entry of Long", settingTime.a1);
        if (previous.a1 < 1) {
          return { ...previous, a1: settingTime.a1 };
        }
        return {
          ...previous,
          a1: previous.a1 - 1,
        };
      });
    }, 1000);
    rep.current = setTimeout(() => {
      clearInterval(incrementa1.current);

      rest();
    }, k * 1000);
  }
  function rest() {
    setSqueeze(2);
    setResumebutton(2);
    document.getElementById("shape").classList.add("circle1");
    document.getElementById("shape").classList.remove("circle2");
    document.getElementById(
      "shape"
    ).style.animationDuration = `${settingTime.a2}s`;
    document.getElementById("name").innerText = `Rest`;

    console.log(i, "brain");
    incrementa2.current = setInterval(() => {
      setLeftTime((previous) => {
        if (previous.a2 < 1) {
          return { ...previous, a2: settingTime.a2 };
        }
        return {
          ...previous,
          a2: previous.a2 - 1,
        };
      });
    }, 1000);
    lshort.current = setTimeout(() => {
      clearInterval(incrementa2.current);
      i--;
      if (i === 0) {
        short();
        return;
      }
      longfunction();
      // iconChnage();
    }, l * 1000);
  }
  function short() {
    setSqueeze(3);
    setResumebutton(3);
    document.getElementById("shape").classList.add("circle2");
    document.getElementById("shape").classList.remove("circle1");
    document.getElementById(
      "shape"
    ).style.animationDuration = `${settingTime.b1}s`;

    document.getElementById("innercircle").classList.add("innerCircle2");
    document.getElementById("innercircle").classList.remove("innerCircle1");
    document.getElementById(
      "innercircle"
    ).style.animationDuration = `${settingTime.b1}s`;
    document.getElementById("name").innerText = `Short Squeeze`;
    incrementb1.current = setInterval(() => {
      setLeftTime((previous) => {
        if (previous.b1 < 1) {
          return { ...previous, b1: settingTime.b1 };
        }
        return {
          ...previous,
          b1: previous.b1 - 1,
        };
      });
    }, 1000);
    reps.current = setTimeout(() => {
      clearInterval(incrementb1.current);
      shortRest();
    }, m * 1000);
  }
  function shortRest() {
    setSqueeze(4);
    setResumebutton(4);
    document.getElementById("shape").classList.add("circle1");
    document.getElementById("shape").classList.remove("circle2");
    document.getElementById(
      "shape"
    ).style.animationDuration = `${settingTime.b2}s`;
    document.getElementById("innercircle").classList.add("innerCircle1");
    document.getElementById("innercircle").classList.remove("innerCircle2");
    document.getElementById(
      "shape"
    ).style.animationDuration = `${props.SpinnerValue.b2}s`;
    document.getElementById("name").innerText = `Rest`;
    console.log(j, "Inventory");
    incrementb2.current = setInterval(() => {
      setLeftTime((previous) => {
        if (previous.b2 < 1) {
          return { ...previous, b2: settingTime.b2 };
        }
        return {
          ...previous,
          b2: previous.b2 - 1,
        };
      });
    }, 1000);

    sshort.current = setTimeout(() => {
      clearInterval(incrementb2.current);
      j--;
      if (j === 0) {
        setIsActive(false);
        setIsPaused(false);

        return;
      }
      short();
      // iconChnage();
    }, n * 1000);
  }

  function resume() {
    console.log("resume");
    switch (resumebutton) {
      case 1:
        longfunction();
        setIsPaused(true);
        document.getElementById("shape").style.animationPlayState = "running";
        document.getElementById("innercircle").style.animationPlayState =
          "running";

        break;

      case 2:
        rest();
        setIsPaused(true);
        document.getElementById("shape").style.animationPlayState = "running";
        document.getElementById("innercircle").style.animationPlayState =
          "running";

        break;
      case 3:
        short();
        setIsPaused(true);
        document.getElementById("shape").style.animationPlayState = "running";
        document.getElementById("innercircle").style.animationPlayState =
          "running";

        break;
      case 4:
        shortRest();
        setIsPaused(true);
        document.getElementById("shape").style.animationPlayState = "running";
        document.getElementById("innercircle").style.animationPlayState =
          "running";
        break;
      default:
        longfunction();
        setIsPaused(true);
        document.getElementById("shape").style.animationPlayState = "running";

        break;
    }
  }
  function reset() {
    clearInterval(incrementa1.current);
    clearInterval(incrementa2.current);
    clearInterval(incrementb1.current);
    clearInterval(incrementb2.current);
    clearInterval(rep.current);
    clearInterval(lshort.current);
    clearInterval(reps.current);
    clearInterval(sshort.current);
    setIsPaused(false);
    setIsActive(false);
    document.getElementById("shape").style.animationDuration = `${0}s`;
    document.getElementById("innercircle").style.animationDuration = `${0}s`;
    setSqueeze(0);
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
          <p className="prop" id="prop">
            {Squeeze === 1 && <div>{leftTime.a1}s</div>}
            {Squeeze === 2 && <div>{leftTime.a2}s</div>}
            {Squeeze === 3 && <div>{leftTime.b1}s</div>}
            {Squeeze === 4 && <div>{leftTime.b2}s</div>}
          </p>
          <div className="play-button">
            {!isActive && !isPaused ? (
              <i
                onClick={start}
                id="play-icon"
                className="fa fa-play text-light"
              ></i>
            ) : isPaused ? (
              <i
                id="paused-icon"
                onClick={pause}
                className="fa fa-pause text-light "
              ></i>
            ) : (
              <i
                onClick={resume}
                id="play-icon"
                className="fa fa-play text-light"
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
        {isActive && (
          <button class="start-over btn" id="start-over" onClick={reset}>
            START OVER
          </button>
        )}
      </section>
    </>
  );
};

export default Spinner;
