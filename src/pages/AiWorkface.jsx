import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import mainbg from "../assets/images/Aiworkforce Herobg.png";
import AIPyramid from "../components/Mirror Ai";
import InfoSection from "../components/InfoSection";
import photo from "../assets/images/mirror.png";
import customImage from "../assets/images/customai.png";
import image from "../assets/images/smallmirror.png";
import CustomAIStaff from "../components/Custom Ai";
import AIRolesDesign from "../components/standard Ai";
import ProfessionalFooter from "../components/HomeFooter";
import OutcomesOfDeployment from "../components/Deployment";
import WorkforceHero from "../components/Build Your";
import { Brain, Calendar, Users, FileText, MessageCircle, BookOpen, Smile, Upload, Award, Shield, UserCheck, Package, Truck } from 'lucide-react';
import standard from '../assets/images/aileft.png';
import ContactForm from "../components/GetinTouch";
import Begin from "../components/begin";

function AiWorkface() {
  const mainHeading = ' Custom AI Staff'
  const mainDescription = 'These are custom-trained agents, crafted to execute key roles inside your business.'
  const aiStaffData = [
    {
      icon: Award,
      title: "Sales AI",
      description: "Answers objections, guides qualification, follows logic trees",
    },
    {
      icon: Shield,
      title: "Support AI",
      description: "Responds to tickets, FAQs, resolution logic",
    },
    {
      icon: UserCheck,
      title: "Onboarding AI",
      description: "Guides clients through multi-step processes",
    },
    {
      icon: Package,
      title: "Fulfillment AI",
      description: "Coordinates delivery, updates, progress reports",
    },
    {
      icon: Truck,
      title: "Logistics AI",
      description: "Handles shipping and real-time tracking",
    },
  ];

  return (
    <>
      <Header />
      <MainBanner
        heading={
          <>
            AI Workforce™ <br />
            Labor Without Burnout. <br /> Fulfillment Without Limits.          </>
        }
        subHeading="AI Workforce™ is your operational division of intelligent agents — trained to fulfill tasks, communicate with clients, manage backend workflows, and scale your capacity without hiring or fatigue. This is not virtual assistance. This is intelligent labor architecture. "
        buttonText="Start Building Your Workforce"
        backgroundImage={mainbg}
      />
      <AIPyramid />
      <InfoSection
        title={<>Mirror AI™ <br /> Brand Executive Intelligence</>}
        description={
          <>
            Mirror AI™ is the apex of the Workforce — a fully <br /> custom GPT designed to act as your brand's internal <br /> voice, logic, and operational compass.
          </>
        }
        subDescription={
          <>
            Each deployment becomes its own infrastructure — <br /> tailored to
            how your business acquires, communicates, <br /> and delivers.
          </>
        }
        buttonText="Book Your Consultation"
        buttonLink="#contact-section"
        image1={photo} // bada wala upar
        image2={image} // chhota wala neeche overlap me
      />

      <CustomAIStaff aiStaffData={aiStaffData} main={mainHeading} description={mainDescription} image={customImage} />

      <AIRolesDesign
        title="Standard AI Roles "
        props={standard}
        subtitle="Immediate Functionality"
        description="These pre-configured agents are available out of the box and deploy within any E-Gnite system."
        features={[
          {
            icon: Award,
            text: "Scheduling, intake logic, repetitive task automation",
          },
          {
            icon: Award,
            text: "Writes, formats, and personalizes content blocks",
          },
          {
            icon: Award,
            text: "General-purpose inquiry response and routing",
          },
          {
            icon: Award,
            text: "Manages booking conflicts, follow-up logic",
          },
        ]}
      />{" "}
      <ContactForm />

      <OutcomesOfDeployment
        title="Outcomes of Deployment"
        outcomes={[
          "Operations scale without headcount",
          "Clients receive fast, clear, and aligned responses",
          "No sick days, no training delays, no role drift",
          "Fulfillment becomes automated, but personalized",
          "Internal consistency increases across every department"
        ]}
      />
      {/* <WorkforceHero /> */}
      <Begin
        title="BUILD YOUR WORKFORCE"
        description="Every System Needs Operators. These Ones Don't Sleep.
"
        buttonText="Request Ai Workforce Consultation"
      />
      {/* <ProfessionalFooter /> */}
    </>
  );
}
export default AiWorkface;
