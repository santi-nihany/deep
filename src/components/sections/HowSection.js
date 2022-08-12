import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const HowSection = ({
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
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "How ?",
    paragraph:
      "Blockchain help us solve many problems such as trust, transparency, security and reliability of data processing.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content"
            id="how"
          />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="center-content">Decentralized governance</div>
                <div className="testimonial-item-footer text-xs mt-8 mb-0 has-top-divider"></div>
                <p className="text-sm mb-0">
                  — We want our platform to function as a expression of what the
                  community of readers needs. That mission will succeed thanks
                  to blockchain. Creating a DAO, the readers will choose what is
                  best for the platform.
                </p>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="center-content">Decentralized storage</div>
                <div className="testimonial-item-footer text-xs mt-8 mb-0 has-top-divider"></div>
                <p className="text-sm mb-0">
                  — For our data to be secured and not controlled by any
                  institution, we believe in decentralization. With Deep, you
                  will have the opportunity to register your reading journey
                  throughout your life. Every document you upload to the
                  platform is going to be stored in a decentralized way.
                </p>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="center-content">Decentralized funding</div>
                <div className="testimonial-item-footer text-xs mt-8 mb-0 has-top-divider"></div>
                <p className="text-sm mb-0">
                  — As a DAO, we will give readers the opportunity to vote for
                  their favourite authors in a decentralized environment. We
                  don’t care about your nationality, name or genre.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HowSection.propTypes = propTypes;
HowSection.defaultProps = defaultProps;

export default HowSection;
