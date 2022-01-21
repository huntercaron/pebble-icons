import * as React from "react";

const SvgMarkerAdd = (props) => (
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
      id="marker_add"
      x={0.16}
      y={0.12}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M29.08,7.96c8.837,0 16,7.163 16,16c0,13 -12,26 -16,26c-4,0 -16,-13 -16,-26c0,-8.837 7.163,-16 16,-16Zm0,4c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12Zm8.46,6.611c0.983,0.983 0.978,2.557 0.005,3.531l-9.202,9.201c-0.482,0.483 -1.119,0.726 -1.758,0.727c-0.646,0.004 -1.282,-0.241 -1.768,-0.727l-4.252,-4.251c-0.966,-0.966 -0.972,-2.555 0.005,-3.531c0.983,-0.983 2.557,-0.979 3.531,-0.005l1.775,1.776c0.389,0.388 1.023,0.384 1.416,-0.009l6.717,-6.716c0.966,-0.967 2.555,-0.972 3.531,0.004Z"
      fill={props.color}
    />
  </svg>
);

export default SvgMarkerAdd;
