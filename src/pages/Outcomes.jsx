import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import mainbg from "../assets/images/a08e9b4485628a3877efe2700adc74c98cf02ffe.png";
import BusinessTransformation from './../components/Before';
import ROITimeline from "../components/Time line";
import Needsystem from "../components/Need system";
import KeyOutcomeThemes from "../components/Outcome";
import SixDivisionsComponent from "../components/SixDevisions";
import StrategicUseCases from "../components/Strategic";
import ProfessionalFooter from "../components/HomeFooter";


function Outcomes() {
     const themesData = [
    {
        title: "Lead Flow",
        description: "Predictable, automated prospecting across channels"
    },
    {
        title: "Client Conversion",
        description: "Smart follow-up sequences improve conversion rates"
    },
    {
        title: "Operational Bandwidth",
        description: "AI Workforce handles daily tasks, messages, onboarding"
    },
    {
        title: "Strategic Decisions",
        description: "Mirror AI & PointIntellect provide real-time advisory intelligence"
    },
    {
        title: "Fulfillment",
        description: "Deliverables, scheduling, and client experience become streamlined"
    },
    {
        title: "Growth Velocity",
        description: "From inconsistent activity to always-on business motion"
    }
];

    return (
        <>
            <Header />
            <MainBanner
                heading={<>We Don’t Sell Software. <br /> We Build Systems That <br /> Produce Outcomes.</>}
                subHeading="E-Gnite is a business transformation infrastructure — where leads increase, fulfillment accelerates, bandwidth expands, and operations become self-governing. We measure our value in outcomes, not outputs."
                buttonText="Request Private Session"
                backgroundImage={mainbg}
            />
            <KeyOutcomeThemes title=" Key Outcome Themes" themes={themesData} />
            {/* <SixDivisionsComponent /> */}
            <StrategicUseCases />


            <BusinessTransformation />
            <ROITimeline />
            <Needsystem />
            {/* <ProfessionalFooter /> */}
        </>
    )
}
export default Outcomes;