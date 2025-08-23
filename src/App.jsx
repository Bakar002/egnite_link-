import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GrowthMethod from "./pages/GrowthMethod";
import ProintellectSystem from "./pages/ProintellectSystem";
import AiWorkface from "./pages/AiWorkface";

const App = () => {
  return (
    <Router>
      <Routes>
                <Route path="/" element={<Home />} />
        <Route path="systems-engineering" element={<Home />} />
        <Route path="/growth-method" element={<GrowthMethod />} />
        <Route path="/prointellect" element={< ProintellectSystem/>} />
        <Route path="/ai-workforce" element={< AiWorkface/>} />
      </Routes>
    </Router>
  );
};

export default App;
