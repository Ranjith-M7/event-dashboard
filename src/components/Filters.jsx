import React, { useContext, useEffect, useState } from "react";
import { EventContext } from "../context/EventContext";

const Filters = () => {
  const {
    years,
    eventData,
    fromYear,
    setFromYear,
    toYear,
    setToYear,
    setFilteredData,
  } = useContext(EventContext);

  // FILTER DATA //
  useEffect(() => {
    setFilteredData(
      eventData.filter((data) => data.Year >= fromYear && data.Year <= toYear)
    );
  }, [fromYear, toYear]);

  return (
    <div>
      {/* Filters */}
      <div className="mb-5 mt-5 text-center">
        <h2 className=" text-lg font-medium mb-4 ">Select the range</h2>
        <div className="flex gap-4">
          <label className="font-medium text-sm">
            From Year:
            <select
              onChange={(e) => setFromYear(e.target.value)}
              className="bg-white text-gray-700  border-2 rounded-md  px-3 py-2 font-normal ml-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              value={fromYear}
            >
              {years.map((year) => (
                <option
                  value={year}
                  key={year}
                  className="bg-white text-gray-700"
                >
                  {year}
                </option>
              ))}
            </select>
          </label>

          <label className="font-medium text-sm">
            To Year:
            <select
              onChange={(e) => setToYear(e.target.value)}
              className="bg-white text-gray-700 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out px-3 py-2 font-normal ml-2"
              value={toYear}
            >
              {years
                .filter((year) => year >= fromYear)
                .map((year) => (
                  <option value={year} key={year}>
                    {year}
                  </option>
                ))}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
