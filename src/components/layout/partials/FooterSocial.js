import React from "react";
import classNames from "classnames";

const FooterSocial = ({ className, ...props }) => {
  const classes = classNames("footer-social", className);

  return (
    <div {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <a href="https://www.linkedin.com/company/wearedeep/about/">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                <path
                  d="M595 5109 c-151 -22 -270 -84 -386 -199 -69 -68 -94 -102 -127 -170
           -84 -171 -77 29 -77 -2180 0 -2209 -7 -2009 77 -2180 59 -120 178 -239 298
           -298 171 -84 -29 -77 2180 -77 2209 0 2009 -7 2180 77 68 33 102 59 171 127
           68 69 94 103 127 171 84 171 77 -29 77 2180 0 2209 7 2009 -77 2180 -59 120
           -178 239 -298 298 -172 84 35 77 -2145 78 -1072 1 -1967 -2 -2000 -7z m948
           -969 c200 -62 335 -282 298 -485 -50 -275 -326 -435 -587 -342 -91 33 -190
           121 -235 208 -111 218 -24 485 193 595 95 48 222 57 331 24z m1964 -1011 c370
           -51 574 -294 629 -749 10 -86 13 -273 14 -738 l0 -624 -29 -29 -29 -29 -286 0
           -286 0 -32 29 -33 29 -5 614 c-5 591 -6 615 -26 675 -58 170 -154 243 -319
           243 -167 0 -281 -91 -343 -274 l-27 -81 -5 -588 -5 -589 -33 -29 -32 -29 -276
           0 -276 0 -29 29 -29 29 0 1011 0 1011 29 32 29 33 269 3 c254 2 270 1 301 -18
           43 -26 52 -54 52 -157 l0 -85 40 51 c149 188 422 274 737 230z m-1822 -35 c68
           -32 65 25 65 -1064 0 -851 -2 -985 -15 -1010 -31 -59 -35 -60 -322 -60 -182 0
           -270 4 -288 12 -57 26 -55 -19 -55 1063 0 685 3 1003 11 1016 5 11 25 29 42
           39 29 18 52 20 280 20 206 0 255 -3 282 -16z"
                />
              </g>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/deep_ecosystem">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Twitter</title>
              <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/deep.ecosystem/">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Instagram</title>
              <g>
                <circle cx="12.145" cy="3.892" r="1" />
                <path d="M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                <path d="M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z" />
              </g>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://github.com/santi-nihany/deep">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="28px"
              height="28px"
            >
              {" "}
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocial;
