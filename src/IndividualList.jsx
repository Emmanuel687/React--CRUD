import React from "react";
import Individual from "./Individual";
const IndividualList = ({ individuals }) => {
  return (
    <>
      {individuals.map((person) => (
        <ul key={person.id}>
          <Individual person={person} />
        </ul>
      ))}
    </>
  );
};

export default IndividualList;
