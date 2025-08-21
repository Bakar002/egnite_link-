import React from 'react'
import Header from '../components/Header'
import MainBanner from '../components/MainBanner';
import mainbg from "../assets/images/mainbg.png";
import InfoSection from '../components/InfoSection'
import KeySystemFeatures from '../components/Features'
import GrowthMethodPhases from '../components/Growth';
import GrowthSystemsGrid from '../components/GrowthSystem';
import WhoItsFor from '../components/Whosection';
import  OutcomesOfDeployment from '../components/Deployment';
import GrowthMethodBanner from '../components/Private';
import Footer from '../components/Footer';
import photo from '../assets/images/photo.png'
import image from '../assets/images/2nd.png'
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
                description="The E-Gnite Growth Method is a proprietary AI-powered architecture that replaces addependency, sales team overload, and manual fulfillment with logic-based automation and intelligent systems."
                subDescription="Each deployment becomes its own infrastructure — tailored to how your business acquires, communicates, and delivers."
                buttonText="Book Your Consultation"
                buttonLink="#"
                image1={photo}   // bada wala upar
                image2={image}   // chhota wala neeche overlap me
            />
            <KeySystemFeatures
                title="Key System Features"
                description="The E-Gnite Growth Method is a proprietary AI-powered architecture that replaces addependency, sales team overload, and manual fulfillment with logic-based automation and intelligent systems."
                features={[
                    "AI-Powered Automation",
                    "Scalable Infrastructure",
                    "Data-Driven Insights",
                    "Customizable Solutions",
                    "24/7 Support"
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
                ]}/>
            < OutcomesOfDeployment/>
            <GrowthMethodBanner
                />
            <Footer />
           

           </>
    )}
    export default GrowthMethod;