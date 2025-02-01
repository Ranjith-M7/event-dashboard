import React from "react";
import Filters from "../components/Filters";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";

const Home = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <Filters />
      <BarChart />
      <PieChart />
    </div>
  );
};

export default Home;
