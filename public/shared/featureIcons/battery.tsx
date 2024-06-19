import React from "react";

export default function BatteryIcon({
  className,
}: Readonly<{ className: string }>) {
  return (
    <svg
      width={49}
      height={48}
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M41 21v-4c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h32c1.1 0 2-.9 2-2v-5h3v-7h-3zm-2.4 11.6H32V17.4h6.6v15.2z"
        fill="#919394"
      />
    </svg>
  ) as React.ReactSVGElement;
}
