import * as React from "react";

const SvgArrowUp = (props) => (
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
      id="arrow_up"
      x={0.093}
      y={0.093}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M12.282,14.43c-0.046,-1.127 0.834,-2.002 1.946,-1.956l3.205,0.131c5.613,0.231 14.116,2.553 18.979,5.181l1.085,0.586c1.461,0.79 1.413,2.063 -0.108,2.844l-0.306,0.157c-1.521,0.781 -2.51,2.75 -2.21,4.394l-0.072,-0.391c0.101,0.552 0.414,1.376 0.705,1.851l8.747,14.251c2.605,4.242 1.28,5.573 -2.966,2.967l-14.251,-8.748c-0.471,-0.288 -1.302,-0.575 -1.849,-0.64l0.229,0.027c-1.672,-0.197 -3.644,0.888 -4.4,2.414c-0.791,1.596 -2.044,1.652 -2.836,0.182l-0.596,-1.105c-2.629,-4.875 -4.944,-13.372 -5.173,-18.985l-0.129,-3.16Z"
      fill={props.color}
    />
  </svg>
);

export default SvgArrowUp;
