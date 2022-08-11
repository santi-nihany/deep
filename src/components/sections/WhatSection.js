import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import { useMediaQuery } from "react-responsive";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const WhatSection = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "What ?",
    paragraph: "Ideas to reality",
  };

  const isMobile = useMediaQuery({
    query: "(max-width: 900px)",
  });

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            id="what"
            className="center-content reveal-from-bottom"
          />
          <div className={splitClasses}>
            <div className="split-item ">
              <div
                className="split-item-content center-content-mobile reveal-from-left "
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Certify your reading journey
                </div>
                <h3 className="mt-0 mb-12">Chapitas</h3>
                <p className="m-0 p-what">
                  We want you to register your learnings in a secure, trustful
                  and transparent way. That’s why we bring{" "}
                  <span className="text-color-primary">chapitas</span>. Your
                  essays, projects, code or any document will serve you as a
                  portfolio for your future. Knowledge comes from learning,
                  wisdom comes from applying.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
                data-reveal-delay="250"
              >
                <Image
                  id="brain"
                  src={require("./../../assets/images/what/brain_2.png")}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item has-top-divider">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
                data-reveal-delay="250"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Connect, share and enjoy
                </div>
                <h3 className="mt-0 mb-12">Shape your community</h3>
                <p className="m-0 p-what">
                  Has it ever happened you were reading something that was
                  mind-blowing and you didn't have the chance to share it? We
                  could change that. It’s time for a platform where readers can
                  connect with each other, learn and grow together. You can form
                  your own community and create contests, raffles and give
                  special <span className="text-color-primary">chapitas</span>{" "}
                  for the winners. These chapitas can be interchangeable for the
                  books you where hoping to read and didn’t have the chance to
                  buy.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
                data-reveal-delay="250"
              >
                <Image
                  src={require("./../../assets/images/what/dao_2.png")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item has-top-divider">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Give and recieve
                </div>
                <h3 className="mt-0 mb-12">Your favourite authors</h3>
                <p className="m-0 p-what">
                  The decentralized editorial will function as a structure of
                  voting and funding for the authors that you like. This
                  structure is separated by genres, denominated spaces. Any
                  author can present their book on a space and let the readers
                  vote based on the content. When the book is published, the
                  funders will get some exclusive benefits such as: a chapita of
                  funder, a free first digital edition of the book and contact
                  with the author. Think it like these: you pay the price of a
                  book and get one in return, supporting the author.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/what/dao.png")}
                  alt="Features split 03"
                  width={528}
                  height="80%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

WhatSection.propTypes = propTypes;
WhatSection.defaultProps = defaultProps;

export default WhatSection;
