import React from "react";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import mainbg from "../assets/images/mainbg.png";
import AionFacesComponent from "../components/Aionfaces";
import AionModelLibrary from "../components/Aionlibrary";
import CustomAiONCreation from "../components/AionCreations";
import DeploymentUseCases from "../components/UseCases";
import OwnershipLicensing from "../components/Ownership";
import OutcomesOfDeployment from "../components/Deployment";
import InfluenceAtScale from "../components/Influence";
import ProfessionalFooter from "../components/HomeFooter";
import { Brain, Zap, Shield, Eye } from "lucide-react";

const Aionfaces = () => {
  const customFeatures = [
    {
      icon: Brain,
      title: "Task specific voice and information",
      description:
        "Personalized AI assistant tailored to your specific needs and preferences",
    },
    {
      icon: Zap,
      title: "Trained on your data for peak performance",
      description:
        "Enhanced accuracy through custom training on your unique dataset",
    },
    {
      icon: Shield,
      title: "Implemented with advanced security features",
      description:
        "Enterprise-grade security protocols to protect your sensitive information",
    },
    {
      icon: Eye,
      title: "Detailed usage tracking with analytics",
      description:
        "Comprehensive insights into AI performance and user interactions",
    },
  ];
  const cardsData = [
    {
      id: 1,
      title: "AOAI Access™",
      description:
        "Secure access management with enterprise-grade authentication and authorization protocols for seamless integration.",
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
      title: "AOAI License™",
      description:
        "Comprehensive licensing framework ensuring compliance and proper usage rights across all deployment scenarios.",
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
      title: "AOAI Secure™",
      description:
        "Advanced security protocols with end-to-end encryption and multi-layer protection for sensitive data handling.",
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
        heading="Intelligence You Can Deploy. Expertise That Doesn’t Expire"
        subHeading="ProIntellect Systems™ equips your business with certified-grade AI professionals — designed to support legal, financial, operational, medical, and executive decisions with structure, speed, and stability."
        buttonText="Request ProIntellect Consultation"
        backgroundImage={mainbg}
      />
      <AionFacesComponent />
      <AionModelLibrary />
      <CustomAiONCreation
        title="Custom AiON Creation"
        subtitle="Effortlessly build intelligent AI assistants customized to your specific needs by integrating with your preferred tools"
        features={customFeatures}
      />
      <DeploymentUseCases />
      <OwnershipLicensing
        title="Custom Ownership & Licensing"
        cards={cardsData}
      />
      <OutcomesOfDeployment
        title="Outcomes of Deployment"
        outcomes={[
          "Your custom outcome 1",
          "Your custom outcome 2",
          "Your custom outcome 3",
          "Your custom outcome 4",
          "Your custom outcome 5",
        ]}
      />{" "}
      <InfluenceAtScale />
      <ProfessionalFooter />
    </>
  );
};

export default Aionfaces;
