import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import LandingPage from "./LandingPage";
import ServicePage from "./ServicePage";


const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:city" element={<Home />} />
        <Route path="/:city/:id/services" element={<ServicePage />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
