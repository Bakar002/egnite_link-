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
import Footer from '../components/Footer';
import photo from '../assets/images/photo.png'
import image from '../assets/images/2nd.png'
import one from '../assets/images/IMG.png';
const GrowthMethod = () => {
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
            <Features
                title="Key System Features"
                features={[
                    {
                        title: "AI-Powered Lead Generation",
                        description: "No ads, no platforms",
                        image: "src/assets/images/IMG.png",
                    },
                    {
                        title: "Multi-Channel Outreach",
                        description: "Email, SMS, LinkedIn, AI voice",
                        image: "src/assets/images/image 92.png",
                    },
                    {
                        title: "Autonomous Nurturing",
                        description: "Adaptive sequences based on behavior",
                        image: "src/assets/images/IMG (1).png",
                    },
                    {
                        title: "Operational Fulfillment",
                        description: "Automated scheduling, service logic",
                        image: "src/assets/images/IMG (2).png",
                    },
                    {
                        title: "Human-AI Hybrid Logic",
                        description: "Inserted where strategic value requires it",
                        image: "src/assets/images/IMG (3).png",
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
            <Footer />


        </>
    )
}
export default GrowthMethod;