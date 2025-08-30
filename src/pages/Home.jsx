import React from "react";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import mainbg from "../assets/images/mainbg.png";
import ModernFeatureComponent from "../components/Contentloop";
import SixDivisionsComponent from "../components/SixDevisions";
import IgniteLinkComponent from "../components/Exists";
import CoreDoctrineComponent from "../components/Core";
import EmpowerBusinessComponent from "../components/Empower";
import FAQComponent from "../components/Frequently";
import ContactForm from "../components/GetinTouch";
import IsometricGrowthComponent from "../components/Architet";
import ProfessionalFooter from "../components/HomeFooter";

const Home = () => {
  return (
    <>
      <Header />
      <MainBanner
        heading={
          <>
            We Don’t Automate Businesses <br /> We Engineer Self-Sufficient{" "}
            <br /> Growth Architectures
          </>
        }
        buttonText="Request ProIntellect Consultation"
        backgroundImage={mainbg}
      />
      <ModernFeatureComponent />
      <SixDivisionsComponent />
      <IgniteLinkComponent />
      <CoreDoctrineComponent />
      <EmpowerBusinessComponent />
      <FAQComponent />
      <ContactForm />
      <IsometricGrowthComponent />
      <ProfessionalFooter />
    </>
  );
};

export default Home;
