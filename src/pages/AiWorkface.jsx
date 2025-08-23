import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import mainbg from "../assets/images/mainbg.png";
import AIPyramid from "../components/Mirror Ai";
import InfoSection from "../components/InfoSection";
import photo from '../assets/images/photo.png'
import image from '../assets/images/2nd.png'
import CustomAIStaff from "../components/Custom Ai";
import AIRolesDesign from "../components/standard Ai";


function AiWorkface() {
  return (
    <>
     <Header />
            <MainBanner
                heading="Intelligence You Can Deploy. Expertise That Doesn’t Expire"
                subHeading="ProIntellect Systems™ equips your business with certified-grade AI professionals — designed to support legal, financial, operational, medical, and executive decisions with structure, speed, and stability."
                buttonText="Request ProIntellect Consultation"
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
            
    </>
  );
}
export default AiWorkface;