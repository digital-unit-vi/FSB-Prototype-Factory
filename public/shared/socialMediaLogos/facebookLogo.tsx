export default function FacebookLogo({
  className,
}: Readonly<{ className: string }>) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1787_12128)">
        <path
          d="M32 16c0-8.837-7.163-16-16-16S0 7.163 0 16c0 7.986 5.85 14.606 13.5 15.806V20.625H9.435V16H13.5v-3.525c0-4.01 2.39-6.224 6.045-6.224 1.751 0 3.581.313 3.581.313V10.5h-2.017c-1.986 0-2.607 1.232-2.607 2.498V16h4.437l-.709 4.625h-3.728v11.18C26.15 30.607 32 23.986 32 16z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="clip0_1787_12128">
          <path fill="#fff" d="M0 0H32V32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
