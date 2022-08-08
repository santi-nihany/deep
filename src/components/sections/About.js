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
          <div className="profile tiles-item reveal-from-left">
            <Image
              src={require("./../../assets/images/profiles/santi.png")}
              alt="Santiago Nihany"
              style={{
                borderRadius: "50%",
                overflow: "hidden",
              }}
            />
            <p>Marketing</p>
          </div>
          <div className="profile tiles-item reveal-from-bottom">
            <Image
              src={require("./../../assets/images/profiles/santi.png")}
              alt="Santiago Nihany"
              style={{
                borderRadius: "50%",
                overflow: "hidden",
              }}
            />
            <p>UX/UI Designer</p>
          </div>
          <div className="profile tiles-item reveal-from-right">
            <Image
              src={require("./../../assets/images/profiles/santi.png")}
              alt="Santiago Nihany"
              style={{
                borderRadius: "50%",
                overflow: "hidden",
              }}
            />
            <p>Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
