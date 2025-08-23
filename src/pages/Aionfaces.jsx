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
import Footer from "../components/Footer";

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
      <OutcomesOfDeployment />
      <InfluenceAtScale />
      <Footer />
    </>
  );
};

export default Aionfaces;
