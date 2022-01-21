import * as React from "react";

const SvgBatteryFull = (props) => (
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
      id="battery_full"
      x={0.21}
      y={0.042}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M36.233,17.318l2.092,0.275c0.896,0.118 1.797,0.926 2.009,1.804l-0.166,-0.688c1.382,5.717 1.384,15.006 -0,20.73l0.166,-0.688c-0.21,0.869 -1.112,1.686 -2.009,1.804l-2.092,0.275c-1.216,0.16 -1.617,0.218 -1.617,0.218c-1.347,0.184 -2.439,-0.771 -2.439,-2.128l0,-19.692c0,-1.36 1.088,-2.312 2.439,-2.128c0,0 0.4,0.058 1.617,0.218Zm-22.006,-3.99c6.279,-0.818 16.489,-0.847 22.784,-0.06l4.226,0.528c2.251,0.282 4.396,2.313 4.8,4.538c0,0 0.909,3.355 0.909,10.74c0,7.385 -0.909,10.74 -0.909,10.74c-0.376,2.226 -2.553,4.257 -4.8,4.538l-4.226,0.528c-6.301,0.788 -16.496,0.76 -22.784,-0.06l-3.414,-0.446c-2.245,-0.293 -4.399,-2.335 -4.804,-4.56c0,-0 -0.909,-3.355 -0.909,-10.74c0,-7.385 0.909,-10.74 0.909,-10.74c0.376,-2.226 2.555,-4.267 4.804,-4.56l3.414,-0.446Zm11.386,1.797c-7.622,0 -12.814,1.003 -12.814,1.003c-1.333,0.211 -2.722,1.446 -3.061,2.758c-0,-0 -1.356,3.906 -1.356,10.188c0,6.282 1.358,10.2 1.358,10.2c0.356,1.305 1.731,2.552 3.079,2.761c0,-0 4.833,0.988 12.794,0.988c7.961,-0 13.513,-1.018 13.513,-1.018c1.339,-0.202 2.745,-1.415 3.105,-2.731c-0,-0 1.433,-3.918 1.433,-10.2c0,-6.282 -1.433,-10.2 -1.433,-10.2c-0.376,-1.305 -1.771,-2.532 -3.115,-2.722l-0.016,-0.003c-0.347,-0.06 -6.1,-1.024 -13.487,-1.024Zm-8.144,2.213c1.328,-0.316 2.4,0.53 2.4,1.89l0,19.692c0,1.357 -1.074,2.206 -2.4,1.89l-4.079,-0.972c-0.878,-0.21 -1.804,-1.083 -2.063,-1.95c0,0 -1.304,-3.623 -1.304,-8.814c0,-5.191 1.302,-8.806 1.302,-8.806c0.249,-0.874 1.184,-1.747 2.065,-1.957l4.079,-0.973Zm31.733,5.172c1.481,-0 3.029,1.131 3.475,2.525c-0,-0 0.423,-0.064 0.423,4.039l-0,0.246c-0.016,3.613 -0.371,3.771 -0.415,3.777c-0.385,1.42 -2.01,2.541 -3.483,2.541l-1.435,0c-0,0 0.41,-3.282 0.41,-6.564l-0.001,-0.229c-0.018,-3.204 -0.409,-6.335 -0.409,-6.335l1.435,-0Zm-25.225,-5.746c-1.362,-0.001 -2.467,1.104 -2.467,2.461l0,19.695c0,1.36 1.107,2.462 2.467,2.462l4.093,-0c1.362,-0 2.466,-1.105 2.466,-2.462l0,-19.692c0,-1.36 -1.107,-2.462 -2.466,-2.462l-4.093,-0.002Z"
      fill={props.color}
    />
  </svg>
);

export default SvgBatteryFull;
