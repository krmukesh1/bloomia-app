import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import "./Sidebar.css";
import Header from "../Components/Header";

const SideBar = () => {
  var n = 60;
  const array = [...Array(n)];
  const arr = array.map((item, index) => index + 1);
  const [disableReverse, setDisableReverse] = useState(true);
  const enableReverse = () => {
    setDisableReverse(!disableReverse);
  };
  return (
    <>
      <button
        className="btn "
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars />
        </Link>
      </button>

      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel"></h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="p-1">
            <Header />
            <div className="setting mt-5">
              <div className="setting-left">
                <h5>Kegel Exercise</h5>
                <i class="fa fa-question-circle"></i>
              </div>
              <div className="setting-right">
                <i className="fa fa-volume-up fa-sm"></i>
                <i className="fa fa-volume-up fa-sm"></i>
                <i className="fa fa-volume-up fa-sm"></i>
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
                  <select id="cars" name="a1" className="form-control">
                    {arr.map((element, index) => (
                      <option key={index}>{element}</option>
                    ))}
                  </select>
                  <div className="title-section">Squeeze Seconds</div>
                </div>
                <div className=" form-group col-4">
                  <select id="cars" name="a2" className="form-control">
                    {arr.map((element, index) => (
                      <option key={index}>{element}</option>
                    ))}
                  </select>
                  <div className="title-section">Rest Seconds</div>
                </div>
                <div className=" form-group col-4">
                  <select id="cars" name="a3" className="form-control">
                    {arr.map((element, index) => (
                      <option key={index}>{element}</option>
                    ))}
                  </select>
                  <div className="title-section">Reps</div>
                </div>

                <div className="col-12 mt-3">
                  <h6 className="float-left">Short Squeeze</h6>
                </div>
                <div className=" form-group col-4">
                  <select id="cars" name="b1" className="form-control">
                    {arr.map((element, index) => (
                      <option key={index}>{element}</option>
                    ))}
                  </select>
                  <div className="title-section">Squeeze Seconds</div>
                </div>
                <div className=" form-group col-4">
                  <select id="cars" name="b2" className="form-control">
                    {arr.map((element, index) => (
                      <option key={index}>{element}</option>
                    ))}
                  </select>
                  <div className="title-section">Rest Seconds</div>
                </div>
                <div className=" form-group col-4">
                  <select id="cars" name="b3" className="form-control">
                    {arr.map((element, index) => (
                      <option key={index}>{element}</option>
                    ))}
                  </select>
                  <div className="title-section">Reps</div>
                </div>
                <div className="col-12 mt-3">
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
                      <select id="cars" name="b1" className="form-control">
                        {arr.map((element, index) => (
                          <option key={index}>{element}</option>
                        ))}
                      </select>
                      <div className="title-section">Squeeze Seconds</div>
                    </div>
                    <div className=" form-group col-4">
                      <select id="cars" name="b2" className="form-control">
                        {arr.map((element, index) => (
                          <option key={index}>{element}</option>
                        ))}
                      </select>
                      <div className="title-section">Rest Seconds</div>
                    </div>
                    <div className=" form-group col-4">
                      <select id="cars" name="b3" className="form-control">
                        {arr.map((element, index) => (
                          <option key={index}>{element}</option>
                        ))}
                      </select>
                      <div className="title-section">Reps</div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
