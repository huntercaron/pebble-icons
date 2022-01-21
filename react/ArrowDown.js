import * as React from "react";

const SvgArrowDown = (props) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 58 58"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    xmlns:serif="http://www.serif.com/"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={2}
    {...props}
  >
    <rect
      id="arrow_down"
      x={0.101}
      y={0.194}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M30.363,51.499c-0.764,0.828 -2.005,0.825 -2.759,0.007l-2.173,-2.36c-3.806,-4.131 -8.176,-11.786 -9.757,-17.083l-0.353,-1.182c-0.475,-1.592 0.46,-2.457 2.088,-1.934l0.327,0.105c1.628,0.523 3.72,-0.17 4.67,-1.544l-0.226,0.327c0.319,-0.461 0.68,-1.265 0.81,-1.807l3.892,-16.262c1.159,-4.842 3.036,-4.846 4.196,-0l3.892,16.262c0.128,0.536 0.513,1.327 0.854,1.76l-0.143,-0.181c1.043,1.321 3.204,1.949 4.818,1.404c1.688,-0.569 2.614,0.277 2.135,1.877l-0.36,1.203c-1.589,5.305 -5.96,12.951 -9.767,17.082l-2.144,2.326Z"
      fill={props.color}
    />
  </svg>
);

export default SvgArrowDown;
