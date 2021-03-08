import React from "react";

//Skicka ut sub-info.
function GoalInfo(props) {
  function handleChange() {
    props.removeGoals("");
  }

  return (
    <section className="moreInfo">
      <button className="backBtn" onClick={handleChange}>
        <i className="fas fa-long-arrow-alt-left"></i>
      </button>
      <div className="infoContent">
        <h3>{props.moreInfo.description}</h3>

        {props.moreInfo.targets.map((subgoal) => {
          return (
            <p key={subgoal.code}>
              {" "}
              <b> {subgoal.code}</b>
              <br /> {subgoal.title}
            </p>
          );
        })}
      </div>
    </section>
  );
}

export default GoalInfo;
