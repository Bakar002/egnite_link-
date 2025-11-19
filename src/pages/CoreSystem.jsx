import React from 'react'
import Header from "../components/Header";
import MainBanner from '../components/MainBanner';
import mainbg from "../assets/images/mainbg.png";
import InfoSection from '../components/InfoSection';
import photo from "../assets/images/Frame 2147227485.png";
import CoreArchitecture from '../components/Core Architecture';
import OperationalLogicLoop from '../components/OperationalLogicLoop';
import EGniteIntegration from '../components/Integration';
import BusinessImpact from '../components/BussinessImpact';
import ScopeOfWork from '../components/Scope';
import OutcomesOfDeployment from '../components/Deployment';
import InfluenceAtScale from '../components/Influence';
import CarlinkHero from '../components/Carlink';
import ProfessionalFooter from '../components/HomeFooter';

const CoreSystem = () => {
  return (
    <>
      <Header />
      <MainBanner
        heading={<>The Automotive Logic <br /> Division of E-Gnite Link <br /> AI Systems</>}
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
        buttonLink="#"
        image1={photo}
        image2={false}
      />
      {/* <CoreArchitecture /> */}
      <OperationalLogicLoop />
      <EGniteIntegration />
      <BusinessImpact />
      <ScopeOfWork />
      <OutcomesOfDeployment
        title="Outcomes of Deployment"
        outcomes={[
          "Business logic improves itself automatically",
          "All systems communicate, prioritize, adjust in real time",
          "Errors and slowdowns are flagged before performance drops",
          "Campaigns evolve dynamically based on data — not guesswork",
          "Mirror AI gains deeper strategic advisory capabilities"
        ]}
      />
      <CarlinkHero />
      <ProfessionalFooter />
    </>
  )
}

export default CoreSystem