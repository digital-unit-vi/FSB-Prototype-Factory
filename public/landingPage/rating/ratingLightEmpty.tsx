export default function RatingLightEmpty({
  className,
  ...restProps
}: Readonly<{ className?: string; "data-item"?: string }>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={15}
      viewBox="0 0 14 15"
      fill="none"
      className={className}
      id="rating-star-empty"
      {...restProps}
    >
      <g clipPath="url(#clip0_2627_860)">
        <path
          d="M14 5.582l-4.725-.675L7.25.688l-2.025 4.22L.5 5.581l3.46 3.206-.929 4.726L7.25 11.15l4.134 2.363-.928-4.726L14 5.582z"
          fill="#B2B4B5"
        />
      </g>
      <defs>
        <clipPath id="clip0_2627_860">
          <path
            fill="#fff"
            transform="translate(.5 .688)"
            d="M0 0H13.5V13.5H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
