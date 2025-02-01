import React, { useContext } from "react";
import { EventContext } from "../context/EventContext";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const { filteredData } = useContext(EventContext);

  let totalMale = 0,
    totalFemale = 0,
    totalChildren = 0,
    totalPeople = 0;

  // Calculate total number of Male, Female, Children
  filteredData.forEach((item) => {
    totalMale += item.Male || 0;
    totalFemale += item.Female || 0;
    totalChildren += item.Children || 0;
    totalPeople += item.TotalPeople || 0;
  });
  console.log(totalPeople);

  // Calculate total people
  // const totalPeople = totalMale + totalFemale + totalChildren;

  const malePer =
    totalPeople > 0 ? ((totalMale / totalPeople) * 100).toFixed(2) : 0;
  const femalePer =
    totalPeople > 0 ? ((totalFemale / totalPeople) * 100).toFixed(2) : 0;
  const childrenPer =
    totalPeople > 0 ? ((totalChildren / totalPeople) * 100).toFixed(2) : 0;

  const pieChartData = {
    labels: [
      `Male (${malePer}%)`,
      `Female (${femalePer}%)`,
      `Children (${childrenPer}%)`,
    ],
    datasets: [
      {
        data: [totalMale, totalFemale, totalChildren],
        backgroundColor: [
          "rgba(145, 6, 185, 1)",
          "rgba(255, 236, 7, 1)",
          "rgba(58, 221, 0, 1)",
        ],
        hoverBackgroundColor: [
          "rgba(145, 6, 185, 0.9)",
          "rgba(255, 236, 7, 0.9)",
          "rgba(58, 221, 0, 0.9)",
        ],
      },
    ],
  };

  return (
    <div className="w-full sm:w-1/2 md:w-2/6 mt-5 lg:mt-10">
      <h2 className="text-center text-lg font-medium mb-2">
        Percentage of people population
      </h2>
      <Pie data={pieChartData} />
    </div>
  );
};

export default PieChart;
