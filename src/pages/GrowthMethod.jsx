import React from 'react'
import Header from '../components/Header'
import MainBanner from '../components/MainBanner';
import mainbg from "../assets/images/mainbg.png";
import InfoSection from '../components/InfoSection'
import Features from '../components/Features'
import GrowthMethodPhases from '../components/Growth';
import GrowthSystemsGrid from '../components/GrowthSystem';
import WhoItsFor from '../components/Whosection';
import OutcomesOfDeployment from '../components/Deployment';
import GrowthMethodBanner from '../components/Private';
import photo from '../assets/images/photo copy.png'
import image from '../assets/images/grwoth photo2.png'
import one from '../assets/images/IMG.png';
import ProfessionalFooter from '../components/HomeFooter';
import img1 from '../assets/images/key sytemc1.png';
import img2 from '../assets/images/keysystem c2.png';
import img3 from '../assets/images/keysystemc3.png';
import img4 from '../assets/images/keysystemc4.png';
import img5 from '../assets/images/keysystemc5.png';


const GrowthMethod = () => {
    return (
        <>
            <Header />
            <MainBanner
                heading={<> Growth Method™ <br />
                    The Operating System for <br /> Intelligent Business Growth</>}
                subHeading="Growth Method™ is not a campaign. It’s not a CRM. It’s not a funnel. It is a full-stack growth engine — engineered to attract, nurture, convert, and fulfill using autonomous AI infrastructure."
                buttonText=" Deploy Growth Method"
                backgroundImage={mainbg}
            />
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
                image1={photo}
                image2={image}
            />
            <Features
                title="Key System Features"
                features={[
                    {
                        title: "AI-Powered Lead Generation",
                        description: "No ads, no platforms",
                        image: img1,
                    },
                    {
                        title: "Multi-Channel Outreach",
                        description: "Email, SMS, LinkedIn, AI voice",
                        image: img2
                    },
                    {
                        title: "Autonomous Nurturing",
                        description: "Adaptive sequences based on behavior",
                        image: img3,
                    },
                    {
                        title: "Operational Fulfillment",
                        description: "Automated scheduling, service logic",
                        image: img4,
                    },
                    {
                        title: "Human-AI Hybrid Logic",
                        description: "Inserted where strategic value requires it",
                        image: img5,
                    },
                ]}
            />

            <GrowthMethodPhases />
            <GrowthSystemsGrid />
            <WhoItsFor
                title="Who It’s For"
                description="The E-Gnite Growth Method is designed for businesses that want to leverage AI to streamline their operations, enhance customer engagement, and drive growth."
                audience={[
                    "Small to Medium Enterprises",
                    "E-commerce Businesses",
                    "Service Providers",
                    "Startups",
                    "Established Corporations"
                ]} />
            < OutcomesOfDeployment />
            <GrowthMethodBanner
            />
            {/* <ProfessionalFooter /> */}


        </>
    )
}
export default GrowthMethod;