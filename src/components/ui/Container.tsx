import { ReactNode } from 'react'
import clsx from 'clsx'

type ContainerProps = {
  children: ReactNode
  className?: string
}

export function Container({
                            children,
                            className
                          }: ContainerProps) {
  return (
    <div
      className={clsx(
        'mx-auto w-full max-w-md px-4',
        className
      )}
    >
      {children}
    </div>
  )
}