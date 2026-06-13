import Link from "next/link";
export function ConversionWidgets() {
  return (
    <>
      <Link
        className="floating-credit"
        href="https://sintyz.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Designed by Sintyz"
      >
        <span aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path
              d="M13.5 4.2c2.5-1.4 4.8-1.5 6.3-1c.5 1.5.4 3.8-1 6.3l-1.9 3.3 1.1 3.3-3.2 1.5-2.1-2.1-2.2 2.2-4.2-4.2 2.2-2.2-2.1-2.1 1.5-3.2 3.3 1.1 2.3-1.9Z"
              fill="currentColor"
              opacity="0.22"
            />
            <path
              d="M13.5 4.2c2.5-1.4 4.8-1.5 6.3-1c.5 1.5.4 3.8-1 6.3l-2.8 4.8-3.5-3.5 1-6.6Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
            <path
              d="M8.5 11.3 6.4 9.2 7.9 6l3.3 1.1M12.7 15.5l2.1 2.1 3.2-1.5-1.1-3.3M8.4 15.6 5 19"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
            <circle cx="16.8" cy="6.9" r="1.3" fill="currentColor" />
          </svg>
        </span>
        <strong>Designed by Sintyz</strong>
      </Link>

      <Link
        className="back-to-top"
        href="#home"
        aria-label="Back to top"
      >
        ↑
      </Link>
    </>
  );
}
