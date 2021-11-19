import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./Setting.css";
import GoalSetting from "./GoalSetting";
const Setting = (props) => {
  var n = 60;
  const array = [...Array(n)];
  const arr = array.map((item, index) => index + 1);
  const [disableReverse, setDisableReverse] = useState(true);
  const [disableEmail, setDisableEmail] = useState(false);

  const enableReverse = () => {
    setDisableReverse(!disableReverse);
  };
  const enableEmail = () => {
    setDisableEmail(!disableEmail);
  };
  const modify = () => {
    setDisableReverse(!disableReverse);
  };
  const goal = () => {
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

  let TotalSetTime =
    (value.a1 + value.a2) * value.a3 + (value.b1 + value.b2) * value.b3;
  console.log("time", TotalSetTime);
  props.datavalue(value);
  console.log("valu5", value);
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
          <div class=" m-0 mt-2 align-items-center justify-content-center d-flex">
            <span class="width-fit-content">For more details</span>

            <span class="round-bottons">
              <i
                class="fa fa-chevron-right fa-sm "
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop1"
              ></i>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-3 mb-3" id="email">
        <div className="col-12 mt-5">
          <div className="reverse">
            <div className="col-8">
              <h6>Email Reminder </h6>
            </div>
            <div className="col-4 fieldsettoggle form-check form-switch">
              <input
                className=" form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={enableEmail}
              />
            </div>
          </div>
        </div>
        {disableEmail ? (
          <fieldset className="field">
            <p className="field">
              Set a time to receive email reminders for your Kegel workout.
              Bloomia will email you if workout has not been completed by your
              desired time. The timezone is your local time
            </p>

            <div className=" form-group col-4">
              <div className="drop">
                <input type="datetime-local" id="datetime-local" />
              </div>
            </div>
          </fieldset>
        ) : null}
      </div>
      {/* <div className="mt-3 mb-3" id="goal">
        <div className="col-12">
          <div className="reverse">
            <div className="col-8">
              <h6>Your Goal </h6>
            </div>
            {disableReverse ? (
              <div className="col-4 fieldsettoggle form-check form-switch">
                <button className="btn-primary" onClick={modify}>
                  Modify
                </button>
              </div>
            ) : null}
          </div>
        </div>

        {!disableReverse ? (
          <div class="w-100 border-top-black mt-2 pt-3">
            <fieldset className="field">
              <div className="row">
                <div className=" form-group col-4">
                  <div className="text-sm-left">Sets</div>
                  <div className="drop">
                    <input
                      id="sets"
                      className="input-sets"
                      type="number"
                      min="1"
                    />
                  </div>
                </div>
                <div className=" form-group col-4">
                  <div className="text-sm-right">Select Type</div>
                  <div className="drop">
                    <DropdownButton title={level}>
                      {levelArr.map((ele, index) => (
                        <Dropdown.Item
                          onClick={() => selectValue(ele)}
                          key={index}
                        >
                          {ele}
                        </Dropdown.Item>
                      ))}
                    </DropdownButton>
                  </div>
                </div>
                <div className="goal">
                  <button className="btn-primary" onClick={goal}>
                    Set Goal
                  </button>
                  <p>0 min 32sec a day.</p>
                </div>
              </div>
            </fieldset>
          </div>
        ) : null}
      </div> */}
      <GoalSetting onGoaltime={TotalSetTime} data={value} />
      <div className="mt-3 mb-3" id="subscribe">
        <div className="goal bg-primary">
          <div className="left">
            <h6>Subscribed User</h6>
            <h6>Valid till</h6>
          </div>
          <button className="btn-danger">Unsubscribe</button>
        </div>
      </div>

      <div className="mt-3 mb-3" id="link">
        <div className="link-left">
          <a href="https://bloomia.app/terms-and-conditions/">
            Terms and Conditions
          </a>
          <a href="https://bloomia.app/disclamer">Disclamer</a>
        </div>
        <div className="link-left">
          <a href="https://bloomia.app/privacy/">Privacy</a>
          <a href="https://bloomia.app/contact-us/">Contact Us</a>
        </div>
        <div className="link-left">
          <a href="https://bloomia.app/refund-and-cancellations/">
            Refund and Cancellations
          </a>
        </div>
      </div>
    </div>
  );
};

export default Setting;
