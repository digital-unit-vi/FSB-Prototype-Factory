export default function WifiIcon({
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
        d="M24.02 37.7c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.78-1.8c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8h.02zm7.8-8.62c-4.32-4.16-11.32-4.16-15.64 0l1.66 1.72c3.4-3.26 8.92-3.28 12.3 0l1.66-1.72h.02zm5.46-5.66c-7.32-7.08-19.22-7.08-26.54 0l1.66 1.72c6.4-6.18 16.8-6.18 23.2 0l1.66-1.72h.02zm5.52-5.62c-10.36-10-27.24-10-37.6.02l1.66 1.72c9.44-9.14 24.82-9.14 34.26 0l1.66-1.72.02-.02z"
        fill="#707375"
      />
    </svg>
  );
}
