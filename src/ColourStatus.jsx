import React from "react";
import "./ColourStatus.css";
import ReactApexChart from "react-apexcharts";

const ColourStatus = ({individuals}) => {
    const adults = individuals.filter((individual) => individual.isAdult).length;
    const children = individuals.filter(
      (individual) => !individual.isAdult
    ).length;
  
  const options = {
    chart: {
      type: "bar",
    },
    xaxis: {
      categories: [
        "Adults",
        "Children",
  
      ],
    },
  };

  const series = [
    {
      name: "Individuals",
      data: [adults,children]
    },
  ];

  return (
    <div className="card-container">
      <div className="card">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default ColourStatus;
