import React from 'react'
import Header from "../components/Header";
import MainBanner from '../components/MainBanner';
import mainbg from "../assets/images/carlink.png";
import InfoSection from '../components/InfoSection';
import photo from "../assets/images/ccccc.png";
import CoreArchitecture from '../components/Core Architecture';
import OperationalLogicLoop from '../components/OperationalLogicLoop';
import EGniteIntegration from '../components/Integration';
import BusinessImpact from '../components/BussinessImpact';
import ScopeOfWork from '../components/Scope';
import OutcomesOfDeployment from '../components/Deployment';
import InfluenceAtScale from '../components/Influence';
import CarlinkHero from '../components/Carlink';
import ProfessionalFooter from '../components/HomeFooter';
import Cards from '../components/Core-Architecture';
import ContactForm from '../components/GetinTouch';
import Integration from '../components/Integration';
import IntegrationCore from '../components/IntegrationCore';

const CoreSystem = () => {
  const leftContent = {
    title: "E-Gnite Doctrine",
    points: [
      "Operate independently.",
      "Intelligence replaces instruction.",
      "Outline strategy effectively."
    ]
  };

  const rightContent = {
    title: "CARLink Core App",
    points: [
      "Self-governing subsystems.",
      "Real-time reasoning and learning.",
      "Predefine campaigns and short-term plans."
    ]
  };

  return (
    <>
      <Header />
      <MainBanner
        heading={<>CARLink Core Systems™ <br />The AI Logic Core of <br /> Automotive Retail</>}
        subHeading="CARLink Core Systems™ is a next-generation digital infrastructure designed to redefine the very foundation of modern automotive retail. As the Automotive Logic Division of E-Gnite Link AI Systems™, it represents the applied manifestation of the Car Dealer Digital Evolution™—a transformative framework that unifies marketing, acquisition, and operational logic into one self-improving intelligent system."
        buttonText=" Request Private Session"
        backgroundImage={mainbg}
      />
      <InfoSection
        title="The Purpose of CARLink Core Systems™"
        description={
          <>
            To establish the AI-driven logic core as the new operational standard for modern dealerships — removing reliance on outdated tools, fragmented services, and manual management systems. To empower automotive dealers with a total intelligent infrastructure that:
          </>
        }
        subDescription={
          <>
            Each deployment becomes its own infrastructure — <br /> tailored to
            how your business acquires, communicates, <br /> and delivers.
          </>
        }
        buttonText="Book Your Consultation"
        buttonLink="#contact-section"
        image1={photo}
        image2={false}
      />
      <Cards />
      {/* <CoreArchitecture /> */}
      <OperationalLogicLoop />
      <IntegrationCore
        mainTitle="Integration with E-Gnite Link AI Systems™"
        leftColumn={leftContent}
        rightColumn={rightContent}
        arrowsCount={4}
        cardGradient="linear-gradient(148.43deg, #1a1a1a 30%, #3d3d3d 80%)"
        bottomText="Business Impact"
        containerClass="bg-black"
      />
      <BusinessImpact />
      <ScopeOfWork />
      <ContactForm />

      <OutcomesOfDeployment
        title="Final Deliverables"
        outcomes={[
          "An AI-integrated digital ecosystem",
          "Unified marketing and operational control",
          "Predictive intelligence infrastructure",
          "Continuous logic-based self-optimization",
          "Strategic autonomy from external vendors"
        ]}
      />
      <CarlinkHero />
      {/* <ProfessionalFooter /> */}
    </>
  )
}

export default CoreSystem