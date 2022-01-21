import * as React from "react";

const SvgAward = (props) => (
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
    <rect id="award" x={0.04} y={0.04} width={57.6} height={57.6} fill="none" />
    <path
      d="M45.362,14.238c0.001,-5.158 -7.395,-9.278 -16.519,-9.278c-9.123,-0 -16.52,4.12 -16.52,9.201c0,0.044 0.001,0.088 0.002,0.132c-0.01,0.283 0.011,0.578 0.066,0.882c-3.774,1.158 -6.604,4.365 -7.304,8.315c-1.026,5.793 2.778,11.331 8.498,12.371c0.047,0.008 0.094,0.021 0.139,0.036c0.5,0.172 0.767,0.722 0.598,1.229c-0.17,0.506 -0.714,0.777 -1.214,0.605c-0.5,-0.172 -0.767,-0.722 -0.597,-1.229l-3.65,-1.256c-0.855,2.548 0.491,5.315 3.007,6.181c2.505,0.862 5.226,-0.486 6.093,-3.014l0.426,1.776c0.431,1.795 2.121,3.889 3.767,4.674l0.392,0.186c3.303,1.575 8.663,1.59 11.979,0.032l0.497,-0.234c1.655,-0.778 3.371,-2.861 3.829,-4.643l0.775,-3.015c0.031,0.398 0.11,0.798 0.243,1.193c0.855,2.548 3.588,3.911 6.103,3.045c2.516,-0.866 3.862,-3.633 3.007,-6.181l-3.65,1.256c0.17,0.507 -0.097,1.057 -0.597,1.229c-0.5,0.172 -1.044,-0.099 -1.214,-0.605c-0.169,-0.507 0.098,-1.057 0.598,-1.229c0.045,-0.015 0.092,-0.028 0.139,-0.036c5.72,-1.04 9.524,-6.578 8.498,-12.371c-0.71,-4.006 -3.61,-7.247 -7.464,-8.363c0.059,-0.306 0.082,-0.603 0.073,-0.889Zm-4.922,19.522c0.567,-0.876 1.411,-1.573 2.458,-1.937c0.227,-0.08 0.461,-0.141 0.697,-0.185c3.621,-0.665 6.029,-4.209 5.379,-7.916c-0.443,-2.529 -2.236,-4.582 -4.627,-5.322l-3.907,15.36Zm-24,-0.96c-0.472,-0.474 -1.047,-0.85 -1.704,-1.086c-0.22,-0.079 -0.445,-0.14 -0.674,-0.184c-3.5,-0.663 -5.828,-4.197 -5.2,-7.894c0.416,-2.445 2.058,-4.444 4.264,-5.236l3.314,14.4Zm25.92,-18.72c0,-3.446 -6.017,-6.24 -13.44,-6.24c-7.423,-0 -13.44,2.794 -13.44,6.24c-0,3.446 6.017,6.24 13.44,6.24c7.423,-0 13.44,-2.794 13.44,-6.24Zm-13.076,38.866c-6.696,0.267 -16.143,-3.33 -14.596,-8.07c0.319,-0.977 1.202,-1.807 2.522,-2.476l0.108,0.397c0.466,1.707 2.206,3.662 3.872,4.36l1.573,0.659c3.35,1.403 8.781,1.419 12.138,0.032l1.71,-0.706c1.676,-0.693 3.439,-2.635 3.935,-4.331l0.056,-0.19c1.099,0.628 1.892,1.383 2.337,2.255c2.388,4.691 -6.959,7.804 -13.655,8.07Z"
      fill={props.color}
    />
  </svg>
);

export default SvgAward;
