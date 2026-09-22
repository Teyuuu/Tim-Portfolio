import React, { useState } from 'react'
import { portfolioData } from '@/data/portfolioData'
import { Award, CheckCircle2, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ImageWithSkeleton } from '@/components/ui/image-with-skeleton'

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const totalCerts = portfolioData.certificates.length
  const totalPages = Math.ceil(totalCerts / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedCerts = portfolioData.certificates.slice(startIndex, startIndex + itemsPerPage)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    const element = document.getElementById('certs')
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: topOffset, behavior: 'smooth' })
    }
  }

  return (
    <section id="certs" className="relative w-full py-20 px-4 sm:px-8 bg-white border-t border-neutral-100 overflow-hidden">
      
      {/* Background Watermark: "CREDENTIALS" */}
      <div className="section-watermark">
        CREDENTIALS
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-semibold text-neutral-700 mb-3">
            <Award className="h-3.5 w-3.5 text-emerald-600" />
            <span>Verified Technical Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#111111] uppercase">
            /CERTIFICATIONS
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-md mx-auto mt-2">
            Technical qualifications from Philippine Statistics Authority (PSA), Cisco Networking Academy, and TESDA.
          </p>
        </div>

        {/* Certifications Grid (6 items per page) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedCerts.map((cert) => (
            <div
              key={cert.name}
              onClick={() => setSelectedCert(cert)}
              className="group p-5 rounded-3xl border border-neutral-200/80 bg-neutral-50/50 hover:bg-white hover:border-neutral-300 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Certificate Preview Frame with Skeleton Preloader */}
                <ImageWithSkeleton
                  src={cert.image}
                  alt={cert.name}
                  aspectRatio="aspect-[16/11]"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  containerClassName="rounded-2xl mb-4 border border-neutral-200/60 bg-neutral-900"
                >
                  <div className="absolute inset-0 z-20 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-full bg-white text-neutral-900 text-xs font-semibold shadow-md inline-flex items-center gap-1.5">
                      <ExternalLink className="h-3.5 w-3.5" />
                      View Certificate
                    </span>
                  </div>
                </ImageWithSkeleton>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                      {cert.issuer}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 tracking-tight group-hover:text-black">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls (6 certifications per page) */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-neutral-100">
            <p className="text-xs text-neutral-500 font-medium">
              Showing <span className="font-semibold text-neutral-900">{startIndex + 1}</span>–
              <span className="font-semibold text-neutral-900">{Math.min(startIndex + itemsPerPage, totalCerts)}</span> of{' '}
              <span className="font-semibold text-neutral-900">{totalCerts}</span> certifications
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

      {/* Certificate Viewer Modal */}
      {selectedCert && (
        <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
          <DialogContent className="sm:max-w-2xl p-6 rounded-3xl">
            <DialogHeader className="text-left mb-2">
              <span className="text-xs font-mono text-emerald-600 font-semibold">{selectedCert.issuer}</span>
              <DialogTitle className="text-xl font-bold">{selectedCert.name}</DialogTitle>
            </DialogHeader>
            <ImageWithSkeleton
              src={selectedCert.image}
              alt={selectedCert.name}
              aspectRatio="aspect-[4/3] sm:aspect-[16/12]"
              className="object-contain"
              containerClassName="rounded-2xl border border-neutral-200 bg-neutral-950 flex items-center justify-center"
            />
          </DialogContent>
        </Dialog>
      )}

    </section>
  )
}
