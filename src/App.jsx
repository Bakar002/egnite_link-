import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GrowthMethod from "./pages/GrowthMethod";
import ProintellectSystem from "./pages/ProintellectSystem";
import AiWorkface from "./pages/AiWorkface";
import Aionfaces from "./pages/Aionfaces";
import IntelligenceSystem from "./pages/IntelligenceSystem";
import SystemsEngeenring from "./pages/SystemsEngeenring";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/systems-engineering" element={<SystemsEngeenring />} />
        <Route path="/growth-method" element={<GrowthMethod />} />
        <Route path="/prointellect" element={< ProintellectSystem/>} />
        <Route path="/ai-workforce" element={< AiWorkface/>} />
        <Route path="/aion-faces" element={< Aionfaces/>} />
        <Route path="/intelligence-systems" element={< IntelligenceSystem/>} />
      </Routes>
    </Router>
  );
};

export default App;
