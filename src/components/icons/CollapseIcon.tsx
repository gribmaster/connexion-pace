type Props = {
  className?: string
}

export function CollapseIcon({ className }: Props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g clipPath="url(#clip0_113_14668)">
        <path d="M12.998 6.5L12.998 11L17.498 11" stroke="#D2AF9C" strokeWidth="0.766764" strokeLinecap="round"
              strokeLinejoin="round"/>
        <path d="M13.498 10.5L19.498 4.5" stroke="#D2AF9C" strokeWidth="0.766764" strokeLinecap="round"
              strokeLinejoin="round"/>
        <path d="M6.49805 13L10.998 13L10.998 17.5" stroke="#D2AF9C" strokeWidth="0.766764" strokeLinecap="round"
              strokeLinejoin="round"/>
        <path d="M4.5 19.5L10.5 13.5" stroke="#D2AF9C" strokeWidth="0.766764" strokeLinecap="round"
              strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_113_14668">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}
