export default function RezeptweltLogo({
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
      <g clipPath="url(#clip0_1787_12136)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16zm-17.984-4.567a.185.185 0 00.18-.184v-.043a.186.186 0 00-.193-.185c-2.532.097-4.572 2.082-4.719 4.57a.186.186 0 00.187.195.185.185 0 00.187-.173c.157-2.278 2.034-4.09 4.358-4.18zm7.192 4.33c0-3.735-3.18-6.763-7.104-6.763C10.181 9 7 12.028 7 15.763c0 1.867.795 3.558 2.08 4.782l.025.022-.034-.012-.867 3.805 3.537-2.218c.761.255 1.56.385 2.363.384 3.924 0 7.104-3.028 7.104-6.763zm4.608-4.15c0-1.443-.773-2.613-1.728-2.613-.954 0-1.728 1.17-1.728 2.614 0 1.087.439 2.019 1.064 2.413v7.713c0 .387.297.7.664.7.367 0 .665-.313.665-.7v-7.714c.624-.394 1.063-1.326 1.063-2.412z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="clip0_1787_12136">
          <path fill="#fff" d="M0 0H32V32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
