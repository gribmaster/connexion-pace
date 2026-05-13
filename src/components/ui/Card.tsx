import { ReactNode } from 'react'
import clsx from 'clsx'

type CardProps = {
  children: ReactNode
  className?: string
}

export function Card({
                       children,
                       className
                     }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-[10px]',
        className
      )}
    >
      {children}
    </div>
  )
}