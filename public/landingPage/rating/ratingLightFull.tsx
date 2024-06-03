export default function RatingLightFull({
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
      id="rating-star-full"
      {...restProps}
    >
      <g clipPath="url(#clip0_2627_852)">
        <path
          d="M13.5 5.582l-4.725-.675L6.75.688l-2.025 4.22L0 5.581l3.46 3.206-.929 4.726L6.75 11.15l4.134 2.363-.928-4.726L13.5 5.582z"
          fill="#23282A"
        />
      </g>
      <defs>
        <clipPath id="clip0_2627_852">
          <path
            fill="#fff"
            transform="translate(0 .688)"
            d="M0 0H13.5V13.5H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
