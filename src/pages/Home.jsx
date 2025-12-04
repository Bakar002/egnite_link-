


import React from "react";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import mainbg from "../assets/images/home Hero copy.png";
import ModernFeatureComponent from "../components/Contentloop";
import SixDivisionsComponent from "../components/SixDevisions";
import IgniteLinkComponent from "../components/Exists";
import CoreDoctrineComponent from "../components/Core";
import EmpowerBusinessComponent from "../components/Empower";
import FAQComponent from "../components/Frequently";
import ContactForm from "../components/GetinTouch";
import IsometricGrowthComponent from "../components/Architet";
import ProfessionalFooter from "../components/HomeFooter";
import SecurityShieldComponent from "../components/NothingElse";
import StrategicOutcomes from "../components/SeeStrategic";
import BusinessTransformation from "../components/Before";
import StrategicUseCases from "../components/Strategic";
// images cards
import c1 from '../assets/images/stc1.png';
import c2 from '../assets/images/stc2.png';
import c3 from '../assets/images/stc3.png';
import c4 from '../assets/images/stc2.png';
import c5 from '../assets/images/stc5.png';
import c6 from '../assets/images/stc6.png';
import ROITimeline from "../components/Time line";


const useCasesData = [
  { title: "Agencies", description: "3x–10x more qualified calls booked without outbound teams", image: c1 },
  { title: "Clinics", description: "Patient intake, reminders, and team coordination handled by AI", image: c2 },
  { title: "Tech/SaaS", description: "Demos and signups generated daily without ad spend or SDRs", image: c3 },
  { title: "Real Estate", description: "Property inquiries, buyer matching, and showing bookings handled by system", image: c4 },
  { title: "Education ", description: "Full client lifecycle — from signup to certification — systemized", image: c5 },
  { title: "Retail/E-Com", description: "Lead generation, scheduling, and quote delivery run on autopilot", image: c6 },
];

const Home = () => {
  return (
    <>
      <Header />
      <MainBanner
        heading={
          <>
            We Don’t Automate Businesses <br /> We Engineer Self-Sufficient <br /> Growth Architectures
          </>
        }
        buttonText=" Request Private Consultation"
        backgroundImage={mainbg}
      />
      <ModernFeatureComponent />
      <SixDivisionsComponent />
      <IgniteLinkComponent />
      <CoreDoctrineComponent />
      <SecurityShieldComponent />
      <StrategicOutcomes />
      <StrategicUseCases useCases={useCasesData} title={'Industry-Specific Outcomes'} />
       <ROITimeline />
      <BusinessTransformation />
      <EmpowerBusinessComponent />
      {/* <FAQComponent /> */}
      <ContactForm />
      <IsometricGrowthComponent />
      {/* <ProfessionalFooter /> */}
    </>
  );
};

export default Home;
