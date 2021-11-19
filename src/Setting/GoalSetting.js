import axios from "axios";
import React, { useState, useEffect } from "react";

import "./Setting.css";
const GoalSetting = (props) => {
  let value = props.data;
  const [disableReverse, setDisableReverse] = useState(true);
  const [level, setlevel] = useState(0);
  const [goalseted, setgoalseted] = useState(false);
  const [settingGoal, setSettingGoal] = useState({
    set: "1",
    setType: "Beginner",
    totalGoalTime: props.onGoaltime,
  });
  const handleGoals = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSettingGoal({ ...settingGoal, [name]: value });
  };
  console.log("setting", props.onGoaltime);

  const modify = () => {
    setDisableReverse(!disableReverse);
  };

  const goal = async (e) => {
    setDisableReverse(!disableReverse);
    e.preventDefault();
    console.log("heeeellllllllllllllllo", settingGoal);
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    await axios
      .put(
        "https://bloomia.herokuapp.com/goal/updateGoal?set&total time",
        settingGoal,
        config
      )
      .then(
        (response) => console.log("mukesh", response)
        // setDisableReverse(false);
      )
      .catch((error) => {});
    setgoalseted(!goalseted);
  };
  useEffect(() => {
    setSettingGoal({
      ...settingGoal,
      totalGoalTime: props.onGoaltime * settingGoal.set,
    });
  }, [value, settingGoal.set]);
  let A = new Date(settingGoal.totalGoalTime * settingGoal.set * 1000)
    .toISOString()
    .substr(14, 5)
    .replace(":", " Min ");
  return (
    <div>
      <div className="mt-3 mb-3" id="goal">
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
              <form onSubmit={goal}>
                <div className="row">
                  <div className=" form-group col-4">
                    <div className="text-sm-left">Sets</div>
                    <div className="drop">
                      <input
                        id="sets"
                        className="input-sets"
                        type="number"
                        name="set"
                        step="1"
                        value={settingGoal.set}
                        min="1"
                        onChange={handleGoals}
                      />
                    </div>
                  </div>
                  <div className=" form-group col-4">
                    <div className="text-sm-right">Select Type</div>
                    <div className="drop">
                      <h5>
                        <select
                          className="select-level"
                          onChange={handleGoals}
                          id="cars"
                          name="setType"
                          value={settingGoal.setType}
                          form="carform "
                        >
                          <option value="Beginner">Beginner</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                          <option value="Quick">Quick</option>
                        </select>
                      </h5>
                    </div>
                  </div>
                  <div className="goal">
                    <button className="btn-primary" type="submit">
                      Set Goal
                    </button>
                    <p>
                      <input
                        type="number"
                        value={settingGoal.goaltotaltime}
                        onChange={handleGoals}
                        name="goaltotaltime"
                        hidden
                      />
                      {A} Secs a day.
                    </p>
                  </div>
                </div>
              </form>
            </fieldset>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default GoalSetting;
