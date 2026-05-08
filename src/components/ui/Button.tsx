import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

export function Button({
                         variant = 'primary',
                         className,
                         ...props
                       }: ButtonProps) {
  return (
    <button
      className={clsx(
        'w-full rounded-xl border px-4 py-[15px] text-sm font-medium transition-all duration-200',
        {
          'border-[#860119] bg-[#860119] text-[#D2AF9C]':
            variant === 'primary',

          'border-[#D2AF9C] bg-transparent text-[#D2AF9C]':
            variant === 'secondary',
        },
        className
      )}
      {...props}
    />
  )
}