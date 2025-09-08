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
  const mainHeading=' Integration with Mirror AI™'
  const mainDescription=' Mirror AI™ is your internal GPT embodiment. Intelligence Systems™ is the logic interface it uses to:'
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
        title="What Intelligence Systems™ Does?"
        description={
          <>
            Think of it as the AI Operating Brain for your entire infrastructure — measuring, learning, and modifying across the full lifecycle.This division functions as the real-time AI command core that manages:
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
        title="Real-Time System Coordination"
        description="It replaces human intuition with structured, AI-driven system governance."
        features={[
          {
            icon: Award,
            text: "Reorders fulfillment workflows to eliminate lag",
          },
          {
            icon: Award,
            text: "Merges insights from Mirror AI™, CRM, & 3rd party tools",
          },
          {
            icon: Award,
            text: "Re-prioritizes campaigns when conditions shif",
          },
          {
            icon: Award,
            text: "Suspends irrelevant offers",
          },
        ]}
      />
      <CustomAIStaff aiStaffData={aiStaffData} main={mainHeading} description={mainDescription} />
      <AIAutomationComponent />
      <OutcomesOfDeployment 
  title="Outcomes of Deployment"
  outcomes={[
    "Business logic improves itself automatically",
    "All systems communicate, prioritize, adjust in real time", 
    "Errors and slowdowns are flagged before performance drops",
    "Campaigns evolve dynamically based on data — not guesswork",
    "Mirror AI gains deeper strategic advisory capabilities"
  ]}
/>
<FuturisticHero />
<ProfessionalFooter />
    </>
  );
};

export default IntelligenceSystem;
