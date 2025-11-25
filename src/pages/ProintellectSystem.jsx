import React from "react";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import mainbg from "../assets/images/prointellectHero.png";
import InfoSection from "../components/InfoSection";
import photo from '../assets/images/ccc.png'
import AIProfessionals from "../components/Deploy";
import CustomAIProfessionals from "../components/CustomAi";
import StrategicUseCases from "../components/Strategic";
import OutcomesOfDeployment from "../components/Deployment";
import NetworkGlobe from "../components/NetworkGlobe";
import ProfessionalFooter from "../components/HomeFooter";
import StructureHero from "../components/Structure begins";
const ProintellectSystem = () => {
  return (
    <>
      <Header />
      <MainBanner
        heading={<>ProIntellect Systems™ <br /> :Intelligence You Can Deploy. <br />Expertise That Doesn’t Expire.</>}
        subHeading="ProIntellect Systems™ equips your business with certified-grade AI professionals — designed to support legal, financial, operational, medical, and executive decisions with structure, speed, and stability."
        buttonText="Request ProIntellect Consultation"
        backgroundImage={mainbg}
      />
      <InfoSection
        title="Why ProIntellect Exists"
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
        buttonText="Book Your Consultation"
        buttonLink="#"
        image1={photo} // bada wala upar
      />
      <AIProfessionals />
      <CustomAIProfessionals />
      <StrategicUseCases />
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
      <NetworkGlobe />
      <StructureHero />
      <ProfessionalFooter />

    </>
  );
};

export default ProintellectSystem;
