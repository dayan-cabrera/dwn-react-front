import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { DownloadFromVisuales } from "./components";

const CustomRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/visuales" element={<DownloadFromVisuales />} />
    </Routes>
  );
};

export const routesMap = {
  home: "/",
  visuales: "/visuales",
};

export default CustomRoute;
