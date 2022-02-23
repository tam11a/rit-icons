import * as React from "react";

const SvgPartiallyArrived = ({ title, titleId, ...props }) => (
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
      d="M178.163 101.059c-3 4.95-7.272 7.897-13.189 8.104-2.561.09-2.693.165-2.693 2.703 0 15.788.038 31.572-.022 47.359-.034 7.65-4.009 12.9-10.463 16.545-1.77.994-3.813.713-5.703 1.163h-30.825c-3.27-.825-4.365-2.224-4.377-5.835-.041-12.548 0-25.095 0-37.643 0-1.676-.24-3.262-1.143-4.699-1.369-2.182-3.27-3.461-5.918-3.491-2.25-.026-4.474.041-6.709-.052-.7-.034-1.42-.068-1.807-.702.113-.099.21-.215.285-.345V9.101a.304.304 0 0 0-.064-.086c.197-.094.412-.141.63-.139 3.971-.105 7.545.788 10.463 3.713a40254.234 40254.234 0 0 0 38.928 38.936c9.852 9.848 19.654 19.748 29.58 29.516 2.895 2.854 4.5 6.11 4.549 10.125.03 3.375.315 6.837-1.522 9.893Z"
      fill="#00C6CD"
    />
    <path
      d="M95.599 9.101v115.065c-.076.13-.172.246-.285.345-.439.375-1.031.375-1.598.375-1.63.064-3.273.023-4.912.038-4.853.041-8.625 2.947-8.531 8.58.172 11.569.052 23.141.052 34.71v2.782c-.082 3.769-1.125 5.082-4.706 5.925H45.424c-.66-.375-1.391-.153-2.085-.236-6.555-.769-10.283-5.032-12.964-10.519-1.125-2.291-1.5-4.77-1.5-7.327.02-15.135.02-30.271 0-45.409v-1.804c-.049-2.028-.375-2.355-2.4-2.445a16.187 16.187 0 0 1-10.98-4.826c-2.422-2.385-3.72-5.209-3.701-8.625a1.125 1.125 0 0 0-.165-.78v-3.937c.289-.33.15-.732.157-1.1a11.312 11.312 0 0 1 3.477-8.04C38.21 58.94 61.148 35.994 84.075 13.04c3.083-3.09 6.728-4.275 10.946-4.163a.627.627 0 0 1 .492.132.304.304 0 0 1 .086.093Z"
      fill="#CCF4F5"
    />
  </svg>
);

export default SvgPartiallyArrived;
