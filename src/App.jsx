import React from "react";
import Form from "./Form";
import IndividualList from "./IndividualList";
const App = () => {
  const individuals = [
    {id:0, fullName: "Emmanuel Koech", isAdult: true },
    {id:1, fullName: "Sharon Jemutai", isAdult: false },
  ];
  
  return (
    <div>
      <Form />
      <IndividualList individuals={individuals} />
    </div>
  );
};

export default App;
