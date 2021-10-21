import React from "react";
import { useRouteMatch, Route } from "react-router-dom";
import Spinner from "../Play/Spinner";
import SideBar from "../LandingPage/SideBar";
import Header from "../Components/Header";
import Profile from "../Profile/Profile";
const Home = () => {
  let { path } = useRouteMatch();
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-9 col-md-12 col-sm-11 col-xs-11 left-side">
            <Spinner />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-1 col-xs-1 right-side">
            <Header />
            <SideBar />
            <Route path={`${path}/profile`} component={Profile} />
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
