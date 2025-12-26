import React from 'react'
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import mainbg from "../assets/images/core systemhero.png";
import PropertyHero from '../components/Properties';
import ChallengeCards from '../components/Chellange';
import REALTYLinkModel from '../components/DigitalEvaluation';
import KeyOutcomeThemes from "../components/Outcome";
import OutcomesDesign from '../components/Increasing';
import CustomAIStaff from '../components/Custom Ai';
import ProfessionalFooter from "../components/HomeFooter";
import EgniteIntegration from '../components/RealtyLinkOverly';
import ConnectionBanner from '../components/ConnectionBanner';
import DigitalEvolutionHero from '../components/DigitalEvolutionHero';
import ContactForm from '../components/GetinTouch';


const RealityLink = () => {
  //outcomes pag data
  const themesData = [
    {
      title: "Listing Automation & Optimization",
      description: "AI-assisted content, tagging, and portal synchronisation."
    },
    {
      title: "Marketing Automation",
      description: "Geo-targeted campaigns, CRM automation, and behaviour-based outreach."
    },
    {
      title: "Operational Integration",
      description: "Unified dashboards for listings, leads, and performance."
    },
    {
      title: "Analytics & Forecasting",
      description: "Predictive insights on revenue, occupancy, and demand."
    },
    {
      title: "AI Intelligence Units",
      description: "Custom GPT-based assistants for executive and team use."
    },
    {
      title: "Governance & Security",
      description: "Data integrity, compliance, and ethical automation oversight."
    }
  ];
  return (
    <>
      <Header />
      <MainBanner
        heading={<>REALTYLink Core Systems™  <br />
          The Infrastructure of Real-Estate Evolution</>}
        subHeading="REALTYLink™ transforms property organisations into intelligent, connected ecosystems. Through automation, analytics, and adaptive logic, every listing, transaction, and decision operates as part of one continuous digital architecture. "
        buttonText=" Begin Your Evolution"
        backgroundImage={mainbg}
      />
      <PropertyHero />
      <ChallengeCards />
      {/* <REALTYLinkModel /> */}
      <KeyOutcomeThemes title="Core Capabilities" themes={themesData} />
      <OutcomesDesign />
      <EgniteIntegration />
      <ContactForm />

      <ConnectionBanner />
      <DigitalEvolutionHero />
      {/* <ProfessionalFooter /> */}
    </>
  )
}

export default RealityLink