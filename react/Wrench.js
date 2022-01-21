import * as React from "react";

const SvgWrench = (props) => (
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
      id="wrench"
      x={0.056}
      y={0.135}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M37.874,5.852c1.461,-0.145 1.813,0.621 0.772,1.662l-4.355,4.355c-1.038,1.038 -1.572,3.038 -1.187,4.462l1.617,5.976l2.867,10.698c0.38,1.42 -0.498,2.448 -1.962,2.292c0,0 -2.526,-0.931 -5.128,1.671l-13.222,13.222c-2.778,2.778 -7.303,2.764 -10.102,-0.036c-2.794,-2.793 -2.815,-7.322 -0.035,-10.102l7.262,-7.262c12.94,-10.483 4.03,-14.945 12.241,-23.053c3.78,-3.734 11.232,-3.885 11.232,-3.885Zm15.176,15.172c-0,0 -0.127,7.465 -3.891,11.23c-2.268,2.268 -5.527,3.237 -5.527,3.237c-1.376,0.529 -2.802,-0.206 -3.183,-1.626l-1.805,-6.739c-0.383,-1.426 0.463,-2.27 1.883,-1.886l2.893,0.783c0.951,0.257 2.281,-0.093 2.983,-0.795l4.979,-4.979c1.04,-1.04 1.809,-0.687 1.668,0.775Zm-24.881,-3.827c-0.475,0.127 -0.758,0.613 -0.629,1.092l3.228,12.047c0.118,0.442 0.545,0.718 0.989,0.652l0.102,-0.021c0.475,-0.128 0.758,-0.614 0.63,-1.092l-3.228,-12.048c-0.128,-0.475 -0.613,-0.759 -1.092,-0.63Zm14.262,-7.821l3.745,0.959c0.951,0.243 1.919,1.21 2.163,2.162l0.959,3.746c0.243,0.951 -0.122,2.284 -0.813,2.976l-2.841,2.84c-0.692,0.693 -2.023,1.057 -2.976,0.814l-3.745,-0.959c-0.951,-0.244 -1.919,-1.211 -2.163,-2.163l-0.959,-3.746c-0.243,-0.951 0.121,-2.284 0.813,-2.976l2.841,-2.84c0.692,-0.693 2.023,-1.057 2.976,-0.813Zm0.118,3.864c-1.592,-0 -2.884,1.291 -2.884,2.884c0,1.593 1.292,2.884 2.884,2.884c1.593,0 2.885,-1.291 2.885,-2.884c-0,-1.593 -1.292,-2.884 -2.885,-2.884Z"
      fill={props.color}
    />
  </svg>
);

export default SvgWrench;
