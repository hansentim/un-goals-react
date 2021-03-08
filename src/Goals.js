import React from "react";

//Skicka ut de 17 målen.
function Goals(props) {
  function handleChange() {
    props.displayGoals(props.goalObj);
  }

  return (
    <section className="titleCards">
      <h3>{props.goalObj.title}</h3>

      <button className="titleBtn" onClick={handleChange}>
        More Info
      </button>
    </section>
  );
}

export default Goals;
