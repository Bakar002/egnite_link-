import React from 'react'
import Header from '../components/Header'
import MainBanner from '../components/MainBanner';
import mainbg from "../assets/images/mainbg.png";

const GrowthMethod = () => {
  return (
    <>
      <Header />
      <MainBanner
        heading="Intelligence You Can Deploy. Expertise That Doesn’t Expire"
        subHeading="ProIntellect Systems™ equips your business with certified-grade AI professionals — designed to support legal, financial, operational, medical, and executive decisions with structure, speed, and stability."
        buttonText="Request ProIntellect Consultation"
        backgroundImage={mainbg}
      />
    </>
  )
}

export default GrowthMethod;