import React, { useState } from "react";
import "./Setting.css";
const Setting = () => {
  var n = 60;
  const array = [...Array(n)];
  const arr = array.map((item, index) => index + 1);
  const [disableReverse, setDisableReverse] = useState(true);
  const enableReverse = () => {
    setDisableReverse(!disableReverse);
  };
  const [word, setWord] = useState(true);
  let btn_class = word ? "fa fa-sm-word" : "fa fa-sm-words";
  const colorChange = () => {
    setWord(!word);
  };
  const [volume, setVolume] = useState(true);
  let btn_volume = volume ? "fa fa-volume-up fa-sm" : "fa fa-volume-up fa-sm d";
  const colorChangeVolume = () => {
    setVolume(!volume);
  };
  return (
    <div>
      <div className="setting mt-4">
        <div className="setting-left">
          <span>Kegel Exercise</span>
          <i class="fa fa-question-circle"></i>
        </div>
        <div className="setting-right">
          <i className={btn_class} onClick={colorChange}>
            <span>&#119;</span>
          </i>
          <i className="fa fa-volume-up fa-sm"></i>
          <i className={btn_volume} onClick={colorChangeVolume}></i>
        </div>
      </div>

      <select id="car" name="carlist" form="carform ">
        <option value="volvo">Beginner</option>
        <option value="saab">Quick</option>
        <option value="opel">Advanced</option>
        <option value="audi">Quick</option>
      </select>

      <div className="bg-grey pb-4" id="spinner-control">
        <form className="row formSetting position-relative">
          <div className="col-12">
            <h6 className="float-left mt-3">Long Squeeze</h6>
          </div>
          <div className=" form-group col-4">
            <select
              id="cars"
              name="a1"
              className="form-control"
              className="btn dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {arr.map((element, index) => (
                <option key={index} aria-labelledby="cars">
                  {element}
                </option>
              ))}
            </select>
            <div className="title-section">Squeeze Seconds</div>
          </div>
          <div className=" form-group col-4">
            <select
              id="cars"
              name="a2"
              className="form-control"
              className="btn dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {arr.map((element, index) => (
                <option key={index} aria-labelledby="cars">
                  {element}
                </option>
              ))}
            </select>
            <div className="title-section">Rest Seconds</div>
          </div>
          <div className=" form-group col-4">
            <select
              id="cars"
              name="a3"
              className="form-control"
              className="btn dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {arr.map((element, index) => (
                <option
                  key={index}
                  aria-labelledby="cars"
                  aria-labelledby="cars"
                >
                  {element}
                </option>
              ))}
            </select>
            <div className="title-section">Reps</div>
          </div>

          <div className="col-12 mt-3">
            <h6 className="float-left">Short Squeeze</h6>
          </div>
          <div className=" form-group col-4">
            <select
              id="cars"
              name="b1"
              className="form-control"
              className="btn dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {arr.map((element, index) => (
                <option key={index} aria-labelledby="cars">
                  {element}
                </option>
              ))}
            </select>
            <div className="title-section">Squeeze Seconds</div>
          </div>
          <div className=" form-group col-4">
            <select
              id="cars"
              name="b2"
              className="form-control"
              className="btn dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {arr.map((element, index) => (
                <option key={index} aria-labelledby="cars">
                  {element}
                </option>
              ))}
            </select>
            <div className="title-section">Rest Seconds</div>
          </div>
          <div className=" form-group col-4">
            <select
              id="cars"
              name="b3"
              className="form-control"
              className="btn dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {arr.map((element, index) => (
                <option key={index} aria-labelledby="cars">
                  {element}
                </option>
              ))}
            </select>
            <div className="title-section">Reps</div>
          </div>
          <div className="col-12 mt-5">
            <div className="reverse">
              <div className="col-8">
                <h6>
                  Reverse Kegel Exercise{" "}
                  <span>
                    <i className="fa fa-question-circle fa-sm"></i>
                  </span>
                </h6>
              </div>
              <div className="col-4 fieldsettoggle form-check form-switch">
                <input
                  className=" form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  onClick={enableReverse}
                />
              </div>
            </div>
          </div>
          <fieldset disabled={disableReverse}>
            <div className="row">
              <div className=" form-group col-4">
                <select
                  id="cars"
                  name="b1"
                  className="form-control"
                  className="btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {arr.map((element, index) => (
                    <option key={index} aria-labelledby="cars">
                      {element}
                    </option>
                  ))}
                </select>
                <div className="title-section">Squeeze Seconds</div>
              </div>
              <div className=" form-group col-4">
                <select
                  id="cars"
                  name="b2"
                  className="form-control"
                  className="btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {arr.map((element, index) => (
                    <option key={index} aria-labelledby="cars">
                      {element}
                    </option>
                  ))}
                </select>
                <div className="title-section">Rest Seconds</div>
              </div>
              <div className=" form-group col-4">
                <select
                  id="cars"
                  name="b3"
                  className="form-control"
                  className="btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {arr.map((element, index) => (
                    <option key={index} aria-labelledby="cars">
                      {element}
                    </option>
                  ))}
                </select>
                <div className="title-section">Reps</div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Setting;
