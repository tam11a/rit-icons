import * as React from "react";

const SvgSittingPreference = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 192 192"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M137.13 49.144H54.866a5.722 5.722 0 0 0-5.722 5.722v82.264a5.723 5.723 0 0 0 5.722 5.723h82.264a5.723 5.723 0 0 0 5.723-5.723V54.866a5.723 5.723 0 0 0-5.723-5.722ZM41.7 55.286h-8.625a1.29 1.29 0 0 0-1.29 1.29v78.851c0 .713.577 1.29 1.29 1.29H41.7a1.29 1.29 0 0 0 1.29-1.29v-78.85a1.29 1.29 0 0 0-1.29-1.29ZM157.909 55.286h-7.613a1.29 1.29 0 0 0-1.29 1.29v78.851c0 .713.578 1.29 1.29 1.29h7.613a1.29 1.29 0 0 0 1.29-1.29v-78.85a1.29 1.29 0 0 0-1.29-1.29ZM135.427 149.85h-78.85a1.29 1.29 0 0 0-1.29 1.29v8.929c0 .712.577 1.29 1.29 1.29h78.85a1.29 1.29 0 0 0 1.29-1.29v-8.929a1.29 1.29 0 0 0-1.29-1.29ZM135.427 30.949h-78.85a1.29 1.29 0 0 0-1.29 1.29v8.621c0 .712.577 1.29 1.29 1.29h78.85a1.29 1.29 0 0 0 1.29-1.29v-8.621a1.29 1.29 0 0 0-1.29-1.29Z"
      fill="#00C6CD"
    />
  </svg>
);

export default SvgSittingPreference;
