import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import WhySection from "../components/sections/WhySection";
import HowSection from "../components/sections/HowSection";
import WhatSection from "../components/sections/WhatSection";
import Cta from "../components/sections/Cta";
import About from "../components/sections/About";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <WhySection />
      <HowSection
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <WhatSection topDivider />
      <About />
      <Cta split />
    </>
  );
};

export default Home;
