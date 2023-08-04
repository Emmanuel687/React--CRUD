import React, { useState } from "react";
import Form from "./Form";
import IndividualList from "./IndividualList";
import Header from "./Header";
import Footer from "./Footer";

import "./App.css";
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
        individual.id === id
          ? { ...individual, isAdult: !individual.isAdult }
          : individual
      )
    );
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <div className="left-column">
          <Form addIndividual={handleCreateIndividual} individuals={individuals}/>
        </div>

        <div className="right-column">
          <IndividualList
            individuals={individuals}
            deleteIndividual={handleDeleteIndividual}
            onUpdate={handleToggleIndividual}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
