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
        'w-full rounded-[12px] border px-4 py-[14px] transition-all duration-200 button',
        {
          'border-[#860119] bg-[#860119] text-[#D2AF9C]':
            variant === 'primary',

          'bg-[#D2AF9C1A] text-[#D2AF9C] border-[#D2AF9C4D]':
            variant === 'secondary',
        },
        className
      )}
      {...props}
    />
  )
}