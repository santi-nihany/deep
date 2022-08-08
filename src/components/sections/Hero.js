import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import { fadeInLeft, fadeInRight } from "react-animations";
import Radium, { StyleRoot } from "radium";
import "@fontsource/montserrat";

const styles = {
  fadeInLeft: {
    animation: "x 3s",
    animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
  },
  fadeInRight: {
    animation: "x 3s",
    animationName: Radium.keyframes(fadeInRight, "fadeInRight"),
  },
};

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const [show, setShow] = useState(false);

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 title reveal-from-bottom"
              data-reveal-delay="200"
            >
              Deep{" "}
              <span className="text-color-primary f-normal ">Ecosystem</span>
            </h1>
            {show ? (
              <StyleRoot>
                <div className="split-wrap">
                  <div className="split-item">
                    <div
                      style={styles.fadeInLeft}
                      class="split-item-content center-content-mobile"
                    >
                      <h3 class="mt-0 mb-16">
                        <span className="text-color-secondary ">Platform</span>
                      </h3>
                      <p class="m-0">
                        Deep is a new way of mastering your books. How many
                        times did you read something which was incredibly useful
                        but totally forgot it? Usually this happens because we
                        do not use that knowledge for something concrete. We are
                        here to change that.
                      </p>
                    </div>

                    <div
                      style={styles.fadeInRight}
                      class="split-item-content center-content-mobile"
                    >
                      <h3 class="mt-0 mb-16">
                        <span className="text-color-tertiary ">
                          Decentralized Editorial
                        </span>
                      </h3>
                      <p class="m-0">Paragraph</p>
                    </div>
                  </div>
                </div>
              </StyleRoot>
            ) : (
              <div className="container-xs mt-4">
                <p
                  className="m-0 mb-32 reveal-from-bottom"
                  data-reveal-delay="400"
                >
                  Our mission is to decentralize the access to books while
                  democratizing the habit of reading
                </p>
                <div className=" reveal-from-bottom" data-reveal-delay="600">
                  <ButtonGroup>
                    <Button
                      onClick={async () => {
                        setShow(true);
                      }}
                      tag="a"
                      color="dark"
                      wideMobile
                    >
                      Learn More
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            )}
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require("./../../assets/images/video-placeholder.jpg")}
                alt="Hero"
                width={896}
                height={504}
              />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe"
          />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
