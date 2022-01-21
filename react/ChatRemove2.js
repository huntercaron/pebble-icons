import * as React from "react";

const SvgChatRemove2 = (props) => (
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
      id="chat_remove"
      x={0.156}
      y={0.107}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M29.12,9.09c14.004,-0 25.356,8.144 25.356,18.19c0,10.046 -11.352,18.19 -25.356,18.19c-1.668,0 -3.299,-0.115 -4.878,-0.336c-5.306,4.609 -11.381,3.98 -11.381,3.98c-2.749,0.124 -3.085,-0.962 -1.009,-2.776c0,-0 5.182,-1.748 -0.406,-5.959c-0.166,-0.125 -0.306,-0.243 -0.42,-0.356c-4.492,-3.282 -7.262,-7.78 -7.262,-12.743c-0,-10.046 11.352,-18.19 25.356,-18.19Zm6.37,15.32l-12.74,0.1c-1.378,0 -2.494,1.11 -2.494,2.5c-0,1.381 1.127,2.5 2.494,2.5l12.74,-0.1c1.377,-0 2.494,-1.11 2.494,-2.5c-0,-1.381 -1.128,-2.5 -2.494,-2.5Z"
      fill={props.color}
    />
  </svg>
);

export default SvgChatRemove2;
