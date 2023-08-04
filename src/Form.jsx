import React from "react";
import { useState } from "react";
import "./index.css"

const Form = ({ addIndividual }) => {
  const [person, setPerson] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!person) return;

    const individualObject = {
      id: crypto.randomUUID(),
      fullName: person,
      isAdult: false,
    };

    addIndividual(individualObject);
    setPerson("");
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="my-form">
        <label className="form-label">Add</label>
        <input
          type="text"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
          className="form-input"
        />
        <input type="submit" className="form-button"/>
      </form>
    </div>
  );
};

export default Form;
