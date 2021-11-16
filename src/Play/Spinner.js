import React, { useState, useRef, useEffect } from "react";
import backvideo from "./video/Light Mode.mp4";
import logo from "./video/Logo v1.png";

import "./Spinner.css";

import CalendarModal from "./CalendarModal";
const Spinner = (props) => {
  const [newTime, setnewTime] = useState({});
  const [leftTime, setLeftTime] = useState({});
  const [Squeeze, setSqueeze] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [resumebutton, setResumebutton] = useState(0);
  let settingTime = {
    a1: props.SpinnerValue.a1,
    a2: props.SpinnerValue.a2,
    a3: props.SpinnerValue.a3,
    b1: props.SpinnerValue.b1,
    b2: props.SpinnerValue.b2,
    b3: props.SpinnerValue.b3,
  };
  const settingTimes = {
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

  let i = newTime.a3;
  let j = newTime.b3;
  var k = newTime.a1;
  var l = newTime.a2;
  var m = newTime.b1;
  var n = newTime.b2;

  useEffect(() => {
    setLeftTime(settingTime);
    setnewTime(settingTime);
  }, [props.SpinnerValue]);
  function longfunction(value) {
    document.getElementById("shape").style.animationPlayState = "running";
    console.log("neeeeeeeeeeeeeeewwwwwwww", settingTime);
    setSqueeze(1);
    setResumebutton(1);
    l = settingTime.a2;

    clearInterval(lshort.current);
    console.log("Entry of Long");
    document.getElementById("shape").classList.add("circle2");
    document.getElementById("shape").classList.remove("circle1");
    document.getElementById(
      "shape"
    ).style.animationDuration = `${settingTime.a1}s`;
    document.getElementById("name").innerText = `Long Squeeze`;
    incrementa1.current = setInterval(() => {
      console.log("Entry of Long", settingTime.a1);
      setLeftTime((previous) => {
        if (previous.a1 <= 1) {
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
      rest(value);
    }, k * 1000);
  }
  function rest(value) {
    setSqueeze(2);
    setResumebutton(2);
    clearInterval(rep.current);
    k = 0;
    document.getElementById("shape").classList.add("circle1");
    document.getElementById("shape").classList.remove("circle2");
    document.getElementById(
      "shape"
    ).style.animationDuration = `${settingTime.a2}s`;
    document.getElementById("name").innerText = `Rest`;
    incrementa2.current = setInterval(() => {
      setLeftTime((previous) => {
        if (previous.a2 <= 1) {
          return { ...previous, a2: settingTime.a2 };
        }
        return {
          ...previous,
          a2: previous.a2 - 1,
        };
      });
    }, 1000);
    // check reps
    lshort.current = setTimeout(() => {
      k = settingTime.a1;
      clearInterval(incrementa2.current);
      --i;
      setLeftTime((previous) => {
        if (previous.a3 <= 1) {
          return { ...previous, a3: settingTime.a3 };
        }
        return {
          ...previous,
          a3: previous.a3 - 1,
        };
      });
      console.log("leftTime.a3", leftTime.a3);

      if (i === 0) {
        short(value);
        return;
      }
      longfunction(value);
      // iconChnage();
    }, l * 1000);
  }
  function short(value) {
    setSqueeze(3);
    setResumebutton(3);
    n = settingTime.b2;

    clearInterval(rep.current); // when call from rest long first time
    clearInterval(lshort.current); //when call from rest short
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
        if (previous.b1 <= 1) {
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

      shortRest(value);
    }, m * 1000);
  }
  function shortRest(value) {
    setSqueeze(4);
    setResumebutton(4);
    m = 0;
    clearInterval(reps.current);
    document.getElementById("shape").classList.add("circle1");
    document.getElementById("shape").classList.remove("circle2");
    document.getElementById("innercircle").classList.add("innerCircle1");
    document.getElementById("innercircle").classList.remove("innerCircle2");
    document.getElementById(
      "shape"
    ).style.animationDuration = `${settingTime.b2}s`;
    document.getElementById("name").innerText = `Rest`;

    incrementb2.current = setInterval(() => {
      setLeftTime((previous) => {
        if (previous.b2 <= 1) {
          return { ...previous, b2: settingTime.b2 };
        }
        return {
          ...previous,
          b2: previous.b2 - 1,
        };
      });
    }, 1000);

    sshort.current = setTimeout(() => {
      m = settingTime.b1;

      clearInterval(incrementb2.current);
      j--;
      setLeftTime((previous) => {
        if (previous.b3 <= 1) {
          return { ...previous, b3: settingTime.b3 };
        }
        return {
          ...previous,
          b3: previous.b3 - 1,
        };
      });
      console.log("leftTime.b3", leftTime.b3);
      if (j === 0) {
        document.getElementById("shape").style.animationDuration = `${0}s`;
        document.getElementById(
          "innercircle"
        ).style.animationDuration = `${0}s`;
        clearInterval(sshort.current);
        setIsActive(false);
        setIsPaused(false);
        setSqueeze(0);
        setnewTime(settingTimes);
        // settingTime = JSON.parse(JSON.stringify(settingTimes));
        return;
      }
      short(value);
      // iconChnage();
    }, n * 1000);
  }
  const start = () => {
    setIsPaused(true);
    setIsActive(true);
    longfunction(settingTime);
  };
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
    setnewTime(leftTime);
    document.getElementById("shape").style.animationPlayState = "paused";
    document.getElementById("innercircle").style.animationPlayState = "paused";
  };
  function resume() {
    console.log("resume");
    switch (resumebutton) {
      case 1:
        longfunction(newTime);
        setIsPaused(true);
        document.getElementById("shape").style.animationPlayState = "running";
        document.getElementById("innercircle").style.animationPlayState =
          "running";

        break;

      case 2:
        rest(newTime);
        setIsPaused(true);
        document.getElementById("shape").style.animationPlayState = "running";
        document.getElementById("innercircle").style.animationPlayState =
          "running";

        break;
      case 3:
        short(newTime);
        setIsPaused(true);
        document.getElementById("shape").style.animationPlayState = "running";
        document.getElementById("innercircle").style.animationPlayState =
          "running";

        break;
      case 4:
        shortRest(newTime);
        setIsPaused(true);
        document.getElementById("shape").style.animationPlayState = "running";
        document.getElementById("innercircle").style.animationPlayState =
          "running";
        break;
      default:
        longfunction(newTime);
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
        <div>
          {isActive && (
            <button class="start-over btn" id="start-over" onClick={reset}>
              START OVER
            </button>
          )}
          {isActive && (
            <div className="Reps-count text-light ">
              {Squeeze === 1 &&
                `${leftTime.a3} Reps more to go of Long Squeeze`}
              {Squeeze === 2 &&
                `${leftTime.a3} Reps more to go of Long Squeeze`}
              {Squeeze === 3 &&
                `${leftTime.b3} Reps more to go of Short Squeeze`}
              {Squeeze === 4 &&
                `${leftTime.b3} Reps more to go of  Short Squeeze`}
            </div>
          )}
        </div>
      </section>
      {/* <Timer /> */}
      {/* Modal  */}
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Guide To Kegel Exercises
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">
              <div class="w-100 tooltipContentMobile">
                <p>
                  Kegel Exercises (also known as pelvic floor exercises) are
                  designed to strengthen your pelvic floor muscles. The pelvic
                  floor muscles are responsible for supporting the uterus,
                  bladder, bowl, and rectum. Strengthening these muscles has
                  positive impact for both men and women. It can help with:
                </p>
                <ul>
                  <li>
                    Leaking or Dribbling Urine during normal activities (Urine
                    Incontinence).
                  </li>
                  <li>Prevent leaking urine after childbirth.</li>
                  <li>Increase sensitivity during sex and stronger orgasms.</li>
                  <li>Potential to help with Erectile dysfunction.</li>
                </ul>
                <h5>How to do Kegel exercises</h5>
                <p>To get started:</p>
                <ul>
                  <li>
                    <span class="gilroyHeavy">Find the right muscles.</span> To
                    identify your pelvic floor muscles, stop urination in
                    midstream. Once you've identified your pelvic floor muscles
                    you can do the exercises in any position, although you might
                    find it easiest to do them lying down at first.
                  </li>
                  <li>
                    <span class="gilroyHeavy">Perfect your technique.</span> To
                    do Kegels, imagine you are sitting on a marble and tighten
                    your pelvic muscles as if you're lifting the marble. Try it
                    for three seconds at a time, then relax for a count of
                    three.
                  </li>
                  <li>
                    <span class="gilroyHeavy">Maintain your focus.</span> For
                    best results, focus on tightening only your pelvic floor
                    muscles. Be careful not to flex the muscles in your abdomen,
                    thighs or buttocks. Avoid holding your breath. Instead,
                    breathe freely during the exercises.
                  </li>
                  <li>
                    <span class="gilroyHeavy">Repeat three times a day.</span>{" "}
                    Aim for at least three sets of 10 to 15 repetitions a day
                    (both fast and slow).
                  </li>
                </ul>
                <h5>How to Use Bloomia?</h5>
                <p>
                  Bloomia is designed to be easy to use. Kegel exercises
                  typically follow a process like:
                </p>
                <ul>
                  <li>Squeeze your pelvic floor muscles for X seconds</li>
                  <li>Rest for X seconds</li>
                  <li>Repeat Y number of times</li>
                </ul>
                <p>
                  With Bloomia, we follow the same process but we make sure the
                  exercises contain long squeezes and short squeezes which
                  should help you.
                </p>
                <h5>How to Select a Workout?</h5>
                <p>
                  Bloomia recommends starting with the beginner workout and
                  increasing the repetitions and length as you strengthen your
                  pelvic floor. The most important thing is consistency. Focus
                  on completing your Kegels each day and keeping track of your
                  progress!
                </p>
                <h5>Something is not working as expected</h5>
                <p>Let us know about it by emailing admin@bloomia.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CalendarModal />
    </>
  );
};

export default Spinner;
