import React from "react";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import mainbg from "../assets/images/mainbg.png";
import InfoSection from "../components/InfoSection";
import photo from '../assets/images/ccc.png'
import AIProfessionals from "../components/Deploy";
import CustomAIProfessionals from "../components/CustomAi";
import StrategicUseCases from "../components/Strategic";
import OutcomesOfDeployment from "../components/Deployment";
import NetworkGlobe from "../components/NetworkGlobe";
import Footer from "../components/Footer";

const ProintellectSystem = () => {
  return (
    <>
      <Header />
      <MainBanner
        heading="Intelligence You Can Deploy. Expertise That Doesn’t Expire"
        subHeading="ProIntellect Systems™ equips your business with certified-grade AI professionals — designed to support legal, financial, operational, medical, and executive decisions with structure, speed, and stability."
        buttonText="Request ProIntellect Consultation"
        backgroundImage={mainbg}
      />
      <InfoSection
        title="What It Is"
        description={
          <>
            The E-Gnite Growth Method is a proprietary AI-powered
            <br />
            architecture that replaces addependency, sales team <br /> overload,
            and manual fulfillment with logic-based <br /> automation and
            intelligent systems.
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
      < OutcomesOfDeployment />
      <NetworkGlobe />
      <Footer />

    </>
  );
};

export default ProintellectSystem;
