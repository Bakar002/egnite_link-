import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import mainbg from "../assets/images/mainbg.png";
import BusinessTransformation from './../components/Before';
import ROITimeline from "../components/Time line";
import Needsystem from "../components/Need system";


function Outcomes(){
    return (
        <>
        <Header />
      <MainBanner
        heading={<>We Don’t Automate Businesses <br /> We Engineer Self-Sufficient <br /> Growth Architectures</>}
        subHeading="ProIntellect Systems™ equips your business with certified-grade AI professionals — designed to support legal, financial, operational, medical, and executive decisions with structure, speed, and stability."
        buttonText="Request ProIntellect Consultation"
        backgroundImage={mainbg}
    />
        <BusinessTransformation />
        <ROITimeline />
        <Needsystem />
        </>
    )
}
export default Outcomes;