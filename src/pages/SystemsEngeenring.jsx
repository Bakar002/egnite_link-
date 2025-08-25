import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import mainbg from "../assets/images/1hero.png";
import DivisionRoleDesign from "../components/Role Divisions";
import CustomSoftwareDevelopment from "../components/Software Devolpment";
export default function SystemsEngeenring() {
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
            <DivisionRoleDesign />
            <CustomSoftwareDevelopment />
        </>
    )
}  