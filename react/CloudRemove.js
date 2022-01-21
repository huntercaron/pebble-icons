import * as React from "react";

const SvgCloudRemove = (props) => (
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
      id="cloud_remove"
      x={0.116}
      y={0.021}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M25.96,11c6.242,0 11.476,4.8 12.865,10.787c0.77,-0.494 1.675,-0.801 2.654,-0.852c3.003,-0.158 5.565,2.149 5.722,5.152c0.035,0.668 -0.052,1.315 -0.241,1.918c3.594,1.014 6.351,4.318 6.228,8.236c-0.228,7.259 -9.228,11.259 -32.228,10.759c-11.995,-0.261 -15.5,-6.5 -16,-12.315c-0,-4.782 3.319,-8.789 7.779,-9.842c0.062,-7.464 5.956,-13.843 13.221,-13.843Zm7.37,18.45l-12.74,0.1c-1.378,0 -2.494,1.11 -2.494,2.5c-0,1.381 1.127,2.5 2.494,2.5l12.74,-0.1c1.377,-0 2.494,-1.11 2.494,-2.5c-0,-1.381 -1.128,-2.5 -2.494,-2.5Z"
      fill={props.color}
    />
  </svg>
);

export default SvgCloudRemove;
