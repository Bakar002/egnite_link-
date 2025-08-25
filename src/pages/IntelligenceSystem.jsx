import React from "react";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import mainbg from "../assets/images/robot-6753999.png";
import photo from "../assets/images/life-5130779_1920.png";
import InfoSection from "../components/InfoSection";
import CoreIntelligenceModules from "../components/Coreintelligence";
import { Bot, Calendar, FileText, MessageCircle, BookOpen } from "lucide-react";
import AIRolesDesign from "../components/standard Ai";
import AIAutomationComponent from "../components/AIAutomation";
import CustomAIStaff from "../components/Custom Ai";
import {Award, Shield, UserCheck, Package, Truck } from 'lucide-react';
import OutcomesOfDeployment from "../components/Deployment";
import ProfessionalFooter from "../components/HomeFooter";
import FuturisticHero from "../components/Systems";


const IntelligenceSystem = () => {
  const aiStaffData = [
    {
      icon: Award,
      title: "See across your  deployments",
      description:
        "",
    },
    {
      icon: Shield,
      title: "Generate insights and instructions",
      description: "",
    },
    {
      icon: UserCheck,
      title: "Trigger automated improvements or alert",
      description: "",
    },
    {
      icon: Package,
      title: "Propose scenario corrections based on learned outcomes",
      description: "",
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
            Your Systems Are Smart. <br /> This Is What Makes <br /> Them Smarter
          </>
        }
        subHeading="Intelligence Systems™ is the meta-layer that analyzes, optimizes, and orchestrates every E-Gnite deployment — detecting friction, amplifying winning paths, and aligning performance with live market behavior. It’s not analytics. It’s evolution logic."
        buttonText="Start Building Your Workforce"
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
        image1={photo}
      />
      <CoreIntelligenceModules />
      <AIRolesDesign
        title="Custom AI Roles"
        subtitle="Advanced Features"
        description="Customized agents for your specific needs."
        features={[
          {
            icon: Calendar,
            text: "Custom scheduling logic",
          },
          {
            icon: FileText,
            text: "Advanced content generation",
          },
          {
            icon: MessageCircle,
            text: "General-purpose inquiry response and routing",
          },
          {
            icon: BookOpen,
            text: "Manages booking conflicts, follow-up logic",
          },
        ]}
      />
      <CustomAIStaff aiStaffData={aiStaffData} />
      <AIAutomationComponent />
      <OutcomesOfDeployment 
  title="Outcomes of Deployment"
  outcomes={[
    "Your custom outcome 1",
    "Your custom outcome 2", 
    "Your custom outcome 3",
    "Your custom outcome 4",
    "Your custom outcome 5"
  ]}
/>
<FuturisticHero />
<ProfessionalFooter />
    </>
  );
};

export default IntelligenceSystem;
