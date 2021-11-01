import React, { useState } from "react";

import Spinner from "../Play/Spinner";
import SideBar from "../LandingPage/SideBar";

const Home = () => {
  const [counterValue, setCounterValue1] = useState({});
  const count = (value1) => {
    console.log(value1, "mukesh");
    setCounterValue1(value1);
  };
  return (
    <>
      <div className="container-fluid ">
        <div className="row m">
          <div className="col-lg-8 col-md-12 col-sm-11 col-xs-11 left-side m-0 px-0">
            <Spinner SpinnerValue={counterValue} />
          </div>
          <div className="col-lg-4 col-md-3 col-sm-1 col-xs-1 right-side">
            <SideBar datahome={count} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
