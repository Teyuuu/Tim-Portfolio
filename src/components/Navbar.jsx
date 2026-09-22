import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { portfolioData } from '@/data/portfolioData'
import { ArrowUpRight } from 'lucide-react'

export function Navbar({ onOpenContact }) {
  const { badge } = portfolioData.personal

  return (
    <header className="sticky top-0 z-40 w-full pt-4 pb-2 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Left: Availability Status Pill (matching screenshot 1) */}
        <div className="flex items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white/90 px-3.5 py-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] backdrop-blur-md transition-all hover:border-neutral-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-neutral-800 tracking-tight">
              {badge}
            </span>
          </div>
        </div>

        {/* Center: Desktop Navigation Links with Counts (matching screenshot 1) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-700">
          {portfolioData.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group inline-flex items-center gap-1 transition-colors hover:text-black py-1"
            >
              <span>{item.label}</span>
              {item.count && (
                <span className="text-[11px] text-neutral-400 font-mono tracking-tight group-hover:text-neutral-600 transition-colors">
                  [{item.count}]
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Right: "Let's Talk ↗" Pill Button (matching screenshot 1) */}
        <div>
          <Button
            onClick={onOpenContact}
            className="rounded-full bg-[#111111] hover:bg-neutral-800 text-white font-medium text-xs sm:text-sm px-4 sm:px-5 py-2 shadow-sm transition-all duration-300 group"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>

      </div>
    </header>
  )
}
