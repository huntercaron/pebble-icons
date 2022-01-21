import * as React from "react";

const SvgSkipForward = (props) => (
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
      id="skip_forward"
      x={0.162}
      y={0.12}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M10.13,14.31l3.399,1.094c3.675,1.183 9.097,4.051 12.102,6.401l4.931,3.856c2.41,1.885 2.411,4.939 0.004,6.82l-4.948,3.867c-3.012,2.355 -8.426,5.22 -12.11,6.404l-3.374,1.085c-2.572,0.827 -4.209,-0.579 -3.657,-3.141l0.217,-1.003c0.632,-2.933 1.081,-6.776 1.082,-10.619c-0,-3.842 -0.449,-7.684 -1.082,-10.62l-0.217,-1.003c-0.552,-2.562 1.092,-3.965 3.653,-3.141Zm35.24,-0.236c2.205,-0 4.351,1.756 4.784,3.921l1.267,6.333c0.526,2.629 0.524,6.871 -0,9.492l-1.267,6.333c-0.434,2.171 -2.575,3.921 -4.784,3.921l-0.198,-0.005c-2.099,-0.103 -3.557,-1.835 -3.274,-3.956l0.834,-6.252c0.352,-2.638 0.352,-6.93 -0,-9.574l-0.834,-6.252c-0.291,-2.181 1.263,-3.961 3.472,-3.961Z"
      fill={props.color}
    />
  </svg>
);

export default SvgSkipForward;
