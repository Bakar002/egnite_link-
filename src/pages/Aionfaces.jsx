import React from "react";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import mainbg from "../assets/images/mainbg.png";
import AionFacesComponent from "../components/Aionfaces";
import AionModelLibrary from "../components/Aionlibrary";
import CustomAiONCreation from "../components/AionCreations";
import DeploymentUseCases from "../components/UseCases";
import OwnershipLicensing from "../components/Ownership";
import OutcomesOfDeployment from "../components/Deployment";
import InfluenceAtScale from "../components/Influence";
import ProfessionalFooter from "../components/HomeFooter";

const Aionfaces = () => {
  return (
    <>
      <Header />
      <MainBanner
        heading="Intelligence You Can Deploy. Expertise That Doesn’t Expire"
        subHeading="ProIntellect Systems™ equips your business with certified-grade AI professionals — designed to support legal, financial, operational, medical, and executive decisions with structure, speed, and stability."
        buttonText="Request ProIntellect Consultation"
        backgroundImage={mainbg}
      />
      <AionFacesComponent />
      <AionModelLibrary />
      <CustomAiONCreation />
      <DeploymentUseCases />
      <OwnershipLicensing />
<OutcomesOfDeployment 
  title="Outcomes of Deployment"
  outcomes={[
    "Your custom outcome 1",
    "Your custom outcome 2", 
    "Your custom outcome 3",
    "Your custom outcome 4",
    "Your custom outcome 5"
  ]}
/>      <InfluenceAtScale />
      <ProfessionalFooter />
    </>
  );
};

export default Aionfaces;
