import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import mainbg from "../assets/images/1hero.png";
import AIPyramid from "../components/Mirror Ai";
import InfoSection from "../components/InfoSection";
import photo from "../assets/images/2150834131 1.png";
import image from "../assets/images/2M.png";
import CustomAIStaff from "../components/Custom Ai";
import AIRolesDesign from "../components/standard Ai";
import Footer from "../components/Footer";
import OutcomesOfDeployment from "../components/Deployment";
import WorkforceHero from "../components/Build Your";
import { Brain, Calendar, Users, FileText, MessageCircle, BookOpen, Smile, Upload, Award, Shield, UserCheck, Package, Truck } from 'lucide-react';

function AiWorkface() {
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
            Labor Without Burnout. <br /> Fulfillment Without <br /> Limits.
          </>
        }
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
        image2={image} // chhota wala neeche overlap me
      />

      <CustomAIStaff aiStaffData={aiStaffData} />

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
      />{" "}
<OutcomesOfDeployment 
  title="Outcomes of Deployment"
  outcomes={[
    "Your custom outcome 1",
    "Your custom outcome 2", 
    "Your custom outcome 3",
    "Your custom outcome 4",
    "Your custom outcome 5"
  ]}
/>      <WorkforceHero />
      <Footer />
    </>
  );
}
export default AiWorkface;
