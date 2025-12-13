import React from 'react'
import Header from '../components/Header'
import MainBanner from '../components/MainBanner'
import mainbg from "../assets/images/bizlink hero.png";
import BizLinkHero from '../components/BizLink';
import DigitalEvolution from '../components/digitalphase';
import CoreArchitecture from '../components/CoreArchitecture';
import Doctrine from '../components/Doctrine';
import { Award } from 'lucide-react';
import OutcomesOfDeployment from '../components/Deployment';
import BusinessLogic from '../components/BussinessLogic';
import ProfessionalFooter from '../components/HomeFooter';
import EGniteIntegration from '../components/Integration';
import ContactForm from '../components/GetinTouch';

const BizLink = () => {
  const leftContent = {
    title: "Old Enterprise",
    points: [
      "Departmental silos",
      "Manual decisioning",
      "Reports after results",
      'Human micromanagement',
      'Dependency on vendors'
    ]
  };

  const rightContent = {
    title: "BizLink-Evolved Enterprise",
    points: [
      "Unified logic network",
      "Predictive, data-driven reasoning",
      "Real-time adaptive insight",
      'Automated governance',
      'Digital self-reliance'
    ]
  };
  return (
    <>
      <Header />
      <MainBanner
        heading={<>BizLink Core Systems™ <br />
          Where Business Becomes Logic</>}
        subHeading="BizLink Core Systems™ unifies every function — marketing, operations, finance, and strategy — into one adaptive logic infrastructure that learns, predicts, and evolves."
        buttonText="  Begin the Digital Evolution"
        backgroundImage={mainbg}
      />
      <BizLinkHero />
      <DigitalEvolution />
      <CoreArchitecture />
      <EGniteIntegration
        mainTitle="The BizLink Advantage"
        leftColumn={leftContent}
        rightColumn={rightContent}
        arrowsCount={4}
        cardGradient="linear-gradient(148.43deg, #1a1a1a 30%, #3d3d3d 80%)"
        containerClass="bg-black"
      />
      <Doctrine
        title="The E-Gnite Doctrine "
        description="BizLink Core Systems™ operates under the same founding principles that guide all E-Gnite Link AI Systems™ architectures:"
        features={[
          {
            icon: Award,
            text: "Systems must operate independently.",
          },
          {
            icon: Award,
            text: "Intelligence must replace instruction.",
          },
          {
            icon: Award,
            text: "Infrastructure must outlive strategy.",
          },
          {
            icon: Award,
            text: "Data is the logic of enterprise.",
          },
          {
            icon: Award,
            text: "Evolution is perpetual.",
          },
        ]}
      />
      <ContactForm />

      <OutcomesOfDeployment
        title="Outcomes of Evolution"
        outcomes={[
          "+25–40% marketing ROI through unified logic",
          "+15–25% increase in sales performance",
          "−50% manual workload through automation",
          "Predictive forecasting accuracy above 85%",
          "Continuous self-optimization governed by logic"
        ]}
      />
      <BusinessLogic />
      {/* <ProfessionalFooter /> */}
    </>
  )
}

export default BizLink