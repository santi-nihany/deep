import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import WhySection from "../components/sections/WhySection";
import HowSection from "../components/sections/HowSection";
import WhatSection from "../components/sections/WhatSection";
import About from "../components/sections/About";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <WhySection />
      <HowSection topDivider />
      <WhatSection
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <About />
    </>
  );
};

export default Home;
