import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, ExternalLink, X } from 'lucide-react'
import { ImageWithSkeleton } from '@/components/ui/image-with-skeleton'

export function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image]

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto p-5 sm:p-7 rounded-3xl">
        <DialogHeader className="space-y-2 text-left">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="font-mono text-[10px] tracking-wider uppercase">
              {project.badge}
            </Badge>
            <span className="text-xs text-neutral-400 font-medium">• {project.category}</span>
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-900">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        {/* Image Showcase & Carousel with Skeleton Preloader */}
        <div className="relative rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-200 mt-2">
          <ImageWithSkeleton
            key={images[currentImageIndex]}
            src={images[currentImageIndex]}
            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
            aspectRatio="aspect-[16/10]"
            className="object-contain"
            containerClassName="bg-neutral-950 flex items-center justify-center"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute z-20 left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer"
                title="Previous Image"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={handleNext}
                className="absolute z-20 right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer"
                title="Next Image"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
              <div className="absolute z-20 bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono text-white/90">
                {currentImageIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>

        {/* Thumbnails Row */}
        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto py-2">
            {images.map((img, idx) => (
              <button
                key={img}
                onClick={() => setCurrentImageIndex(idx)}
                className={`relative shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  currentImageIndex === idx ? 'border-neutral-900 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Tech Stack Tags */}
        <div className="pt-3 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-700 border border-neutral-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="text-xs font-medium text-neutral-400">
            Developer: <span className="text-neutral-700 font-semibold">{project.authorStudio}</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
