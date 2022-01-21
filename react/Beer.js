import * as React from "react";

const SvgBeer = (props) => (
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
      id="beer"
      x={0.069}
      y={0.206}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M12.491,18.065c7.302,-0.564 17.952,-0.564 25.26,-0l0.29,0.022l0.13,0.023c1.621,0.315 3.064,1.736 3.375,3.357l0.029,0.175l0.228,1.628l3.288,0.288c2.212,0.194 4.258,2.087 4.662,4.274l0.031,0.188l0.042,0.298c0.506,3.603 0.005,9.341 -1.121,12.807l-0.093,0.285c-0.708,2.182 -3.122,3.778 -5.396,3.579l-1.953,-0.17c-0.078,0.38 -0.158,0.748 -0.243,1.102l-0.621,2.604c-0.485,2.035 -2.418,3.868 -4.481,4.355l-0.013,0.002l-0.354,0.027c-6.28,0.441 -14.58,0.441 -20.859,-0l-0.356,-0.027l-0.012,-0.002c-1.998,-0.472 -3.872,-2.209 -4.429,-4.159l-0.051,-0.196l-0.621,-2.604c-1.378,-5.778 -1.825,-15.232 -0.999,-21.117l0.444,-3.162c0.237,-1.687 1.724,-3.205 3.404,-3.532l0.137,-0.023l0.282,-0.022Zm12.629,4.551l0.021,-0c-0.912,-0 -1.822,0.726 -2.014,1.614c-0,-0 -1.268,4.798 -1.268,11.211c0,6.412 1.27,11.22 1.27,11.22c0.189,0.842 1.013,1.532 1.875,1.599l0.119,0.005l0.11,-0.004c0.866,-0.065 1.7,-0.764 1.884,-1.61c-0,0 1.267,-4.798 1.267,-11.21c0,-6.413 -1.269,-11.221 -1.269,-11.221c-0.19,-0.842 -1.014,-1.532 -1.876,-1.599l-0.119,-0.005Zm8.675,0.004l-0.104,0.012c-0.79,0.112 -1.318,0.795 -1.219,1.626c0,-0 0.7,4.423 0.498,11.183c-0.202,6.759 -1.171,11.211 -1.171,11.211c-0.152,0.814 0.342,1.487 1.126,1.597l0.106,0.012l0.02,-0.001c0.875,-0.068 1.801,-0.734 2.096,-1.537c-0,0 2.241,-5.265 2.421,-11.282c0.18,-6.018 -1.738,-11.254 -1.738,-11.254c-0.262,-0.824 -1.147,-1.501 -2.02,-1.566l-0.015,-0.001Zm-17.347,-0l0.123,-0.004c-0.916,-0 -1.918,0.701 -2.206,1.565c-0,0 -1.894,4.453 -1.691,11.26c0.204,6.807 2.378,11.296 2.378,11.296c0.328,0.8 1.264,1.456 2.14,1.523l0.02,0.001l0.106,-0.012c0.785,-0.112 1.282,-0.794 1.142,-1.615c0,-0 -1.006,-5.128 -1.187,-11.193c-0.181,-6.066 0.518,-11.194 0.518,-11.194c0.095,-0.822 -0.446,-1.503 -1.238,-1.615l-0.105,-0.012Zm25.872,4.916l-0.023,0.005c0.277,4.003 0.125,8.887 -0.385,13.155l-0.022,0.181c0.242,0.025 0.498,0.021 0.764,-0.017l1.318,-0.185c0.454,-0.064 1.02,-0.429 1.251,-0.823c-0,0 1.538,-2.208 1.806,-5.272c0.268,-3.064 -0.866,-5.516 -0.866,-5.516c-0.164,-0.42 -0.654,-0.878 -1.087,-1.018l-1.265,-0.411c-0.526,-0.171 -1.034,-0.197 -1.491,-0.099Zm-17.192,-22.296c2.018,-0 3.93,0.805 5.46,2.236c0.24,0 1.005,-0.46 2.14,-0.46c3.568,-0 6.46,3.379 6.46,7.547c-0,1.02 -1.546,1.241 -1.546,1.241c-0.872,0.299 -1.865,-0.19 -2.213,-1.028c-0,-0 -0.632,-2.14 -2.033,-2.503c-1.401,-0.363 -2.583,0.102 -2.583,0.102c-0.444,0.113 -1.031,-0.056 -1.324,-0.396c0,-0 -1.058,-1.775 -4.361,-1.775c-3.303,0 -5.416,3.596 -5.416,3.596c-0.546,0.72 -1.704,1.344 -2.615,1.356c-0,-0 -1.267,-0.095 -3.765,0.41c-1.018,0.207 -1.759,-0.622 -1.322,-1.921c0,-0 -0.288,0.481 0.158,-0.322c1.22,-2.193 3.335,-3.644 5.741,-3.644c1.14,-2.663 3.939,-4.439 7.219,-4.439Z"
      fill={props.color}
    />
  </svg>
);

export default SvgBeer;
