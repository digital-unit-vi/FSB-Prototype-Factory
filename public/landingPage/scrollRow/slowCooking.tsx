export default function SlowCookingIcon({
  className,
}: Readonly<{ className: string }>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="112"
      height="112"
      fill="none"
      viewBox="0 0 112 112"
      className={className}
    >
      <g>
        <path
          stroke="#23282A"
          strokeWidth="2.5"
          d="M38.7 13.95h34.7m-17.2 11.1v5.6m0 61.7v5.6m21-14.1l4 4m1.9-50.8l-4 4m-44.9 42.3l-4.2 4.2m-.2-50.8l4 4m53.4 20h5.6m-73.6 0h5.6m68.2.3c0 20.4-16.6 37-37 37s-37-16.5-37-37 16.6-36.9 37-36.9 37 16.5 37 36.9zm-36.7-23.7c3.8 0 7.5.9 10.8 2.5 3.4 1.7 6.3 4.1 8.5 7.1 2.3 3 3.8 6.5 4.5 10.2.7 3.7.5 7.5-.5 11.1-1 3.6-2.9 6.9-5.4 9.7-2.5 2.8-5.7 4.9-9.2 6.2-3.5 1.3-7.3 1.8-11 1.5-3.7-.4-7.3-1.6-10.5-3.6l12.9-20.5-.1-24.2z"
        ></path>
      </g>
    </svg>
  );
}
