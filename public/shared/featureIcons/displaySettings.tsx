export default function DisplaySettingsIcon({
  className,
}: Readonly<{ className: string }>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.46 10.2a2.95 2.95 0 00-2.96 2.94v21.72a2.95 2.95 0 002.96 2.94h29.08a2.95 2.95 0 002.96-2.94V13.14a2.95 2.95 0 00-2.96-2.94H9.46zM4.1 13.14c0-2.96 2.4-5.34 5.36-5.34h29.08c2.96 0 5.36 2.38 5.36 5.34v21.72c0 2.96-2.4 5.34-5.36 5.34H9.46c-2.96 0-5.36-2.38-5.36-5.34V13.14zm23.86 4.96v-2.94h2.4v2.94h6.26v2.4h-6.26v2.94h-2.4V20.5H11.28v-2.4h16.68zm-12.9 9.4v-2.94h2.4v2.94h19.18v2.4H17.46v2.94h-2.4V29.9h-3.78v-2.4h3.78z"
        fill="#707375"
      />
    </svg>
  );
}
