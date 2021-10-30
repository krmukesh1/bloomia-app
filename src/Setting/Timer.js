import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
      console.log("mukesh");
    }, 1000);
    return () => clearInterval(timer);
  });

  const restart = () => {
    setSeconds(0);
    setMinutes(0);
  };
  const stop = () => {
    clearInterval(timer);
  };
  return (
    <>
      <p>
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </p>
      <button onClick={restart} style={{ marginRight: "10px" }}>
        Restart
      </button>
      <button onClick={stop}>Stop</button>
    </>
  );
};

export default Timer;