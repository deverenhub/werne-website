import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { cn } from '@/lib/utils'

interface ExternalLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  /** Show the external link icon (default: true) */
  showIcon?: boolean
  /** Custom icon size class */
  iconClassName?: string
  /** Additional props passed to the anchor element */
  [key: string]: unknown
}

/**
 * Accessible external link component with visual and screen reader indicators.
 *
 * Features:
 * - External link icon (subtle, small)
 * - Screen reader text "(opens in new tab)"
 * - Automatically adds target="_blank" and rel="noopener noreferrer"
 */
const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  className,
  showIcon = true,
  iconClassName,
  ...props
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('inline-flex items-center gap-1', className)}
      {...props}
    >
      {children}
      {showIcon && (
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className={cn('w-3 h-3 opacity-70', iconClassName)}
          aria-hidden="true"
        />
      )}
      <span className="sr-only">(opens in new tab)</span>
    </a>
  )
}

export { ExternalLink }
export type { ExternalLinkProps }
