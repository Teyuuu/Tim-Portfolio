import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { portfolioData } from '@/data/portfolioData'
import { Mail, Check, Copy, ArrowUpRight, Send } from 'lucide-react'
import confetti from 'canvas-confetti'

export function ContactModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    })
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
      onClose()
    }, 2500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[480px] p-6 sm:p-8">
        <DialogHeader>
          <div className="inline-flex items-center gap-2 self-start rounded-full bg-emerald-50 border border-emerald-200/60 px-3 py-1 text-xs font-medium text-emerald-800 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Opportunities
          </div>
          <DialogTitle className="text-2xl font-bold tracking-tight text-neutral-900">
            Let's build something exceptional
          </DialogTitle>
          <DialogDescription className="text-neutral-500 text-sm">
            Send a direct message to Timothy Villa or copy email directly.
          </DialogDescription>
        </DialogHeader>

        {/* Quick Email Box */}
        <div className="flex items-center justify-between p-3.5 bg-neutral-50 rounded-2xl border border-neutral-200/80 my-2">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="h-9 w-9 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0 text-neutral-700">
              <Mail className="h-4 w-4" />
            </div>
            <div className="truncate">
              <p className="text-[11px] font-medium text-neutral-400 uppercase tracking-wider">Direct Email</p>
              <p className="text-xs font-semibold text-neutral-800 truncate">{portfolioData.personal.email}</p>
            </div>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={copyEmail}
            className="rounded-full text-xs h-8 px-3 ml-2 shrink-0 border-neutral-200"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 text-emerald-600 mr-1" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-3 w-3 mr-1" />
                Copy
              </>
            )}
          </Button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-2 animate-in fade-in zoom-in-95 duration-200">
            <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <Check className="h-6 w-6" />
            </div>
            <p className="font-semibold text-neutral-900 text-lg">Message Sent!</p>
            <p className="text-sm text-neutral-500">Thank you for reaching out. Timothy will get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">Your Name</label>
              <input
                required
                type="text"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">Your Email</label>
              <input
                required
                type="email"
                placeholder="jane@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">Project Details / Message</label>
              <textarea
                required
                rows={3}
                placeholder="Tell me about your project, timeline, or opportunity..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all resize-none"
              />
            </div>

            <div className="flex gap-2.5 pt-2">
              <Button
                type="submit"
                className="flex-1 rounded-full h-11 bg-neutral-900 text-white hover:bg-neutral-800 text-sm font-semibold"
              >
                Send Message
                <Send className="h-3.5 w-3.5 ml-1" />
              </Button>
              <Button
                type="button"
                variant="outline"
                asChild
                className="rounded-full h-11 px-4 text-xs font-medium border-neutral-200"
              >
                <a href={`mailto:${portfolioData.personal.email}?subject=Project%20Inquiry%20from%20Portfolio`}>
                  Mail App
                  <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
                </a>
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
