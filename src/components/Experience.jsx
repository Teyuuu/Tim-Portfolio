import React from 'react'
import { portfolioData } from '@/data/portfolioData'
import { GraduationCap, Briefcase, Award } from 'lucide-react'

export function Experience() {
  return (
    <section id="experience" className="relative w-full py-24 px-4 sm:px-8 bg-[#121212] text-white overflow-hidden border-t border-neutral-900">
      
      {/* Background Watermark: "EXPERIENCE" (matching screenshot 4) */}
      <div className="section-watermark section-watermark-dark text-white/5">
        EXPERIENCE
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Row: "/EXPERIENCE" and Experience Subtitle (matching screenshot 4) */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-14 pb-4 border-b border-neutral-800">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
            /EXPERIENCE
          </h2>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-neutral-400">
            <GraduationCap className="h-4 w-4 text-emerald-400" />
            <span>Computer Science Graduate • Full-Stack Experience</span>
          </div>
        </div>

        {/* Experience Rows List with Dividers (matching screenshot 4) */}
        <div className="divide-y divide-neutral-800/80">
          {portfolioData.experience.map((item) => (
            <div
              key={item.id}
              className="py-8 sm:py-9 group transition-colors duration-200 hover:bg-white/[0.02] -mx-4 px-4 rounded-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-2">
                
                {/* Company / Institution Name & Role */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                    {item.company}
                  </h3>
                  <p className="text-sm font-medium text-neutral-400 mt-0.5">
                    {item.role}
                  </p>
                </div>

                {/* Date Period (Right-aligned, matching screenshot 4) */}
                <div className="text-xs sm:text-sm font-mono text-neutral-400 font-medium shrink-0">
                  {item.period}
                </div>

              </div>

              {/* Description & Skill Highlights */}
              <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-xs sm:text-sm text-neutral-500 max-w-2xl leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-400"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
