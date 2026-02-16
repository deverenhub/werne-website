import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'gradient' | 'warning'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  asChild?: boolean
  loading?: boolean
  shimmer?: boolean
  magnetic?: boolean
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, loading = false, shimmer = false, magnetic = false, children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-secondary disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group active:scale-[0.98]'
    
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5',
      secondary: 'bg-secondary text-white hover:bg-secondary-dark focus-visible:ring-secondary hover:shadow-lg hover:shadow-secondary/25 hover:-translate-y-0.5',
      accent: 'bg-accent text-white hover:bg-accent-dark focus-visible:ring-accent hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary hover:shadow-lg hover:-translate-y-0.5',
      ghost: 'text-primary hover:bg-primary/10 focus-visible:ring-primary',
      gradient: 'bg-gradient-to-r from-primary via-accent to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-white hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-500 focus-visible:ring-white',
      warning: 'bg-warning text-white hover:bg-warning/90 focus-visible:ring-warning hover:shadow-lg hover:shadow-warning/25 hover:-translate-y-0.5'
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm min-h-[36px]',
      md: 'px-6 py-3 text-base min-h-[44px]',
      lg: 'px-8 py-4 text-lg min-h-[52px]',
      xl: 'px-10 py-5 text-xl min-h-[60px]'
    }
    
    const Comp = asChild ? Slot : 'button'
    
    if (asChild) {
      // When using asChild, pass only the children to Slot without additional elements
      // The styling should be applied to the child element
      return (
        <Comp
          className={cn(
            baseClasses, 
            variants[variant], 
            sizes[size], 
            shimmer && 'shimmer',
            magnetic && 'magnetic',
            className
          )}
          ref={ref}
          disabled={loading || props.disabled}
          {...props}
        >
          {children}
        </Comp>
      )
    }

    return (
      <Comp
        className={cn(
          baseClasses, 
          variants[variant], 
          sizes[size], 
          shimmer && 'shimmer',
          magnetic && 'magnetic',
          className
        )}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {shimmer && !loading && (
          <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-300" />
        )}
        
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Loading...</span>
          </div>
        ) : (
          children
        )}
        
        {/* Ripple effect background */}
        <div className="absolute inset-0 bg-white/20 opacity-0 group-active:opacity-100 transition-opacity duration-150" />
      </Comp>
    )
  }
)

Button.displayName = 'Button'

export { Button }