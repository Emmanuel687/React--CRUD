import React from "react";
import "./CheckIndividualStatus.css";

const CheckIndividualStatus = ({ individuals }) => {
  const Adults = individuals.filter((individual) => individual.isAdult).length;
  const Children = individuals.filter(
    (individual) => !individual.isAdult
  ).length;

  return (
    <div className="card-container">
      <div className="card">
        <p>Individual Number:-{individuals.length}</p>
        <p>Number of Adults:{Adults}</p>
        <p>Number of Children:-{Children}</p>
      </div>
    </div>
  );
};

export default CheckIndividualStatus;
