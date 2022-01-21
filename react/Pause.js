import * as React from "react";

const SvgPause = (props) => (
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
      id="pause"
      x={0.165}
      y={0.125}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M40.169,13.05c2.171,0.434 4.272,2.54 4.705,4.705l0.449,2.245c0.975,4.873 0.976,12.789 0,17.668l-0.449,2.245c-0.434,2.171 -2.54,4.272 -4.705,4.705l-2.245,0.449c-0.963,0.193 0,-0 0,-0c-1.766,0.256 -3.478,-1.311 -3.821,-3.484l-0.454,-2.873c-0.861,-5.455 -0.859,-14.307 0,-19.752l0.454,-2.873c0.344,-2.18 2.39,-3.652 4.564,-3.287l1.502,0.252Zm-22.157,-0c-2.166,0.433 -4.272,2.534 -4.706,4.705l-0.449,2.245c-0.976,4.879 -0.975,12.795 -0,17.668l0.449,2.245c0.433,2.165 2.534,4.271 4.706,4.705l0.502,0.085c2.728,0.457 5.289,-1.387 5.72,-4.111l0.297,-1.882c0.86,-5.445 0.861,-14.297 -0,-19.752l-0.297,-1.882c-0.431,-2.727 -2.994,-4.568 -5.72,-4.111l-0.502,0.085Z"
      fill={props.color}
    />
  </svg>
);

export default SvgPause;
