import React from "react";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const About = ({ ...props }) => {
  const sectionHeader = {
    title: "Our team",
  };
  return (
    <section {...props} id="team">
      <div className="container section-inner has-top-divider">
        <SectionHeader data={sectionHeader} className="center-content" />
        <div id="profiles" className=" tiles-wrap">
          <div className="profile tiles-item  reveal-from-left">
            <a href="https://www.linkedin.com/in/luana-giusto/">
              <Image
                src={require("./../../assets/images/profiles/team_3.png")}
                alt="Marketing"
                style={{
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              />
            </a>
            <p>Marketing</p>
          </div>
          <div className="profile tiles-item reveal-from-right ">
            <a href="https://www.linkedin.com/in/luzalbaposse/">
              <Image
                src={require("./../../assets/images/profiles/team_1.png")}
                alt="UX/UI Designer"
                style={{
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              />
            </a>
            <p>UX/UI Designer</p>
          </div>
        </div>
        <div className=" tiles-wrap">
          <div className="profile tiles-item reveal-from-left ">
            <a href="https://www.linkedin.com/in/santiagonihany/">
              <Image
                src={require("./../../assets/images/profiles/team_2.png")}
                alt="Developer"
                style={{
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              />
            </a>
            <p>Developer</p>
          </div>
          <div className="profile tiles-item reveal-from-right ">
            <a href="https://www.linkedin.com/in/valentina-vitetta/">
              <Image
                src={require("./../../assets/images/profiles/team_4.png")}
                alt="Developer"
                style={{
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              />
            </a>
            <p>Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
