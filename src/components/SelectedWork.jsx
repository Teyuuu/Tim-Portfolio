import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { portfolioData } from '@/data/portfolioData'
import { ArrowUpRight, Images, ChevronLeft, ChevronRight } from 'lucide-react'
import { ProjectModal } from '@/components/ProjectModal'
import { ImageWithSkeleton } from '@/components/ui/image-with-skeleton'

export function SelectedWork({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  const categories = ['All', 'Real Project', 'Exploration']

  const filteredProjects =
    activeCategory === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeCategory)

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage)

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    const element = document.getElementById('work')
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: topOffset, behavior: 'smooth' })
    }
  }

  return (
    <section id="work" className="relative w-full py-20 px-4 sm:px-8 bg-white border-t border-neutral-100">
      
      {/* Watermark Background: "PORTFOLIO" (matching screenshot 2) */}
      <div className="section-watermark">
        PORTFOLIO
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Title: "/SELECTED WORK" (matching screenshot 2) */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#111111] uppercase">
            /SELECTED WORK
          </h2>
        </div>

        {/* Filter Tabs & "View All Work ↗" (matching screenshot 2) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-neutral-100">
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                  activeCategory === category
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <Button
            variant="outline"
            onClick={onOpenContact}
            className="rounded-full border-neutral-300 text-neutral-800 text-xs sm:text-sm px-4 py-1.5 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 group cursor-pointer"
          >
            <span>Inquire About Projects</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>

        {/* 2-Column Responsive Project Showcase Grid (4 items per page) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {paginatedProjects.map((project) => (
            <Card
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group overflow-hidden border border-neutral-200/80 rounded-3xl bg-neutral-50/50 hover:bg-white hover:border-neutral-300 hover:shadow-xl transition-all duration-500 flex flex-col cursor-pointer"
            >
              {/* Project Image Frame with Skeleton Preloader, Badge and Hover Arrow */}
              <ImageWithSkeleton
                src={project.image}
                alt={project.title}
                aspectRatio="aspect-[16/10]"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                containerClassName="bg-neutral-900"
              >
                {/* Badge: "REAL PROJECT" in top left corner (matching screenshot 2) */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-black/60 text-white backdrop-blur-md border border-white/10 shadow-sm">
                    {project.badge}
                  </span>
                </div>

                {/* Gallery count indicator if multiple images */}
                {project.gallery && project.gallery.length > 1 && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-black/60 text-white backdrop-blur-md border border-white/10">
                      <Images className="h-3 w-3" />
                      {project.gallery.length}
                    </span>
                  </div>
                )}

                {/* Circular hover action button in center (matching screenshot 2) */}
                <div className="absolute inset-0 z-20 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="h-14 w-14 rounded-full bg-white text-neutral-900 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-all duration-300">
                    <ArrowUpRight className="h-6 w-6 stroke-[2.5]" />
                  </div>
                </div>
              </ImageWithSkeleton>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 group-hover:text-black transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Tags Pills (matching screenshot 2) */}
                <div className="flex items-center justify-between pt-2 border-t border-neutral-100/80">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium bg-neutral-100 text-neutral-600 border border-neutral-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-semibold text-neutral-900 group-hover:underline inline-flex items-center gap-1">
                    View Project
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>

              </div>
            </Card>
          ))}
        </div>

        {/* Pagination Controls (4 projects per page) */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-neutral-100">
            <p className="text-xs text-neutral-500 font-medium">
              Showing <span className="font-semibold text-neutral-900">{startIndex + 1}</span>–
              <span className="font-semibold text-neutral-900">{Math.min(startIndex + itemsPerPage, filteredProjects.length)}</span> of{' '}
              <span className="font-semibold text-neutral-900">{filteredProjects.length}</span> projects
            </p>

            <div className="flex items-center gap-1.5">
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="rounded-full h-9 px-3.5 border-neutral-200 text-xs font-semibold disabled:opacity-30 cursor-pointer hover:bg-neutral-900 hover:text-white transition-colors"
              >
                <ChevronLeft className="h-3.5 w-3.5 mr-1" />
                Prev
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`h-9 w-9 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    currentPage === page
                      ? 'bg-neutral-900 text-white shadow-sm'
                      : 'border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  {page}
                </button>
              ))}

              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className="rounded-full h-9 px-3.5 border-neutral-200 text-xs font-semibold disabled:opacity-30 cursor-pointer hover:bg-neutral-900 hover:text-white transition-colors"
              >
                Next
                <ChevronRight className="h-3.5 w-3.5 ml-1" />
              </Button>
            </div>
          </div>
        )}

      </div>

      {/* Interactive Project Gallery Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
