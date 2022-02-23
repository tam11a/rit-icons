import * as React from "react";

const SvgShiftOverview = ({ title, titleId, ...props }) => (
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
      d="M114.041 23.625c-.022 1.204-.165 2.426-.881 3.375-.878 1.192-1.95 2.25-2.936 3.375l-9.45 9.375c-2.3 2.25-4.654 2.91-7.1 1.8-2.71-1.23-3.81-3.45-3.674-6.375v-.559c0-4.5 0-4.5-4.421-3.75-27.552 4.699-48.75 25.088-54.312 52.335a62.323 62.323 0 0 0-1.252 12.27c0 3.806-2.516 6.522-5.963 6.537-3.52 0-6.04-2.768-6.026-6.664.128-31.223 19.744-60 48.795-71.625a75.89 75.89 0 0 1 21.911-5.284c.938-.079 1.324-.352 1.283-1.339-.068-1.62-.03-3.244 0-4.875.026-2.625 1.2-4.578 3.6-5.625 2.4-1.046 4.699-.626 6.566 1.197 4.106 4.016 8.141 8.107 12.199 12.176 1.005.99 1.417 2.291 1.661 3.656ZM173.97 96.375c.157 36.615-26.936 69.311-63.06 76.125a56.382 56.382 0 0 1-7.586 1.065c-1.073.052-1.392.45-1.347 1.477.072 1.62.049 3.248 0 4.875-.063 2.625-1.312 4.553-3.72 5.569-2.407 1.016-4.668.514-6.532-1.361-4.001-3.949-7.954-7.946-11.936-11.914-1.17-1.162-1.67-2.606-1.845-4.196-.612-2.153.577-4.361 3.052-5.67l10.125-9.994c2.4-2.37 4.74-3.019 7.245-1.875 2.711 1.245 3.75 3.495 3.626 6.394-.045 1.057.09 2.134-.03 3.18-.161 1.447.484 1.646 1.725 1.5 14.25-1.826 26.749-7.47 37.2-17.321 13.782-12.979 20.738-29.04 21.09-47.97.064-3.63 2.625-6.285 6.053-6.255 3.427.03 5.925 2.752 5.94 6.37Z"
      fill="#23A9E5"
    />
    <path
      d="m119.066 76.796-.214-.033c0-.083 0-.17-.018-.255.078.097.157.19.232.288ZM76.793 119.051l-.282-.221c.081-.005.163-.005.244 0 .011.064.026.143.038.221Z"
      fill="#5AD6FE"
    />
    <path
      d="M127.238 69.247c.791 4.182-1.875 7.283-6.132 7.302-.75 0-1.5-.702-2.272-.042-.994-.945-1.965-1.908-2.981-2.827a28.749 28.749 0 0 0-21.05-7.579c-8.137.345-15.25 3.495-20.748 9.679-7.852 8.831-9.881 18.937-6.221 30.176 1.665 5.115 4.875 9.199 8.677 12.874-.4.277-.206.611-.142.982.859 4.917-2.4 8.202-7.294 7.377a.77.77 0 0 0-.821.262A29.714 29.714 0 0 1 63.75 123c-3.54-4.125-5.932-8.865-7.845-13.875-1.312-4.751-2.085-9.559-1.916-14.528a40.942 40.942 0 0 1 8.876-24.472c6.649-8.49 15.375-13.695 25.973-15.585a41.13 41.13 0 0 1 19.012 1.08c.413.12.84.195 1.264.292.27.132.532.29.814.375 6.873 2.475 12.821 6.304 17.535 11.948-.368.285-.3.63-.225 1.012Z"
      fill="#5AD6FE"
    />
    <path
      d="M126.056 125.13c-11.966 12.296-26.67 15.581-43.151 10.759a4.79 4.79 0 0 0-.375-.086 45.006 45.006 0 0 1-12.45-6.75c-.491-.432-.983-.855-1.474-1.279l-.375-.311a.771.771 0 0 1 .822-.263c4.893.825 8.152-2.46 7.293-7.376-.064-.375-.258-.705.143-.983l.281.222c6.953 5.437 14.73 7.77 23.614 6.592 13.875-1.845 25.271-14.422 25.605-28.433a30.589 30.589 0 0 0-6.923-20.426c-.075-.097-.154-.191-.232-.289.75-.66 1.5.045 2.272.042 4.256 0 6.923-3.12 6.131-7.302-.075-.374-.142-.727.225-.997l.297.345 1.293 1.5a45.526 45.526 0 0 1 6.75 12.45c4.823 16.035 1.954 30.566-9.746 42.585Z"
      fill="#23AAE6"
    />
    <path
      d="m76.793 119.051-.282-.221c.081-.005.163-.005.244 0 .011.064.026.143.038.221ZM119.066 76.796l-.214-.033c0-.083 0-.17-.018-.255.078.097.157.19.232.288Z"
      fill="#23A9E5"
    />
    <path
      d="M70.088 129.041c-.096.088-.198.17-.304.244-1.523 1.088-3-.041-4.523-.307-.375-.334-.75-.664-1.095-1.005-7.248-6.99-15.855-9.578-25.601-7.152-9.892 2.46-16.534 8.805-19.402 18.619-2.776 9.499-.698 18.094 5.838 25.568.671.75 1.335 1.458 2.01 2.19.06.24.105.483.184.716 1.594 4.804-1.474 8.726-6.465 8.317-.499-.041-1.016-.66-1.541-.045-4.875-4.016-8.187-9.138-10.564-14.917a37.449 37.449 0 0 1-2.531-17.948 38.063 38.063 0 0 1 8.674-21.056c6.075-7.376 13.773-11.895 23.096-13.695a39.218 39.218 0 0 1 16.099.334c.64.142 1.263.491 1.946.199 1.912 5.025 4.305 9.78 7.845 13.875a29.753 29.753 0 0 0 4.5 4.455l.375.311c.476.442.967.881 1.459 1.297ZM176.006 23.681c-1.286 3.394-4.421 4.61-8.778 3.342-.282-.248-.57-.48-.833-.75-6.589-6.548-14.49-9.375-23.677-7.85-10.332 1.718-17.55 7.662-21.075 17.46-3.578 9.946-1.65 19.126 5.317 27.162l2.01 2.19c.266 1.5 1.41 3 .319 4.541a2.767 2.767 0 0 1-.24.3l-1.294-1.5-.296-.345c-4.714-5.643-10.661-9.472-17.535-11.947-.281-.105-.544-.263-.814-.375.233-1.811-.577-3.465-.795-5.213-.791-6.375-.397-12.573 1.8-18.64.176-.477.81-1.08.105-1.673.986-1.125 2.059-2.168 2.936-3.375.717-.964.859-2.187.882-3.375 1.578-1.898 3.037-3.915 4.755-5.678 8.797-9.037 19.646-12.892 32.081-11.839a36.627 36.627 0 0 1 20.816 8.667c1.616 1.365 3.259 2.677 4.5 4.406-.315 1.489.386 3-.184 4.492Z"
      fill="#D7E6F0"
    />
    <path
      d="M176.321 70.609c-6 6.952-13.579 11.179-22.601 12.814a38.692 38.692 0 0 1-16.826-.724 9.633 9.633 0 0 0-1.095-.161 45.552 45.552 0 0 0-6.75-12.45c.086-.095.167-.195.24-.3 1.091-1.53-.053-3.03-.319-4.542.191.135.375.267.581.398.375.251.75.502 1.099.776A26.723 26.723 0 0 0 166.972 63c4.5-4.732 6.66-10.459 6.972-16.875.337-6.967-1.992-13.065-6.218-18.469-.161-.21-.33-.42-.499-.63 4.358 1.268 7.5.053 8.779-3.34.57-1.5-.131-3 .195-4.5 4.875 5.572 8.059 12 9.21 19.297 1.901 12.052-1.095 22.845-9.09 32.126ZM81 162.352c-2.475 1.309-3.664 3.518-3.052 5.67-3.848 5.457-8.445 10.077-14.42 13.234-7.18 3.795-14.737 5.325-22.852 4.406-8.19-.918-15.27-4.162-21.487-9.472.525-.615 1.042 0 1.541.045 4.991.409 8.059-3.514 6.465-8.318-.079-.232-.124-.476-.184-.716l.611.413c.375.243.728.491 1.073.75a26.718 26.718 0 0 0 36.315-3.417c4.5-4.728 6.66-10.455 6.968-16.875.337-6.967-1.988-13.061-6.21-18.461a26.4 26.4 0 0 0-.507-.637c1.5.266 3 1.395 4.523.307.106-.074.208-.156.303-.244a44.98 44.98 0 0 0 12.45 6.75c.593 3.169 1.324 6.315 1.467 9.563.266 5.906-1.058 11.509-3.004 17.002Z"
      fill="#A5C3DC"
    />
    <path
      d="M65.01 164.955a1.542 1.542 0 0 1-.337-.319l.33-.375c0 .233.003.465.007.694ZM81 162.375c-1.478 1.643-3.086 3.214-3.052 5.67-.615-2.168.573-4.376 3.052-5.67Z"
      fill="#A4C2DB"
    />
    <path
      d="m119.066 76.796-.213-.034c0-.082 0-.168-.019-.255-.994-.945-1.965-1.908-2.981-2.827a28.749 28.749 0 0 0-21.05-7.579c-8.137.345-15.25 3.495-20.748 9.679-7.852 8.831-9.881 18.937-6.221 30.176 1.665 5.115 4.875 9.199 8.677 12.874.082-.006.163-.006.244 0 0 .079.026.157.038.236 6.93 5.434 14.707 7.766 23.591 6.589 13.875-1.845 25.271-14.423 25.605-28.433a30.589 30.589 0 0 0-6.923-20.426ZM76.909 99h-.375c-3.056 0-4.47-.911-4.523-2.921-.056-2.078 1.422-3.075 4.553-3.075h.375c2.647 0 4.072 1.06 4.061 3C80.99 97.942 79.575 99 76.91 99ZM99 115.466c0 3.049-.919 4.466-2.932 4.5-2.074.053-3.068-1.429-3.068-4.564v-.558c0-2.472 1.125-3.878 3.023-3.863 1.897.015 2.966 1.414 2.977 3.911v.574ZM116.213 99h-5.055c-.75 0-1.5.022-2.25 0-2.457-.083-4.478-.154-6.147 2.625-1.927 3.225-5.553 4.016-9.296 2.966a8.877 8.877 0 0 1-6.424-7.71c-.292-3.832 1.272-6.821 4.62-8.715 1.01-.57 1.392-1.125 1.362-2.272-.083-3.432-.042-6.863-.027-10.294 0-2.205 1.125-3.559 2.937-3.596 1.875-.038 3.045 1.36 3.056 3.67 0 3.492.03 6.987 0 10.478 0 .908.176 1.46 1.091 1.875a7.598 7.598 0 0 1 3.885 3.885c.409.897.941 1.125 1.875 1.103 3.491-.049 6.986-.03 10.481 0 2.318 0 3.713 1.174 3.687 3.037-.027 1.864-1.433 2.948-3.795 2.948Z"
      fill="#FEFEFE"
    />
    <path
      d="M81 96c0 1.95-1.425 3-4.091 3h-.375c-3.056 0-4.47-.911-4.523-2.921-.056-2.078 1.422-3.075 4.553-3.075h.375C79.586 93 81 94.06 81 96ZM99 114.908v.558c0 3.049-.919 4.467-2.933 4.5-2.073.053-3.067-1.428-3.067-4.563v-.559c0-2.471 1.125-3.878 3.022-3.863 1.898.015 2.978 1.429 2.978 3.927ZM120 96.041c-.03 1.853-1.41 2.94-3.772 2.955h-5.055c-.75 0-1.5.023-2.25 0-2.457-.082-4.478-.153-6.147 2.625-1.927 3.225-5.553 4.017-9.296 2.967a8.878 8.878 0 0 1-6.424-7.71c-.292-3.833 1.272-6.822 4.62-8.716 1.01-.57 1.392-1.125 1.362-2.272-.083-3.431-.042-6.862-.027-10.294 0-2.205 1.125-3.559 2.937-3.596 1.875-.037 3.045 1.361 3.056 3.671 0 3.491.03 6.986 0 10.478 0 .907.176 1.459 1.091 1.875a7.598 7.598 0 0 1 3.885 3.885c.409.896.941 1.125 1.875 1.102 3.491-.048 6.986-.03 10.481 0 2.28-.011 3.664 1.166 3.664 3.03ZM76.793 119.051l-.282-.221c.081-.005.163-.005.244 0 .011.064.026.143.038.221ZM119.066 76.796l-.214-.033c0-.083 0-.17-.018-.255.078.097.157.19.232.288Z"
      fill="#D6E5EF"
    />
    <path
      d="M65.884 129.806a26.475 26.475 0 0 0-.499-.641c-.375-.337-.75-.671-1.084-1.012-7.185-7.058-15.769-9.728-25.534-7.392-9.915 2.37-16.616 8.652-19.575 18.439-2.864 9.473-.866 18.086 5.603 25.62v-.716c.03-.938.045-1.875.097-2.816a8.889 8.889 0 0 1 8.625-8.4c1.797-.045 3.6.06 5.4.09l12 .112c1.793 0 3.593-.067 5.386 0a8.873 8.873 0 0 1 8.463 8.535c.041.945.03 1.875.034 2.839v.69c4.538-4.688 6.75-10.391 7.125-16.811.401-6.968-1.867-13.095-6.041-18.537ZM44.82 149.974a12.034 12.034 0 0 1-11.752-12.278c.097-6.48 5.58-11.775 12.127-11.707a11.986 11.986 0 0 1 8.43 3.647 11.999 11.999 0 0 1 2.397 13.118 12 12 0 0 1-11.202 7.235v-.015Z"
      fill="#FF4646"
    />
    <path
      d="M57 138.049a12 12 0 0 1-20.572 8.277A12 12 0 0 1 33 137.805c.037-6.48 5.471-11.824 12.019-11.816a12.03 12.03 0 0 1 11.98 12.06ZM65.01 164.955a1.542 1.542 0 0 1-.337-.319l.33-.375c0 .233.003.465.007.694Z"
      fill="#FE4646"
    />
    <path
      d="M65.01 164.955a26.716 26.716 0 0 1-36.315 3.42 16.18 16.18 0 0 0-1.073-.75l-.622-.424c-.675-.731-1.339-1.459-2.01-2.19v-.716c0-.941.026-1.875.071-2.82A8.89 8.89 0 0 1 33.62 153c1.796-.06 3.6.026 5.4.041V158.85c.052 3.457 2.674 6.124 6 6.124s5.94-2.655 6-6.124c.022-1.774 0-3.551 0-5.329v-.48c1.792 0 3.592-.101 5.385-.041a8.868 8.868 0 0 1 8.538 8.434c.05.945.05 1.875.06 2.838l-.33.375c.097.119.21.223.338.308Z"
      fill="#23AAE6"
    />
    <path
      d="M65.01 164.955a1.542 1.542 0 0 1-.337-.319l.33-.375c0 .233.003.465.007.694Z"
      fill="#23A9E5"
    />
    <path
      d="M167.726 27.653c-.161-.21-.33-.42-.498-.63-.282-.248-.57-.48-.833-.75-6.589-6.548-14.49-9.375-23.677-7.85-10.332 1.718-17.55 7.662-21.075 17.46-3.578 9.946-1.65 19.126 5.317 27.162v-.716c0-.938.03-1.875.071-2.82a8.887 8.887 0 0 1 8.535-8.479c1.797-.06 3.6.026 5.4.041h12c1.797 0 3.593-.1 5.385-.04a8.866 8.866 0 0 1 8.539 8.433c.049.945.049 1.875.06 2.839v.69c4.5-4.733 6.66-10.46 6.971-16.875.36-6.964-1.968-13.062-6.195-18.465ZM147 48.019a11.998 11.998 0 0 1-11.821-14.286 11.996 11.996 0 0 1 16.305-8.828 11.996 11.996 0 0 1 7.475 11.031A12.036 12.036 0 0 1 147 48.02Z"
      fill="#FF4646"
    />
    <path
      d="M158.974 35.936a12.006 12.006 0 0 1-7.354 11.162 12 12 0 1 1-4.586-23.064 12.056 12.056 0 0 1 11.94 11.902Z"
      fill="#FE4646"
    />
    <path
      d="M166.973 63a26.724 26.724 0 0 1-36.319 3.42 37.554 37.554 0 0 0-1.099-.776c-.195-.132-.375-.263-.581-.398l-2.01-2.19v-.716c0-.938.03-1.875.071-2.82a8.887 8.887 0 0 1 8.535-8.479c1.796-.06 3.6.027 5.4.042v5.805c.053 3.46 2.674 6.127 6 6.127s5.94-2.655 6-6.127c.026-1.77 0-3.552 0-5.325v-.48c1.796 0 3.593-.102 5.385-.042a8.866 8.866 0 0 1 8.539 8.434c.049.945.049 1.875.06 2.839.011.225.015.457.019.686Z"
      fill="#23AAE6"
    />
    <path
      d="M120 96.041c-.03 1.853-1.41 2.94-3.772 2.955h-5.055c-.75 0-1.5.023-2.25 0-2.457-.082-4.478-.153-6.147 2.625-1.927 3.225-5.553 4.017-9.296 2.967a8.878 8.878 0 0 1-6.424-7.71c-.292-3.833 1.272-6.822 4.62-8.716 1.01-.57 1.392-1.125 1.362-2.272-.083-3.431-.042-6.862-.027-10.294 0-2.205 1.125-3.559 2.937-3.596 1.875-.037 3.045 1.361 3.056 3.671 0 3.491.03 6.986 0 10.478 0 .907.176 1.459 1.091 1.875a7.598 7.598 0 0 1 3.885 3.885c.409.896.941 1.125 1.875 1.102 3.491-.048 6.986-.03 10.481 0 2.28-.011 3.664 1.166 3.664 3.03ZM81 96c0 1.95-1.425 3-4.091 3h-.375c-3.056 0-4.47-.911-4.523-2.921-.056-2.078 1.422-3.075 4.553-3.075h.375C79.586 93 81 94.06 81 96ZM99 114.908v.558c0 3.049-.919 4.467-2.933 4.5-2.073.053-3.067-1.428-3.067-4.563v-.559c0-2.471 1.125-3.878 3.022-3.863 1.898.015 2.978 1.429 2.978 3.927Z"
      fill="#463C4B"
    />
    <path
      d="M57 138.049a12 12 0 0 1-20.572 8.277A12 12 0 0 1 33 137.805c.037-6.48 5.471-11.824 12.019-11.816a12.03 12.03 0 0 1 11.98 12.06Z"
      fill="#F9B890"
    />
    <path
      d="M51 158.842c-.053 3.469-2.663 6.124-6 6.124-3.338 0-5.94-2.666-6-6.124-.026-1.773 0-3.547 0-5.321v-.487h12v.48c.019 1.777.034 3.555 0 5.328Z"
      fill="#D7E6F0"
    />
    <path
      d="M158.974 35.936a12.006 12.006 0 0 1-7.354 11.162 12 12 0 1 1-4.586-23.064 12.056 12.056 0 0 1 11.94 11.902Z"
      fill="#F9B890"
    />
    <path
      d="M152.974 56.884c-.053 3.472-2.663 6.127-6 6.127-3.338 0-5.94-2.666-6-6.127-.023-1.77 0-3.544 0-5.318v-.487h12v.48c.026 1.774.026 3.566 0 5.325Z"
      fill="#D7E6F0"
    />
    <path
      d="M99 95.951a3 3 0 1 1-3-2.947 3.037 3.037 0 0 1 3 2.947Z"
      fill="#59D5FC"
    />
  </svg>
);

export default SvgShiftOverview;
