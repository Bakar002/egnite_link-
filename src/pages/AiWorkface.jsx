import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import mainbg from "../assets/images/1hero.png";
import AIPyramid from "../components/Mirror Ai";
import InfoSection from "../components/InfoSection";
import photo from '../assets/images/2150834131 1.png'
import image from '../assets/images/2M.png'
import CustomAIStaff from "../components/Custom Ai";
import AIRolesDesign from "../components/standard Ai";
import Footer from "../components/Footer";
import OutcomesOfDeployment from "../components/Deployment";
import WorkforceHero from "../components/Build Your";


function AiWorkface() {
  return (
    <>
     <Header />
            <MainBanner
                heading={<>Labor Without Burnout. <br /> Fulfillment Without <br /> Limits.</>}
                subHeading="AI Workforce™ is your operational division of intelligent agents — trained to fulfill tasks, communicate with clients, manage backend workflows, and scale your capacity without hiring or fatigue. This is not virtual assistance. This is intelligent labor architecture."
                buttonText="Start Building Your Workforce"
                backgroundImage={mainbg}
            />
            <AIPyramid />
                        <InfoSection
                            title="What It Is"
                            description={
                                <>
                                    The E-Gnite Growth Method is a proprietary AI-powered
                                    <br />
                                    architecture that replaces addependency, sales team <br /> overload, and
                                    manual fulfillment with logic-based <br /> automation and intelligent systems.
                                </>
                            }
                            subDescription={
                                <>Each deployment becomes its own infrastructure — <br /> tailored to how your business acquires, communicates, <br /> and delivers.</>}
                            buttonText="Book Your Consultation"
                            buttonLink="#"
                            image1={photo}   // bada wala upar
                            image2={image}   // chhota wala neeche overlap me
                        />
                        <CustomAIStaff />
                        <AIRolesDesign />
                        <OutcomesOfDeployment />
                        <WorkforceHero />
                        <Footer />

            
    </>
  );
}
export default AiWorkface;