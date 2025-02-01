import React, { useContext } from "react";
import { EventContext } from "../context/EventContext";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const { filteredData, fromYear, toYear } = useContext(EventContext);

  const chartData = {
    labels: filteredData.map((data) => data.Year),
    datasets: [
      {
        label: "Male",
        data: filteredData.map((data) => data.Male || 0),
        backgroundColor: "rgba(180, 128, 255, 0.8)",
        hoverBackgroundColor: "rgba(180, 128, 255, 1)",
      },
      {
        label: "Female",
        data: filteredData.map((data) => data.Female || 0),
        backgroundColor: "rgba(255, 255, 153, 0.8)",
        hoverBackgroundColor: "rgba(255, 255, 153, 1)",
      },
      {
        label: "Children",
        data: filteredData.map((data) => data.Children || 0),
        backgroundColor: "rgba(135, 206, 250, 0.8)",
        hoverBackgroundColor: "rgba(135, 206, 250, 1)",
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: { display: true, text: `Event Data from ${fromYear} - ${toYear}` },
    },
  };

  return (
    <div className="w-full h-fit md:w-3/4 mx-auto p-4  mt-5 lg:mt-10">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
