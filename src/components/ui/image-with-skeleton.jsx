import React, { useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { Image as ImageIcon } from 'lucide-react'

export function ImageWithSkeleton({
  src,
  alt = '',
  className = '',
  containerClassName = '',
  aspectRatio = 'aspect-[16/10]',
  children,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  return (
    <div className={cn("relative overflow-hidden bg-neutral-100", aspectRatio, containerClassName)}>
      {/* Skeleton Preloader */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-neutral-100">
          <Skeleton className="absolute inset-0 w-full h-full rounded-none" />
          <div className="relative z-20 flex flex-col items-center gap-2 text-neutral-400">
            <ImageIcon className="h-6 w-6 animate-pulse opacity-40" />
            <span className="text-[10px] font-mono tracking-wider uppercase opacity-50">Loading preview...</span>
          </div>
        </div>
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true)
          setIsLoaded(true)
        }}
        className={cn(
          "w-full h-full object-cover transition-all duration-700 ease-out",
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95",
          className
        )}
        {...props}
      />

      {/* Fallback if Image Fails to Load */}
      {hasError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-neutral-100 text-neutral-400 p-4 text-center">
          <ImageIcon className="h-8 w-8 mb-1 opacity-50" />
          <span className="text-xs font-medium">Image unavailable</span>
        </div>
      )}

      {/* Overlays / Badges / Buttons (Children) */}
      {children}
    </div>
  )
}
