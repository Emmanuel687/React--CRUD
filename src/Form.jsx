import React from "react";
import { useState } from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add</label>
        <input
          type="text"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
