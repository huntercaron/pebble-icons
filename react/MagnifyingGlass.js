import * as React from "react";

const SvgMagnifyingGlass = (props) => (
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
      id="magnifying_glass"
      x={0.2}
      y={0.001}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M24.049,2.834c11.576,-0 20.959,9.347 20.959,20.877c0,3.612 -1.529,7.151 -1.529,7.151c-0.559,1.559 -0.081,3.785 1.072,4.977l9.064,9.372c-0,-0 3.859,4.594 -0,8.369c-3.859,3.776 -7.98,-0.42 -7.98,-0.42l-9.48,-8.99c-1.203,-1.142 -3.447,-1.6 -5.012,-1.07c0,-0 -3.502,1.489 -7.094,1.489c-11.575,-0 -20.959,-9.348 -20.959,-20.878c0,-11.53 9.384,-20.877 20.959,-20.877Zm0.041,5c-8.836,-0 -16,7.163 -16,16c0,8.837 7.164,16 16,16c8.837,-0 16,-7.163 16,-16c0,-8.837 -7.163,-16 -16,-16Z"
      fill={props.color}
    />
  </svg>
);

export default SvgMagnifyingGlass;
