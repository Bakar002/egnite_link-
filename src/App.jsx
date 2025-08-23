import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GrowthMethod from "./pages/GrowthMethod";
import ProintellectSystem from "./pages/ProintellectSystem";

const App = () => {
  return (
    <Router>
      <Routes>
                <Route path="/" element={<Home />} />
        <Route path="systems-engineering" element={<Home />} />
        <Route path="/growth-method" element={<GrowthMethod />} />
        <Route path="/prointellect" element={< ProintellectSystem/>} />
      </Routes>
    </Router>
  );
};

export default App;
