import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import mainbg2 from "../assets/images/system-engeenring bg hero.png";
import DivisionRoleDesign from "../components/Role Divisions";
import CustomSoftwareDevelopment from "../components/Software Devolpment";
import CustomAiONCreation from "../components/AionCreations";
import bg from "../assets/images/system.png";
import {
  Brain,
  Zap,
  Shield,
  Eye,
  Calendar,
  FileText,
  MessageCircle,
  BookOpen,
  Award,
} from "lucide-react";
import AIRolesDesign from "../components/standard Ai";
import StrategicUseCases from "../components/Strategic";
import OwnershipLicensing from "../components/Ownership";
import ProfessionalFooter from "../components/HomeFooter";
import SpaceHeroSection from "../components/Another App";
import Begin from "../components/begin";
// cards images
import c1 from '../assets/images/stc1.png';
import c2 from '../assets/images/stc2.png';
import c3 from '../assets/images/stc3.png';
import c4 from '../assets/images/stc2.png';
import c5 from '../assets/images/stc5.png';
import c6 from '../assets/images/stc6.png';


const useCasesData = [
  { title: "Agencies", description: "Automated client portals, scoped delivery engines, proposal engines", image: c1 },
  { title: "Clinics", description: "Intake systems, scheduling bots, compliance flagging platforms", image: c2 },
  { title: "Tech/SaaS", description: "AI-enhanced onboarding flows, support ticket automation, behavioral scoring dashboards", image: c3 },
  { title: "Real Estate", description: "Property response systems, showing logic, lead-routing engines", image: c4 },
  { title: "Education ", description: "Learner progress engines, test intelligence, modular content systems", image: c5 },
  { title: "Retail/E-Com", description: "Custom checkout logic, retargeting engines, logistics automation", image: c6 },
];
export default function SystemsEngeenring() {
  const customFeatures = [
    {
      icon: Brain,
      title: "Multi-conditional automations with feedback intelligence",
    },
    {
      icon: Zap,
      title: "Sequences that pause, adapt, escalate, or reassign tasks",
    },
    {
      icon: Shield,
      title: "AI-triggered workflows with human-in-the-loop checkpoints",
    },
    {
      icon: Eye,
      title: "Cross-channel orchestration (email, SMS, platform, support)",
    },
  ];
  const cardsData = [
    {
      id: 1,
      title: "Fully Owned",
      description: " Complete software + system code rights transferred",
      iconColor: "bg-teal-500",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      ),
    },
    {
      id: 2,
      title: "E-Gnite Licensed",
      description: "Hosted by E-Gnite, licensed under annual structure",
      iconColor: "bg-blue-500",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      ),
    },
    {
      id: 3,
      title: "Hybrid",
      description: "Core logic licensed, custom UI/UX owned",
      iconColor: "bg-purple-500",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
    },
  ];

  return (
    <>
      <Header />
      <MainBanner
        heading={
          <>
            Systems Engineering™ <br />
            Where Business Logic Becomes <br />Intelligent Systems.          </>
        }
        subHeading="Systems Engineering™ is E-Gnite’s software and automation division — where business logic becomes architecture, and AI becomes execution. We design proprietary systems that don’t just function — they learn, adapt, and operate."
        buttonText="Request Engineering Consultation"
        backgroundImage={mainbg2}
      />
      <DivisionRoleDesign />
      <CustomSoftwareDevelopment />
      <CustomAiONCreation
        title="AI Automation Engineering"
        subtitle="This goes beyond task automation. We build adaptive, autonomous sequences that thinks"
        features={customFeatures}
      />
      <AIRolesDesign
        title="System Logic Design"
        props={bg}

        description="It’s not “code.” It’s the structural thinking of your business — running in real time."
        features={[
          {
            icon: Award,
            text: "Automates what should be",
          },
          {
            icon: Award,
            text: "Escalates what matters",
          },
          {
            icon: Award,
            text: "Repeats with precision",
          },
          {
            icon: Award,
            text: "Learns from behavior",
          },
        ]}
      />
       <StrategicUseCases useCases={useCasesData} title={'Strategic Use Cases'} />
      <OwnershipLicensing
        title="Custom Ownership & Licensing"
        cards={cardsData}
      />
      {/* <SpaceHeroSection /> */}
      <Begin
        title="You Don’t Need Another App. You Need a System."
        description="Let us architect the platform your business was meant to run on — and automate what others still chase manually."
        buttonText="Request Systems Engineering Audit"
      />  
      {/* <ProfessionalFooter /> */}
    </>
  );
}
