import * as React from "react";

const SvgCloudDownload = (props) => (
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
      id="cloud_download"
      x={0.116}
      y={0.021}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M25.88,11c6.242,0 11.476,4.8 12.865,10.787c0.77,-0.494 1.675,-0.801 2.654,-0.852c3.003,-0.158 5.565,2.149 5.722,5.152c0.035,0.668 -0.052,1.315 -0.241,1.918c3.594,1.014 6.351,4.318 6.228,8.236c-0.228,7.259 -9.228,11.259 -32.228,10.759c-11.995,-0.261 -15.5,-6.5 -16,-12.315c0,-4.782 3.319,-8.789 7.779,-9.842c0.062,-7.464 5.956,-13.843 13.221,-13.843Zm0.852,10.884c-0.472,-1.597 -1.288,-1.612 -1.827,-0.044l-2.508,7.308l-1.512,-0c-1.118,-0 -1.595,0.797 -1.088,1.779l0.209,0.406c0.756,1.468 2.259,3.679 3.35,4.928l1.215,1.388c0.726,0.831 1.902,0.831 2.627,0l1.211,-1.388c1.083,-1.243 2.586,-3.452 3.345,-4.922l0.209,-0.404c0.504,-0.976 0.022,-1.775 -1.083,-1.775l-2,-0l-2.148,-7.276Z"
      fill={props.color}
    />
  </svg>
);

export default SvgCloudDownload;
