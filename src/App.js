import React, { useEffect, useState } from "react";
import "./App.css";
import Goals from "./Goals";
import GoalInfo from "./GoalInfo";

function App() {
  //useState
  const [goalsApi, setGoalsApi] = useState([]);
  const [moreInfo, setMoreInfo] = useState("");
  //Hämta data från API
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true"
      );
      const data = await response.json();
      setGoalsApi(data);
    }

    fetchData();
  }, []);

  function displayGoals(Goals) {
    setMoreInfo(Goals);
  }

  function removeGoals(goal) {
    setMoreInfo(goal);
  }

  return (
    <div className="wrapper">
      <section className="mainPage">
        {moreInfo ? (
          <GoalInfo removeGoals={removeGoals} moreInfo={moreInfo} />
        ) : (
          <section>
            <div className="logoTitle">
              <img
                src="https://sdgs.un.org/themes/custom/porto/assets/images/logo.svg"
                alt=""
              />
              <h1>THE 17 GOALS</h1>
            </div>
            <div className="goalsSection">
              {goalsApi.map((goal) => (
                <Goals
                  goalObj={goal}
                  key={goal.code}
                  displayGoals={displayGoals}
                />
              ))}
            </div>
          </section>
        )}
      </section>
    </div>
  );
}

export default App;
