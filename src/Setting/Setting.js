import React, { useRef, useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./Setting.css";
import Timer from "./Timer";
const Setting = (props) => {
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

  const [value, setValue] = useState({
    a1: 1,
    a2: 1,
    a3: 1,
    b1: 1,
    b2: 1,
    b3: 1,
    c1: 0,
    c2: 0,
    c3: 0,
  });

  const updateValue = (element, key) => {
    // console.log(element, value);
    let state = { ...value };
    state[key] = element;
    setValue(state);
  };

  props.datavalue(value);
  const levelArr = ["Beginner", "Intermediate", "Advanced", "Quick"];
  const [level, setLevel] = useState("Beginner");
  const selectValue = (ele) => {
    setLevel(ele);
  };
  return (
    <div>
      <div className="setting mt-4">
        <div className="setting-left">
          <span>Kegel Exercise</span>
          <i
            class="fa fa-question-circle"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          ></i>
        </div>
        <div className="setting-right">
          <i className={btn_class} onClick={colorChange}>
            <span>&#119;</span>
          </i>
          <i className="fa fa-volume-up fa-sm"></i>
          <i className={btn_volume} onClick={colorChangeVolume}></i>
        </div>
      </div>
      {/* <Timer /> */}
      <div className="select">
        <DropdownButton title={level}>
          {levelArr.map((ele, index) => (
            <Dropdown.Item onClick={() => selectValue(ele)} key={index}>
              {ele}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
      <div className="bg-grey pb-4" id="spinner-control">
        <form className="row formSetting position-relative">
          <div className="col-12">
            <h6 className="float-left mt-3">Long Squeeze</h6>
          </div>
          <div className=" form-group col-4">
            <div className="drop">
              <DropdownButton title={value.a1}>
                {arr.map((element, index) => (
                  <Dropdown.Item
                    onClick={() => updateValue(element, "a1")}
                    key={index}
                  >
                    {element}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </div>
            <div className="title-section">Squeeze Seconds</div>
          </div>
          <div className=" form-group col-4">
            <div className="drop">
              <DropdownButton title={value.a2}>
                {arr.map((element, index) => (
                  <Dropdown.Item
                    onClick={() => updateValue(element, "a2")}
                    key={index}
                  >
                    {element}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </div>
            <div className="title-section">Rest Seconds</div>
          </div>
          <div className=" form-group col-4">
            <div className="drop">
              <DropdownButton title={value.a3}>
                {arr.map((element, index) => (
                  <Dropdown.Item
                    onClick={() => updateValue(element, "a3")}
                    key={index}
                  >
                    {element}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </div>
            <div className="title-section">Reps</div>
          </div>

          <div className="col-12 mt-3">
            <h6 className="float-left">Short Squeeze</h6>
          </div>
          <div className=" form-group col-4">
            <div className="drop">
              <DropdownButton title={value.b1}>
                {arr.map((element, index) => (
                  <Dropdown.Item
                    onClick={() => updateValue(element, "b1")}
                    key={index}
                  >
                    {element}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </div>
            <div className="title-section">Squeeze Seconds</div>
          </div>
          <div className=" form-group col-4">
            <div className="drop">
              <DropdownButton title={value.b2}>
                {arr.map((element, index) => (
                  <Dropdown.Item
                    onClick={() => updateValue(element, "b2")}
                    key={index}
                  >
                    {element}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </div>
            <div className="title-section">Rest Seconds</div>
          </div>
          <div className=" form-group col-4">
            <div className="drop">
              <DropdownButton title={value.b3}>
                {arr.map((element, index) => (
                  <Dropdown.Item
                    onClick={() => updateValue(element, "b3")}
                    key={index}
                  >
                    {element}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </div>
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
                <div className="drop">
                  <DropdownButton title={value.c1}>
                    {arr.map((element, index) => (
                      <Dropdown.Item
                        onClick={() => updateValue(element, "c1")}
                        key={index}
                      >
                        {element}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </div>
                <div className="title-section">Squeeze Seconds</div>
              </div>
              <div className=" form-group col-4">
                <div className="drop">
                  <DropdownButton title={value.c2}>
                    {arr.map((element, index) => (
                      <Dropdown.Item
                        onClick={() => updateValue(element, "c2")}
                        key={index}
                      >
                        {element}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </div>
                <div className="title-section">Rest Seconds</div>
              </div>
              <div className=" form-group col-4">
                <div className="drop">
                  <DropdownButton title={value.c3}>
                    {arr.map((element, index) => (
                      <Dropdown.Item
                        onClick={() => updateValue(element, "c3")}
                        key={index}
                      >
                        {element}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </div>
                <div className="title-section">Reps</div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="mt-3 mb-3">
        <div class="row m-0 align-items-center mb-3">
          <span class="h5 m-0 width-fit-content">Track Your Progress</span>
          <span id="some" class="ml-auto"></span>
        </div>
        <div className="bg-grey pb-4">
          <Calendar />
          <i
            class="fa fa-question-circle"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop1"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Setting;
