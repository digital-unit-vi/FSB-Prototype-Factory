export default function RatingLightHalf({
  className,
  ...restProps
}: Readonly<{ className?: string; "data-item"?: string }>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      className={className}
      {...restProps}
    >
      <g clipPath="url(#clip0_2627_733)">
        <path
          d="M24 9.201l-8.4-1.2-3.6-7.5-3.6 7.5-8.4 1.2 6.15 5.7-1.65 8.4 7.5-4.2 7.35 4.2-1.65-8.4 6.3-5.7z"
          fill="#B2B4B5"
        />
        <mask
          id="a"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={12}
          height={24}
        >
          <path fill="#C4C4C4" d="M0 0.500977H12V23.300977H0z" />
        </mask>
        <g mask="url(#a)">
          <path
            d="M24 9.201l-8.4-1.2-3.6-7.5-3.6 7.5-8.4 1.2 6.15 5.7-1.65 8.4 7.5-4.2 7.35 4.2-1.65-8.4 6.3-5.7z"
            fill="#fff"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2627_733">
          <path fill="#fff" transform="translate(0 .501)" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
