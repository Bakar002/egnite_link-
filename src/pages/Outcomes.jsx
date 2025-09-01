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


function Outcomes(){
    
    return (
        <>
        <Header />
      <MainBanner
        heading={<>We Don’t Sell Software. <br /> We Build Systems That <br /> Produce Outcomes. <br /> Growth Architectures</>}
        subHeading="E-Gnite is a business transformation infrastructure — where leads increase, fulfillment accelerates, bandwidth expands, and operations become self-governing. We measure our value in outcomes, not outputs."
        buttonText="Request Private Session"
        backgroundImage={mainbg}
    />
     <SixDivisionsComponent />
           <StrategicUseCases />

    
        <BusinessTransformation />
        <ROITimeline />
        <Needsystem />
        <ProfessionalFooter />
        </>
    )
}
export default Outcomes;