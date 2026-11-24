import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Tables from "./pages/Tables";
import Conversions from "./pages/Conversions";
import Squares from "./pages/Squares";
import SquareRoots from "./pages/SquareRoots";
import Cubes from "./pages/Cubes";
import CubeRoots from "./pages/CubeRoots";
import ConversionPractice from "./pages/ConversionPractice";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/conversions" element={<Conversions />} />
        <Route path="/conversions/practice" element={<ConversionPractice />} />
        <Route path="/squares" element={<Squares />} />
        <Route path="/square-roots" element={<SquareRoots />} />
        <Route path="/cubes" element={<Cubes />} />
        <Route path="/cube-roots" element={<CubeRoots />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
