import { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

const Button = (
  props: {
    variant: 'primary' | 'secondary' | 'text'

    iconAfter?: ReactNode
  } & ButtonHTMLAttributes<HTMLButtonElement>,
) => {
  const { variant, iconAfter, className, children, ...rest } = props

  return (
    <button
      className={twMerge(
        ' h-11 px-6 rounded-xl  border   group/button border-blue-700 uppercase inline-flex items-center  relative transition duration-500 gap-2',
        variant === 'primary' && 'bg-blue-700 text-white ',
        variant === 'secondary' && 'hover:bg-blue-700 hover:text-white ',
        variant === 'text' &&
          "h-auto px-0 border-transparent after:transition-all after:duration-500 after:content-[''] after:h-px after:w-0 after:absolute after:top-full after:bg-blue-700 hover:after:w-full",
        className,
      )}
      {...rest}
    >
      <span>{children}</span>

      {iconAfter && <span>{iconAfter}</span>}
    </button>
  )
}

export default Button
