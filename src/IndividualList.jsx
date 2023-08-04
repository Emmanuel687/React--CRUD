import React from "react";
import Individual from "./Individual";
const IndividualList = ({ individuals,deleteIndividual,onUpdate }) => {
  return (
    <>
      {individuals.map((person) => (
        <ul key={person.id}>
          <Individual person={person} deleteIndividual={deleteIndividual} onUpdate={onUpdate} />
        </ul>
      ))}
    </>
  );
};

export default IndividualList;
