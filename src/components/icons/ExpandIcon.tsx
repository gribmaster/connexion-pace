type Props = {
  className?: string
}

export function ExpandIcon({ className }: Props) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g clipPath="url(#clip0_113_14180)">
        <path d="M13.002 6L13.002 3L10.002 3" stroke="#D2AF9C" strokeWidth="0.417236" strokeLinecap="round"
              strokeLinejoin="round"/>
        <path d="M9.00195 7L13.002 3" stroke="#D2AF9C" strokeWidth="0.417236" strokeLinecap="round"
              strokeLinejoin="round"/>
        <path d="M6 13L3 13L3 10" stroke="#D2AF9C" strokeWidth="0.417236" strokeLinecap="round"
              strokeLinejoin="round"/>
        <path d="M3.00391 13L7.00391 9" stroke="#D2AF9C" strokeWidth="0.417236" strokeLinecap="round"
              strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_113_14180">
          <rect width="16" height="16" fill="white"/>
        </clipPath>
      </defs>
    </svg>


  )
}
