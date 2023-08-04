import React from "react";
import "./index.css";

const Individual = ({ person, deleteIndividual, onUpdate }) => {
  return (
    <div className="individual-container">
      <p className={person.isAdult ? "name underlined" : "name"}>{person.fullName}</p>
      <button onClick={() => deleteIndividual(person.id)} className="delete-button">Delete</button>
      <input
        value={person.isAdult}
        type="checkbox"
        onChange={() => onUpdate(person.id)}
        className="checkbox"
      />
      {person.isAdult ? <p className="status">Adult</p> : <p className="status">Child</p>}
    </div>
  );
};

export default Individual;
