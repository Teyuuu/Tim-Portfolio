import React from 'react'
import { Button } from '@/components/ui/button'
import { portfolioData } from '@/data/portfolioData'
import { ArrowUpRight, FileText, Code2, MapPin, GraduationCap } from 'lucide-react'
import {
  GithubIcon,
  LinkedinIcon,
} from '@/components/icons/SocialIcons'

const iconMap = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Resume: FileText,
}

export function Hero({ onOpenContact }) {
  const { firstName, lastName, role, bio, headline, avatar, location, resumeUrl } = portfolioData.personal

  return (
    <section className="relative w-full pt-8 sm:pt-14 pb-16 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        
        {/* Giant Hero Typography: "TIMOTHY VILLA" (Outlined First Name + Solid Last Name) */}
        <div className="relative text-center select-none pt-4 sm:pt-6">
          <h1 className="font-extrabold tracking-[-0.04em] leading-[0.95] flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-7 text-[3.8rem] sm:text-[6.5rem] md:text-[8.5rem] lg:text-[10rem]">
            {/* Outlined text */}
            <span className="text-stroke-dark uppercase transition-all duration-300">
              {firstName}
            </span>
            {/* Solid bold text */}
            <span className="text-[#111111] uppercase font-black">
              {lastName}
            </span>
          </h1>

          {/* Center Layered Cutout Portrait Photo (matching screenshot 1) */}
          <div className="relative -mt-3 sm:-mt-6 md:-mt-8 lg:-mt-10 z-10 flex justify-center">
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-[410px] max-w-full">
              <img
                src={avatar}
                alt={`${firstName} ${lastName}`}
                className="w-full h-auto object-contain filter contrast-[1.03] drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-transform duration-500 hover:scale-[1.02]"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Lower Hero Split Content: Bio/CTA on Left, Social Pills on Right */}
        <div className="relative z-20 mt-4 sm:-mt-6 md:-mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          
          {/* Left Column: Role, Bio & "Let's collaborate" Button */}
          <div className="space-y-4 max-w-md">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 tracking-wider uppercase mb-1">
                <GraduationCap className="h-3.5 w-3.5 text-emerald-600" />
                <span>{headline}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
                {role}
              </h2>
            </div>
            
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              {bio}
            </p>

            <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium pt-1">
              <MapPin className="h-3.5 w-3.5 text-neutral-400" />
              <span>{location}</span>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Button
                onClick={onOpenContact}
                size="lg"
                className="rounded-full bg-[#111111] text-white hover:bg-neutral-800 px-6 py-3 text-sm font-semibold shadow-md transition-all duration-300 group inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Let's collaborate</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-full border-neutral-300 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white px-5 py-3 text-sm font-medium transition-all duration-300 cursor-pointer"
              >
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4 mr-1.5" />
                  View Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Rounded Social Link Pills (matching screenshot 1) */}
          <div className="flex flex-col sm:items-end gap-2.5">
            {portfolioData.socials.map((social) => {
              const IconComponent = iconMap[social.icon] || Code2
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-48 flex items-center gap-3 px-4 py-2.5 rounded-full border border-neutral-200/90 bg-white/80 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 text-neutral-800 text-xs font-semibold shadow-sm backdrop-blur-sm transition-all duration-300 group"
                >
                  <IconComponent className="h-4 w-4 text-neutral-600 group-hover:text-white transition-colors" />
                  <span className="flex-1 tracking-tight">{social.display}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
