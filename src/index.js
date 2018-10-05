import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { EventsTable } from "./EventsTable";

const eventsData = [
  {
    key: 1,
    title: "Bulletproof EP1",
    fileType: "Atmos",
    process: "match media",
    performedBy: "Denise Etridge",
    operationNote: "-",
    updatedAt: "26/09/2018 17:21",
    status: "complete"
  },
  {
    key: 2,
    title: "Dexter EP2",
    fileType: "Video",
    process: "Compliance",
    performedBy: "Dane Gill",
    operationNote: "passed",
    updatedAt: "21/09/2018 12:21",
    status: "inProgress"
  }
];

function App() {
  return (
    <div className="App">
      <EventsTable eventsData={eventsData} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
