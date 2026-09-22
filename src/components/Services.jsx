import React, { useState } from 'react'
import { portfolioData } from '@/data/portfolioData'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

export function Services({ onOpenContact }) {
  const [hoveredService, setHoveredService] = useState(null)

  return (
    <section id="service" className="relative w-full py-20 px-4 sm:px-8 bg-neutral-50/70 border-t border-neutral-100 overflow-hidden">
      
      {/* Background Watermark: "SERVICE" (matching screenshot 3) */}
      <div className="section-watermark">
        SERVICE
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header: "/SERVICE" (matching screenshot 3) */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#111111] uppercase">
            /SERVICE
          </h2>
        </div>

        {/* Clean Service List with Dividers (matching screenshot 3) */}
        <div className="border-t border-neutral-200/90 divide-y divide-neutral-200/90">
          {portfolioData.services.map((service, index) => {
            const isHovered = hoveredService === service.id

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={onOpenContact}
                className="group py-8 sm:py-10 px-4 -mx-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-md cursor-pointer flex flex-col gap-4"
              >
                <div className="flex items-center justify-between gap-4">
                  
                  {/* Service Title with Number */}
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="text-xs sm:text-sm font-mono text-neutral-400 font-semibold group-hover:text-neutral-900 transition-colors">
                      {service.number}
                    </span>
                    <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 group-hover:translate-x-2 transition-transform duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Arrow Indicator: "↗" (matching screenshot 3) */}
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-neutral-900 group-hover:border-neutral-900 transition-all duration-300 shrink-0">
                    <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                </div>

                {/* Subtitle & Deliverables chips (expand on hover/mobile) */}
                <div className="pl-8 sm:pl-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs sm:text-sm text-neutral-500 max-w-xl leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5">
                    {service.deliverables.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-neutral-100 text-neutral-600 border border-neutral-200/50 group-hover:bg-neutral-50"
                      >
                        <CheckCircle2 className="h-2.5 w-2.5 text-emerald-600" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
