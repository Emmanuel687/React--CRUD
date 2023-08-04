import React, { useState } from "react";
import Form from "./Form";
import IndividualList from "./IndividualList";
const App = () => {
  const people = [
    { id: 0, fullName: "Emmanuel Koech", isAdult: false },
    { id: 1, fullName: "Sharon Jemutai", isAdult: false },
  ];
  const [individuals, setIndividuals] = useState(people);

  const handleCreateIndividual = (individual) => {
    setIndividuals([...individuals, individual]);
  };

  const handleDeleteIndividual = (id) => {
    setIndividuals(individuals.filter((individual) => individual.id !== id));
  };
  const handleToggleIndividual = (id) => {
    setIndividuals(
      individuals.map((individual) =>
        individual.id === id ? { ...individual, isAdult: !individual.isAdult } : individual
      )
    );
  };

  return (
    <div>
      <Form addIndividual={handleCreateIndividual} />
      <IndividualList
        individuals={individuals}
        deleteIndividual={handleDeleteIndividual}
        onUpdate={handleToggleIndividual}
      />
    </div>
  );
};

export default App;
