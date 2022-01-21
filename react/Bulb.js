import * as React from "react";

const SvgBulb = (props) => (
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
    <rect id="bulb" x={0.2} y={0.106} width={57.6} height={57.6} fill="none" />
    <path
      d="M29.09,5.02c8.063,-0 14.6,6.536 14.6,14.6c-0,5.097 -5.153,8.588 -5.153,17.176c-0,0.516 -0.042,0.998 -0.121,1.446c0.04,-0.052 0.081,-0.105 0.121,-0.158c-0,1.531 0.413,3.911 -1.957,6.651c-0.716,3.361 -4.055,11.813 -13.501,6.66c-1.328,-0.724 -1.241,-2.576 1.288,-2.147c-0,0 6.87,2.147 8.158,-2.147c-1.288,1.718 -6.692,1.701 -10.305,0c-1.601,-0.753 -2.065,-4.682 0.429,-3.435c0.666,0.333 7.729,3.864 10.629,-0.458c-1.262,0.321 -2.684,0.458 -4.188,0.458c-5.217,-0 -9.447,-1.653 -9.447,-6.87c0,-8.588 -5.152,-12.079 -5.152,-17.176c-0,-8.064 6.536,-14.6 14.599,-14.6Zm-1.569,4.115c-4.748,0.365 -8.569,4.594 -8.766,8.766c-0.104,2.214 2.192,8.085 4.383,8.766c2.192,0.682 3.376,-2.753 2.192,-9.131c-1.184,-6.378 4.65,-8.59 2.191,-8.401Z"
      fill={props.color}
    />
  </svg>
);

export default SvgBulb;
