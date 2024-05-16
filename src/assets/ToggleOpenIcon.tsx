const ToggleOpenIcon = () => (
  <svg
    width="54"
    height="31"
    viewBox="0 0 54 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_i_1_1142)">
      <rect y="3" width="52" height="23.4" rx="11.7" fill="#76EE59" />
    </g>
    <g filter="url(#filter1_d_1_1142)">
      <circle cx="40.3" cy="14.7" r="9.1" fill="url(#paint0_linear_1_1142)" />
    </g>
    <defs>
      <filter
        id="filter0_i_1_1142"
        x="0"
        y="3"
        width="52"
        height="29.4"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="3"
          operator="erode"
          in="SourceAlpha"
          result="effect1_innerShadow_1_1142"
        />
        <feOffset dy="6" />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1_1142"
        />
      </filter>
      <filter
        id="filter1_d_1_1142"
        x="23.2"
        y="0.599976"
        width="30.2"
        height="30.2"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-2" dy="1" />
        <feGaussianBlur stdDeviation="3" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_1142"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_1142"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_1_1142"
        x1="40.3"
        y1="5.59998"
        x2="40.3"
        y2="23.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="#E8EAEA" />
      </linearGradient>
    </defs>
  </svg>
);

export default ToggleOpenIcon;
