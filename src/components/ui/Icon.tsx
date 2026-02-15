import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { cn } from '@/lib/utils'

// Use IconProp which is the most flexible type for FontAwesome icons
// This accepts solid, brand, and other icon types
interface IconProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: IconProp | any // Allow any icon type to handle version mismatches between FA packages
  className?: string
  size?: 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  color?: 'primary' | 'secondary' | 'accent' | 'warning' | 'success' | 'error' | 'neutral'
  style?: React.CSSProperties
}

const colorClasses = {
  primary: 'text-primary',
  secondary: 'text-secondary', 
  accent: 'text-accent',
  warning: 'text-warning',
  success: 'text-success',
  error: 'text-danger',
  neutral: 'text-gray-600'
}

const sizeClasses = {
  xs: 'text-base',   // ~16px (reduced from ~18px)  
  sm: 'text-xl',     // ~20px (reduced from ~24px)  
  lg: 'text-3xl',    // ~30px (reduced from ~36px)  
  xl: 'text-4xl',    // ~36px (reduced from ~48px)  
  '2xl': 'text-5xl', // ~48px (reduced from ~60px)  
  '3xl': 'text-6xl', // ~60px (reduced from ~72px)  
  '4xl': 'text-7xl'  // ~72px (reduced from ~96px)  
}

const Icon: React.FC<IconProps> = ({
  icon,
  className,
  size = 'xl',
  color = 'neutral',
  style
}) => {
  return (
    <FontAwesomeIcon
      icon={icon as IconProp}
      className={cn(colorClasses[color], sizeClasses[size], className)}
      style={style}
    />
  )
}

export { Icon }