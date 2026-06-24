import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hover?: boolean
  glow?: boolean
  glass?: boolean
  animate?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = true, glow = false, glass = false, animate = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl bg-white border border-gray-200 shadow-sm transition-[box-shadow,transform,border-color] duration-200 relative overflow-hidden',
          hover && 'hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5',
          glow && 'hover:shadow-md',
          glass && 'glass backdrop-blur-md',
          animate && 'animate-fade-in',
          className
        )}
        {...props}
      >
        <div className="relative z-10">
          {children}
        </div>
      </div>
    )
  }
)

Card.displayName = 'Card'

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pb-4', className)} {...props} />
  )
)

CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-2xl font-semibold text-secondary', className)} {...props} />
  )
)

CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-gray-600 mt-2', className)} {...props} />
  )
)

CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
)

CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0 flex items-center', className)} {...props} />
  )
)

CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }