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
import Outcomes from "./pages/Outcomes";
import CoreSystem from "./pages/CoreSystem";
import RealityLink from "./pages/RealityLink";
import BizLink from "./pages/BizLink";
import FAQComponent from "./components/Frequently";
import ProfessionalFooter from "./components/HomeFooter";
import ContactForm from "./components/GetinTouch";
import ContactPage from "./pages/Contact-us";
import FAQ from "./pages/FAQ";
import TermCondition from "./pages/TermCondition";
import ScrollToTopButton from "./components/ScrollTopButton";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import IntelligentWebsites from "./pages/IntelligentWebsites";

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/systems-engineering" element={<SystemsEngeenring />} />
        <Route path="/growth-method" element={<GrowthMethod />} />
        <Route path="/prointellect" element={< ProintellectSystem/>} />
        <Route path="/ai-workforce" element={< AiWorkface/>} />
        <Route path="/aion-faces" element={< Aionfaces/>} />
        <Route path="/intelligence-systems" element={< IntelligenceSystem/>} />
        {/* <Route path="/out-comes" element={< Outcomes/>} /> */}
        <Route path="/core-system" element={< CoreSystem/>} />
        <Route path="/realty-link" element={< RealityLink/>} />
        <Route path="/biz-link" element={< BizLink/>} />
        <Route path="/faqs" element={< FAQ/>} />
        {/* <Route path="/contact-us" element={< ContactPage/>} /> */}
        <Route path="/terms-conditions" element={< TermCondition/>} />
        <Route path="/privacy-policy" element={< PrivacyPolicyPage/>} />
        <Route path="/intelligent-websites-category" element={< IntelligentWebsites/>} />

      </Routes>

      <ProfessionalFooter />
    </Router>
  );
};

export default App; 
