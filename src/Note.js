import * as React from "react";

const SvgNote = ({ title, titleId, ...props }) => (
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
      d="m78.865 135.208-.083.076v.018l-.087.073v-.276c.01.034.022.068.036.101l.134.008Z"
      fill="#FEC942"
    />
    <path
      d="M78.686 170.128h.16c-.447.331-.976.178-1.451.178-14.211 0-28.423-.051-42.634.036-5.51.037-9.336-2.386-11.879-7.138-.664-1.24-.558-2.611-.776-3.924-.054-.327.069-.679-.149-.98V56.983h54.861c.627 0 1.251.033 1.875.05v78.061c-.482 0-.965.047-1.45.047H43.835c-2.622 0-4.48 1.813-4.515 4.262-.04 2.539 1.838 4.378 4.515 4.41 1.814.022 3.664 0 5.495 0l29.355.055c-.002 8.758-.002 17.512 0 26.26Z"
      fill="#fff"
    />
    <path
      d="M78.87 56.94h-.04a.984.984 0 0 1-.142.098l-.022-.105v-.182a.972.972 0 0 1 .105.076l.076.087.022.026ZM78.88 143.766h-.163c0 .036-.026.069-.037.105v-.287l.087.069.026.022.08.076.007.015Z"
      fill="#FEC942"
    />
    <path
      d="M48.378 30.177c-.098.178-.22.342-.364.486v-.294c.115-.075.237-.14.364-.192ZM39.306 30.387v.276a3.184 3.184 0 0 1-.429-.494c.153.05.298.124.429.218Z"
      fill="#4D5A68"
    />
    <path
      d="M78.689 48.24c-2.68-.12-4.324-1.781-4.353-4.494-.032-4.353 0-8.706 0-13.083v-.283c.053-.967.053-1.936 0-2.902-.236-2.623.798-4.462 3.203-5.535h1.157v26.072l-.047-.036-.312-.106c.092.145.211.27.352.367Z"
      fill="#CAD4E4"
    />
    <path
      d="m78.672 56.934.021.106c-.623-.018-1.247-.051-1.875-.051H21.943V41.646c.45-.363.431-.929.584-1.407 1.45-4.581 4.414-7.665 9.068-9.068 2.539-.762 5.14-.512 7.726-.515V43.38c0 2.923 1.773 4.907 4.352 4.907 2.58 0 4.331-1.984 4.353-4.907V30.656h8.966V43.38c0 2.923 1.774 4.907 4.353 4.907 2.579 0 4.334-1.984 4.352-4.907V30.656h8.673v13.083c.022 2.713 1.665 4.374 4.352 4.494l-.021.12-.03 8.581Z"
      fill="#4D5A68"
    />
    <path
      d="m56.913 30.335.059.044v.283c-.12-.141-.28-.268-.364-.417.073.025.197.058.306.09ZM78.667 48.372l.021-.12a1.288 1.288 0 0 1-.363-.363l.313.105.047.036c.115.078.213.18.287.298l.032.05c0 .08.03.157.04.237a1.5 1.5 0 0 1-.377-.243ZM79.072 56.606v.05a.995.995 0 0 1-.21.262.047.047 0 0 1-.026.022.985.985 0 0 1-.141.098l-.022-.105v-.182a.97.97 0 0 1 .105.077c.09-.084.19-.158.294-.222Z"
      fill="#4D5A68"
    />
    <path
      d="M48.007 27.784a24.625 24.625 0 0 0 0 2.586v13.018c0 2.923-1.773 4.907-4.352 4.907-2.58 0-4.353-1.984-4.353-4.907v-13a19.78 19.78 0 0 0 0-2.318c-.265-2.749.53-4.914 3.196-6.115h2.317c2.489 1.157 3.45 3.138 3.192 5.829Z"
      fill="#CAD4E4"
    />
    <path
      d="M39.306 30.387v.276a3.184 3.184 0 0 1-.429-.494c.153.05.298.124.429.218ZM48.378 30.177c-.098.178-.22.342-.364.486v-.294c.115-.075.237-.14.364-.192Z"
      fill="#C9D3E3"
    />
    <path
      d="M65.672 27.784c-.049.86-.049 1.722 0 2.582v13.022c0 2.923-1.773 4.907-4.352 4.907-2.58 0-4.331-1.984-4.353-4.907V30.381a20.47 20.47 0 0 0 0-2.31c-.261-2.75.53-4.915 3.2-6.116h2.317c2.485 1.157 3.446 3.138 3.188 5.829Z"
      fill="#CAD4E4"
    />
    <path
      d="m56.913 30.335.059.044v.283c-.12-.141-.28-.268-.364-.417.073.025.197.058.306.09Z"
      fill="#C9D3E3"
    />
    <path
      d="M100.695 27.775a28.16 28.16 0 0 0 0 2.877v12.73c0 2.928-1.774 4.912-4.353 4.912-2.579 0-4.334-1.984-4.352-4.911V30.65c0-.957.08-1.926 0-2.876-.261-2.691.689-4.672 3.199-5.803h2.318c2.499 1.131 3.449 3.112 3.188 5.803Z"
      fill="#ACB4CB"
    />
    <path
      d="M101.242 30.781v.127a2.275 2.275 0 0 1-.555-.258h.559c0 .044 0 .088-.004.131ZM108.81 30.908v-.258h.559a2.28 2.28 0 0 1-.559.258Z"
      fill="#ACB4CB"
    />
    <path
      d="M118.07 27.922a26.47 26.47 0 0 0 0 2.731v12.731c0 2.927-1.774 4.911-4.353 4.911-2.578 0-4.33-1.984-4.352-4.91V30.652a26.47 26.47 0 0 0 0-2.731c-.276-2.728.616-4.792 3.199-5.967h2.318c2.571 1.175 3.46 3.24 3.188 5.967Z"
      fill="#ACB4CB"
    />
    <path
      d="M39.306 30.387v.276a3.184 3.184 0 0 1-.429-.494c.153.05.298.124.429.218Z"
      fill="#FEFEFE"
    />
    <path
      d="M83.034 27.476c-.084 1.051 0 2.118 0 3.177v12.866c0 2.858-1.31 4.417-4.045 4.805l.033.051c0 .08.029.156.04.236a1.496 1.496 0 0 1-.381-.25l.021-.12a1.287 1.287 0 0 1-.362-.363l.312.105.047.037V21.948h1.157c2.485 1.034 3.384 2.927 3.178 5.527Z"
      fill="#ACB4CB"
    />
    <path
      d="M78.688 48.026v.214a1.29 1.29 0 0 1-.363-.363l.313.105.05.044Z"
      fill="#C9D3E3"
    />
    <path
      d="M48.378 30.177c-.098.178-.22.342-.364.486v-.294c.115-.075.237-.14.364-.192ZM56.972 30.379v.283c-.12-.141-.28-.268-.364-.417.11.025.218.058.327.09l.037.044ZM101.242 30.781v.127a2.275 2.275 0 0 1-.555-.258h.559c0 .044 0 .088-.004.131ZM108.81 30.908v-.258h.559a2.28 2.28 0 0 1-.559.258Z"
      fill="#FEFEFE"
    />
    <path
      d="M135.413 157.032a13.208 13.208 0 0 1-13.171 13.141c-14.133.014-28.27.014-42.408 0-.33 0-.66-.022-.994-.04h-.16v-26.242c0-.037.022-.069.036-.106h.164c2.492-.127 4.138-1.813 4.138-4.283 0-2.47-1.654-4.164-4.15-4.284h-.152a.828.828 0 0 1-.036-.102v-78.06a.981.981 0 0 0 .142-.097h.04c.507 0 1.019.04 1.53.04h39.152c4.334 0 8.669.025 13.003.04-.276.391-.533.797-.831 1.175-6.913 8.843-13.899 17.631-20.732 26.532-7.672 9.993-11.93 21.36-13.152 33.881-.113.809-.287 1.618-.334 2.431-.327 5.286-.636 10.57-.929 15.854a8.79 8.79 0 0 1-1.392 4.61 46.04 46.04 0 0 0-2.66 4.632c-1.163 2.281-.463 4.429 1.778 5.778 1.614 1.317 4.654.424 5.666-1.346 1.07-1.879 2.205-3.721 3.264-5.607a5.473 5.473 0 0 1 1.839-1.97c3.99-2.592 7.965-5.211 11.926-7.856 1.473-.983 3.036-1.857 4.277-3.163.362-.236.725-.457 1.088-.726 4.918-3.598 9.115-7.947 13.021-12.593.015 9.503.03 19.006.047 28.509-.003 3.29.015 6.569-.01 9.852Z"
      fill="#fff"
    />
    <path
      d="M78.734 135.24a.186.186 0 0 1-.018-.04h.153l-.084.076c.086.074.162.158.226.251a1.519 1.519 0 0 1-.127-.087.723.723 0 0 1-.117-.145.254.254 0 0 1-.032-.055ZM79.004 143.461a1.24 1.24 0 0 1-.211.232l.08.077h-.164v-.037l.018-.054.022-.022c.076-.077.161-.143.255-.196ZM79.065 56.657a.995.995 0 0 1-.21.261v.022h-.04a.978.978 0 0 1-.142.098l-.022-.105c.033-.036.07-.07.105-.105.093-.084.194-.158.302-.222 0 0 .01.033.007.05ZM135.39 118.678c-3.907 4.647-8.103 8.996-13.022 12.594-.362.254-.725.475-1.088.725v-.616a45.732 45.732 0 0 0 5.553-4.574c2.351-2.278 4.759-4.512 6.849-7.055.402-.526.761-1.309 1.708-1.074Z"
      fill="#FEAE3E"
    />
    <path
      d="M78.678 135.099v8.788l-29.354-.054c-1.814 0-3.664.018-5.496 0-2.676-.036-4.563-1.883-4.515-4.422.036-2.466 1.893-4.258 4.515-4.262 11.136-.014 22.271-.014 33.407 0 .478-.003.96-.036 1.443-.05Z"
      fill="#401B60"
    />
    <path
      d="M79.003 143.461c-.06.086-.13.164-.21.232l-.066.055-.047.036v-.181l.087.069c.07-.081.148-.152.236-.211ZM78.767 135.302l-.087.073v-.175l.055.04.05.044c.086.073.162.158.226.25a1.153 1.153 0 0 1-.127-.087.725.725 0 0 1-.117-.145Z"
      fill="#DC854D"
    />
    <path
      d="M56.828 117.781H44.133c-2.833 0-4.777-1.756-4.8-4.299-.02-2.542 1.934-4.378 4.716-4.378h25.724c1.701 0 3.072.642 3.96 2.177.926 1.592.806 3.134-.184 4.624-.867 1.306-2.176 1.868-3.696 1.872-4.353.011-8.687.004-13.025.004ZM52.326 91.723h-8.379c-2.677-.018-4.62-1.84-4.635-4.313-.015-2.474 1.933-4.352 4.58-4.352 5.732-.017 11.462-.017 17.19 0 2.64 0 4.588 1.907 4.563 4.381-.022 2.405-1.955 4.27-4.508 4.291-2.935.011-5.873-.007-8.81-.007Z"
      fill="#401B60"
    />
    <path
      d="M161.832 62.024c-1.323 2.111-2.092 4.476-3.119 6.725l-.025.065c-.058.15-.116.294-.171.443-1.853 4.78-3.627 9.59-5.803 14.244a19.514 19.514 0 0 0-1.342 2.459c-.312.646-.664 1.273-.932 1.937-1.945 4.802-3.853 9.619-5.804 14.411-1.019 2.477-2.14 4.911-3.214 7.363-.772.555-.986 1.487-1.49 2.227-1.531 2.252-3.036 4.519-4.552 6.782-.933-.235-1.292.548-1.712 1.06-2.09 2.539-4.498 4.777-6.849 7.054a45.546 45.546 0 0 1-5.553 4.574 31.156 31.156 0 0 0-.174-4.254c-.671-4.386-3.079-7.65-6.797-9.993.399-.726.787-1.451 1.197-2.147l15.466-26.776c5.274-9.133 10.57-18.256 15.804-27.41 1.265-2.21 2.749-4.299 3.707-6.678l.297-.026 11.215 6.486v.08a1.652 1.652 0 0 1-.149 1.375Z"
      fill="#B12E65"
    />
    <path
      d="M135.39 118.678c-3.907 4.647-8.103 8.996-13.022 12.594-.362.254-.725.475-1.088.725v-.616a45.732 45.732 0 0 0 5.553-4.574c2.351-2.278 4.759-4.512 6.849-7.055.402-.526.761-1.309 1.708-1.074ZM141.417 109.669l-.043.211c-.044-.04-.018-.127.043-.211Z"
      fill="#B02E65"
    />
    <path
      d="M150.473 54.11c-.958 2.38-2.441 4.468-3.707 6.677-5.234 9.155-10.519 18.277-15.804 27.41l-15.466 26.776c-.41.726-.798 1.429-1.197 2.148l-.236.043h-.022c-2.513-1.52-5.23-2.017-8.143-1.792-2.825.214-5.197 1.451-7.508 2.902l-.544.363c1.222-12.521 5.481-23.889 13.152-33.882 6.834-8.9 13.82-17.69 20.733-26.532.298-.363.555-.784.831-1.175a25.896 25.896 0 0 0 2.901-3.715c1.731-1.592 2.626-3.76 3.918-5.654l11.092 6.43Z"
      fill="#E9336D"
    />
    <path
      d="M135.463 53.313a25.89 25.89 0 0 1-2.901 3.714c-4.335 0-8.669-.04-13.004-.04H80.407c-.512 0-1.023-.025-1.531-.04v-.021a.992.992 0 0 0 .21-.262v-.05a1.88 1.88 0 0 0-.3.221.957.957 0 0 0-.106-.076v-8.39c.114.103.242.187.381.25 0-.08-.025-.155-.04-.235l-.032-.051c2.734-.388 4.044-1.948 4.044-4.806V30.661h8.97v12.732c0 2.927 1.773 4.91 4.352 4.91 2.58 0 4.331-1.983 4.353-4.91V30.66c.172.11.359.197.555.258v-.257h7.559v.257c.196-.06.382-.147.555-.258v12.732c0 2.927 1.773 4.91 4.352 4.91 2.579 0 4.335-1.983 4.353-4.91V30.66c2.735.062 5.491-.286 8.176.588a13.42 13.42 0 0 1 9.184 12.38c.018 3.22.003 6.452.021 9.684Z"
      fill="#304653"
    />
    <path
      d="M79.047 48.61a1.499 1.499 0 0 1-.381-.25l.309-.036.032.05c.015.08.03.157.04.237ZM101.242 30.781v.127a2.275 2.275 0 0 1-.555-.258h.559c0 .044 0 .088-.004.131ZM108.81 30.908v-.258h.559a2.28 2.28 0 0 1-.559.258ZM79.065 56.657a.996.996 0 0 1-.21.261v.022H78.65v-.181a.963.963 0 0 1 .105.076c.093-.084.194-.158.302-.222 0 0 .01.026.007.044ZM166.97 81.244c-2.347 2.743-5.028 5.184-7.284 8.024a47.586 47.586 0 0 0-10.377 26.764c-.196 2.703-2.129 4.491-4.61 4.353-2.481-.138-4.197-2.176-4.048-4.853.076-1.393.261-2.782.428-4.168.062-.497.189-.986.294-1.483l.043-.211c1.089-2.452 2.195-4.885 3.214-7.363 1.966-4.791 3.874-9.608 5.803-14.41.269-.664.621-1.292.933-1.937a101.838 101.838 0 0 1 8.861-10.17 3.832 3.832 0 0 0 1.034-2.177c.362-2.329-.817-3.747-2.587-4.806l.026-.066c1.026-2.248 1.795-4.613 3.119-6.724a1.65 1.65 0 0 0 .16-1.375c2.009 1.24 3.99 2.474 5.44 4.429a12.918 12.918 0 0 1-.449 16.173ZM168.237 49.705c-2.024 3.656-4.168 7.254-6.257 10.863l-11.215-6.485c.022-.08.033-.163.054-.243a.647.647 0 0 1 .062-.17c3.214-5.572 6.398-11.161 9.674-16.686 1.044-1.762 1.741-3.754 3.282-5.2 6.29 3.75 8.14 11.17 4.4 17.921Z"
      fill="#304653"
    />
    <path
      d="M163.843 31.773c-1.542 1.45-2.238 3.438-3.283 5.201-3.264 5.535-6.46 11.125-9.674 16.685a.644.644 0 0 0-.061.17c-.022.08-.033.164-.055.243l-.297.026-11.092-6.453c2.285-4.117 4.443-8.32 7.131-12.184 4.059-5.817 11.092-7.228 17.331-3.688Z"
      fill="#4D5A68"
    />
    <path
      d="M121.275 131.982c-1.241 1.305-2.804 2.176-4.277 3.162-3.961 2.641-7.936 5.26-11.926 7.857a5.47 5.47 0 0 0-1.839 1.969c-1.055 1.887-2.176 3.729-3.264 5.608-1.012 1.77-4.052 2.662-5.666 1.346.062-.174.109-.363.17-.53a1.46 1.46 0 0 1 .124-.279c5.158-8.916 10.355-17.813 15.47-26.754 1.32-2.307 2.876-4.498 3.877-6.979l.087-.217h.022l.236-.044c3.725 2.34 6.133 5.604 6.797 9.989.154 1.413.213 2.834.174 4.255.004.207.007.428.015.617Z"
      fill="#ADB5CC"
    />
    <path
      d="m114.038 117.169-.087.218c-1.001 2.481-2.557 4.671-3.878 6.978-5.114 8.941-10.312 17.839-15.47 26.754-.05.089-.091.182-.123.279-.062.175-.109.363-.17.53-2.242-1.349-2.942-3.497-1.778-5.778a46.04 46.04 0 0 1 2.66-4.632 8.788 8.788 0 0 0 1.385-4.61c.287-5.284.597-10.568.928-15.854.047-.813.222-1.622.334-2.431l.544-.362c2.311-1.451 4.683-2.684 7.508-2.902 2.916-.207 5.633.29 8.147 1.81Z"
      fill="#CAD4E4"
    />
    <path
      d="M83.019 139.491c0 2.467-1.647 4.157-4.14 4.284l-.079-.076c.08-.069.15-.147.21-.232a1.146 1.146 0 0 0-.235.21l-.088-.069v-8.234l.088-.072a.721.721 0 0 0 .116.145c.04.031.083.06.127.087a1.296 1.296 0 0 0-.225-.25l.083-.076c2.489.119 4.143 1.813 4.143 4.283Z"
      fill="#401B60"
    />
    <path
      d="M79.003 143.461c-.06.086-.13.164-.21.232l.08.077h-.2v-.182l.087.069c.072-.076.154-.142.243-.196ZM78.767 135.302l-.087.072v-.174h.189l-.084.076c.086.074.162.158.226.251a1.517 1.517 0 0 1-.127-.087.718.718 0 0 1-.117-.138Z"
      fill="#D26836"
    />
  </svg>
);

export default SvgNote;
