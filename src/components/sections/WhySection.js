import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const WhySection = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "Why ?",
    paragraph: "Our purpouse, cause and beliefs",
  };

  return (
    <section {...props} className={outerClasses} id="why">
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            id="header-why"
            data={sectionHeader}
            className="center-content"
          />
          <h3 className=" center-content text-color-secondary reveal-from-bottom ">
            <div className="h-why">Platform</div>
          </h3>
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <Image
                    src={require("./../../assets/images/why/platform/community.png")}
                    alt="Features tile icon 01"
                    width="60%"
                  />
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Community</h4>
                  <p className="m-0 text-sm">
                    We believe that a community is built by the hopes and vision
                    of its members. Let your passions, imagination and knowledge
                    inspire others to keep creating. Let yourself be inspired by
                    them. Knowledge has no value if it stays still.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="icon-why">
                    <Image
                      src={require("./../../assets/images/why/platform/certificate.png")}
                      alt="Features tile icon 02"
                      width="40%"
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Certification</h4>
                  <p className="m-0 text-sm">
                    Many concepts, ideas, visions remain in nothingness after
                    reading. People don’t ever certify their learnings while
                    reading a book. We want that to be easy and meaningful for
                    every reader.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="icon-why">
                    <Image
                      src={require("./../../assets/images/why/platform/inclusion.png")}
                      alt="Features tile icon 04"
                      width="40%"
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Inclusion</h4>
                  <p className="m-0 text-sm">
                    In Argentina 99% of the population is literate. But, the
                    average number of books per person is 1.6. Our mission is to
                    democratize reading, for building a conscious society which
                    is empowered to make decisions and take action. We believe
                    that reading has the power to change realities, and everyone
                    should be included.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h3 className="  center-content text-color-tertiary bold h-why reveal-from-bottom">
            Editorial
          </h3>
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-04.svg")}
                      alt="Features tile icon 04"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Breaking Centralization</h4>
                  <p className="m-0 text-sm">
                    Nowadays, there exists 3 ways of publishing a book: throught
                    a traditional editorial, co-editing or autopublishing by
                    yourself. We know that the process of coming out with a book
                    is hard. Not only is the fact of design it, correcting it,
                    laying it out, printing it, promoting it and selling it, but
                    also the high cost all of this takes.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-05.svg")}
                      alt="Features tile icon 05"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Authors</h4>
                  <p className="m-0 text-sm">
                    Of all the proposes that enter to an editorial, less than
                    the 10% are published. This is because of the comercial
                    vision of those organizations and the fact that they can’t
                    edit every book that is presented. That is why so many
                    authors are left behind.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-06.svg")}
                      alt="Features tile icon 06"
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Readers</h4>
                  <p className="m-0 text-sm">
                    Nobody ask readers what they want to read or give them the
                    chance to have a vote on the edition of the books of their
                    favourite authors. Reader community has a lot to offer while
                    proactively participating in the process of publication of a
                    book. We want that special value to be part of the decision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

WhySection.propTypes = propTypes;
WhySection.defaultProps = defaultProps;

export default WhySection;
