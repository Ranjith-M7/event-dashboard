import React, { useState } from "react";
import { createContext } from "react";
import eventData from "../../data.json";

export const EventContext = createContext();

const EventContextProvider = (props) => {
  const years = eventData.map((item) => item.Year);
  const [fromYear, setFromYear] = useState(years[0]);
  const [toYear, setToYear] = useState(years[years.length - 1]);

  const [filteredData, setFilteredData] = useState(eventData);

  const value = {
    years,
    eventData,
    fromYear,
    setFromYear,
    toYear,
    setToYear,
    filteredData,
    setFilteredData,
  };

  return (
    <EventContext.Provider value={value}>
      {props.children}
    </EventContext.Provider>
  );
};

export default EventContextProvider;
