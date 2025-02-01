import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import EventContextProvider from "./context/EventContext.jsx";

createRoot(document.getElementById("root")).render(
  <EventContextProvider>
    <App />
  </EventContextProvider>
);
