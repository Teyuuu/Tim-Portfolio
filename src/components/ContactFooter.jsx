import React from 'react'
import { Button } from '@/components/ui/button'
import { portfolioData } from '@/data/portfolioData'
import { ArrowUpRight, FileText, Code2 } from 'lucide-react'
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  DribbbleIcon,
} from '@/components/icons/SocialIcons'

const iconMap = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Instagram: InstagramIcon,
  Dribbble: DribbbleIcon,
  Resume: FileText,
}

export function ContactFooter({ onOpenContact }) {
  const { name, avatar, badge } = portfolioData.personal
  const { headline, paragraph, buttonText } = portfolioData.cta

  return (
    <footer id="contact" className="relative w-full pt-24 pb-12 px-4 sm:px-8 cloud-cta-bg overflow-hidden border-t border-neutral-200/60">
      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        
        {/* Availability Badge (matching screenshot 5) */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white/90 px-4 py-1.5 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-neutral-800 tracking-tight">
              {badge}
            </span>
          </div>
        </div>

        {/* Big Bold Headline: "HAVE A PROJECT IN MIND?" (matching screenshot 5) */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#111111] uppercase mb-4 leading-tight">
          {headline}
        </h2>

        {/* Descriptive Subtitle (matching screenshot 5) */}
        <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed mb-8">
          {paragraph}
        </p>

        {/* Primary CTA Button: "Contact Me ↗" (matching screenshot 5) */}
        <div className="mb-20">
          <Button
            onClick={onOpenContact}
            size="lg"
            className="rounded-full bg-[#111111] hover:bg-neutral-800 text-white font-semibold text-sm sm:text-base px-8 py-3.5 shadow-lg hover:shadow-xl transition-all duration-300 group inline-flex items-center gap-2 cursor-pointer"
          >
            <span>{buttonText}</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>

        {/* Bottom Bar: Developer Avatar Pill + Social Pills (matching screenshot 5) */}
        <div className="w-full pt-8 border-t border-neutral-300/60 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          
          {/* Avatar Name Pill (matching screenshot 5) */}
          <div className="inline-flex items-center gap-2.5 rounded-full bg-[#111111] text-white px-3.5 py-1.5 shadow-md">
            <img
              src={avatar}
              alt={name}
              className="h-6 w-6 rounded-full object-cover grayscale border border-white/20"
            />
            <span className="text-xs font-semibold tracking-tight">{name}</span>
          </div>

          {/* Social Badges List (matching screenshot 5) */}
          {portfolioData.socials.map((social) => {
            const IconComponent = iconMap[social.icon] || Code2
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300/80 bg-white/90 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 text-neutral-800 text-xs font-semibold px-4 py-2 shadow-sm transition-all duration-300"
              >
                <IconComponent className="h-3.5 w-3.5" />
                <span>{social.display}</span>
              </a>
            )
          })}

        </div>

        {/* Copyright & Tech Stack Credit */}
        <div className="mt-8 text-xs text-neutral-400 font-mono">
          © {new Date().getFullYear()} Timothy Villa. Built with React, Vite & shadcn/ui. Hosted on Netlify.
        </div>

      </div>
    </footer>
  )
}
