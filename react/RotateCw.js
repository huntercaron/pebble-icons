import * as React from "react";

const SvgRotateCw = (props) => (
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
      id="rotate_cw"
      x={0.082}
      y={0.144}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M9.974,15.159c-7.628,9.291 -6.28,23.006 3.011,30.633c3.893,3.196 8.774,4.943 13.811,4.943c2.394,0 4.335,-1.941 4.335,-4.335c-0,-2.394 -1.941,-4.335 -4.335,-4.335c-3.031,0 -5.967,-1.051 -8.31,-2.974c-5.589,-4.589 -6.4,-12.841 -1.811,-18.43c4.589,-5.59 12.84,-6.401 18.43,-1.812c2.267,1.861 5.996,6.743 3.829,8.129c-0.822,0.526 -2.106,-0.028 -3.085,-0.783c-1.024,-0.79 -1.86,-0.428 -1.909,0.783l-0.038,0.912c-0.163,4.018 1.03,10.302 2.668,14.038l0.922,2.104c0.329,0.749 1.181,1.041 1.893,0.657l2.05,-1.106c3.59,-1.938 8.4,-6.16 10.738,-9.424l0.522,-0.728c0.702,-0.98 0.265,-1.796 -0.976,-1.821l-0.25,-0.006c-1.242,-0.025 -2.863,-1.243 -2.905,-2.478c0.042,-6.408 -2.746,-12.7 -7.957,-16.978c-9.291,-7.628 -23.006,-6.279 -30.633,3.011Zm16.822,9.566c-2.394,0 -4.335,1.941 -4.335,4.335c-0,2.394 1.941,4.335 4.335,4.335c2.394,0 4.335,-1.941 4.335,-4.335c-0,-2.394 -1.941,-4.335 -4.335,-4.335Z"
      fill={props.color}
    />
  </svg>
);

export default SvgRotateCw;
