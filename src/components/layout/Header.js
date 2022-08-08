import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Logo from "./partials/Logo";
import { useMediaQuery } from "react-responsive";

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
};

const defaultProps = {
  navPosition: "",
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
};

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener("keydown", keyPress);
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("keydown", keyPress);
      document.removeEventListener("click", clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add("off-nav-is-active");
    //nav.current.style.maxHeight = nav.current.scrollHeight + "px";
    setIsactive(true);
  };

  const closeMenu = () => {
    document.body.classList.remove("off-nav-is-active");
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  };

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  };

  const clickOutside = (e) => {
    if (!nav.current) return;
    if (
      !isActive ||
      nav.current.contains(e.target) ||
      e.target === hamburger.current
    )
      return;
    closeMenu();
  };

  const classes = classNames(
    "site-header",
    bottomOuterDivider && "has-bottom-divider",
    className
  );
  const isMobile = useMediaQuery({
    query: "(max-width: 900px)",
  });

  return (
    <header {...props} className={classes}>
      {isMobile ? (
        <div className="mob-header">
          <nav className="navBar">
            <button
              ref={hamburger}
              id="hamburger-butt"
              className="header-nav-toggle "
              onClick={isActive ? closeMenu : openMenu}
            >
              <span className="screen-reader">Menu</span>
              <span className="hamburger">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            {isActive && (
              <ul id="hamb-list">
                <li>
                  <Link>Why</Link>
                </li>
                <li>
                  <Link>How</Link>
                </li>
                <li>
                  <Link>What</Link>
                </li>
                <li>
                  <Link>About</Link>
                </li>
              </ul>
            )}
          </nav>

          <Logo id="logo-mobile" />
        </div>
      ) : (
        <div className=" nav-bar">
          <div className={classNames("site-header-inner ")}>
            {!hideNav && (
              <>
                <Logo />
                <nav
                  ref={nav}
                  className={classNames("header-nav", isActive && "is-active")}
                >
                  <div className="header-nav-inner ">
                    <ul
                      className={classNames(
                        "list-reset text-xs",
                        navPosition && `header-nav-${navPosition}`
                      )}
                    >
                      <li>
                        <Link to="#why" onClick={closeMenu}>
                          Why
                        </Link>
                      </li>
                      <li>
                        <Link to="#how" onClick={closeMenu}>
                          How
                        </Link>
                      </li>
                      <li>
                        <Link to="#what" onClick={closeMenu}>
                          What
                        </Link>
                      </li>
                      <li>
                        <Link to="#0" onClick={closeMenu}>
                          About us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
