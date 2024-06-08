import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import { Navbar } from "./components";
import CustomRoute from "./routes";
import AnnouncementBar from "./components/AnnouncementBar";

function App() {
  return (
    <>
      <Router>
        <AnnouncementBar />
        <Navbar />
        <CustomRoute />
      </Router>
    </>
  );
}

export default App;
