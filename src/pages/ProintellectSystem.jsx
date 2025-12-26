import React from "react";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import mainbg from "../assets/images/prointellectHero.png";
import InfoSection from "../components/InfoSection";
import photo from '../assets/images/prointellect 2ndcom.png'
import AIProfessionals from "../components/Deploy";
import CustomAIProfessionals from "../components/CustomAi";
import StrategicUseCases from "../components/Strategic";
import OutcomesOfDeployment from "../components/Deployment";
import NetworkGlobe from "../components/NetworkGlobe";
import ProfessionalFooter from "../components/HomeFooter";
import StructureHero from "../components/Structure begins";
import Begin from "../components/begin";
// card images
import c1 from '../assets/images/stc1.png';
import c2 from '../assets/images/stc2.png';
import c3 from '../assets/images/stc3.png';
import c4 from '../assets/images/stc2.png';
import c5 from '../assets/images/stc5.png';
import c6 from '../assets/images/stc6.png';
import ContactForm from "../components/GetinTouch";

const useCasesData = [
  { title: "Agencies", description: "AI reviews scopes, contracts, manages client communications", image: c1 },
  { title: "Clinics", description: "AI triages patients, manages workflow, flags billing errors", image: c2 },
  { title: "Tech/SaaS", description: "AI supports roadmap, risk evaluation, investor strategy", image: c3 },
  { title: "Real Estate", description: "AI qualifies buyers, advises deal logic", image: c4 },
  { title: "Coaches/Edu", description: "AI ensures pacing, intellectual property, certification flow", image: c5 },
  { title: "Retail/E-Com", description: "AI handles pricing logic, claim safety, bundling", image: c6 },
];
const ProintellectSystem = () => {
  return (
    <>
      <Header />
      <MainBanner
        heading={<>ProIntellect Systems™ </>}
        subHeading="ProIntellect Systems™ equips your business with certified-grade AI professionals — designed to support legal, financial, operational, medical, and executive decisions with structure, speed, and stability."
        buttonText="Request ProIntellect Consultation"
        backgroundImage={mainbg}
      />
      <InfoSection
        title="Why ProIntellect Exists?"
        description={
          <>
            Automation without intelligence becomes faster chaos. <br /> Intelligence without structure becomes indecision. <br /> ProIntellect Systems™ integrates deployable, domain - <br />specific AI into your business architecture — empowering <br /> operations with professional logic across high- risk, <br />   high-value functions. This is how AI stops answering and starts  advising
          </>
        }
        subDescription={
          <>
            Each deployment becomes its own infrastructure — <br /> tailored to
            how your business acquires, communicates, <br /> and delivers.
          </>
        }
        buttonLink="#"
        image1={photo}
      />
      <AIProfessionals />
      <CustomAIProfessionals />
      <StrategicUseCases useCases={useCasesData} title={'Strategic Use Cases'} />
      <ContactForm />

      <OutcomesOfDeployment
        title="Outcomes of Deployment"
        outcomes={[
          "Expert insight without consultant delays",
          "Instant logic support across complex functions",
          "Lower exposure to compliance and decision risk",
          "Human time preserved for nuance, not repetition",
          "Systems that learn and adapt over time"
        ]}
      />
      {/* <NetworkGlobe /> */}
      {/* <StructureHero /> */}
      <Begin
        title="Structure Begins With Smart Advisors"
        description="A Single AI Professional Can Replace Weeks Of Back-And-Forth — With Structured, Scenario-Based Logic At Your Fingertips."
        buttonText="Request Consultation"
      />
      {/* <ProfessionalFooter /> */}

    </>
  );
};

export default ProintellectSystem;
