export default function BluetoothIcon({
  className,
}: Readonly<{ className: string }>) {
  return (
    <svg
      width={49}
      height={49}
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.68 4.938l15.02 11.18-11.3 8.82 11.3 8.82-15.02 11.18v-17.1l-9.88 7.72-1.48-1.9 11.18-8.74-11.2-8.72 1.48-1.9 9.88 7.72V4.938h.02zm2.4 22.02l8.64 6.76-8.64 6.44v-13.2zm0-4.06V9.738l8.64 6.44-8.64 6.76v-.04z"
        fill="#919394"
      />
    </svg>
  );
}
