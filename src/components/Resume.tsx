import { motion } from 'framer-motion'
import { FileDown } from 'lucide-react'
import { profile } from '../data/portfolio'
import { TechSectionBackdrop } from './TechSectionBackdrop'

export function Resume() {
  return (
    <section
      id="resume"
      className="relative scroll-mt-24 overflow-hidden px-4 py-16 md:px-8 md:py-20"
      aria-labelledby="resume-heading"
    >
      <TechSectionBackdrop variant="data-engineering" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="glass-panel overflow-hidden rounded-3xl p-8 md:flex md:items-center md:justify-between md:gap-10 md:p-10"
        >
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c45c3e] dark:text-[#e8a87c]">
              Resume
            </p>
            <h2
              id="resume-heading"
              className="type-section-title mt-3 font-display text-2xl font-bold text-app-fg md:text-3xl"
            >
              Download the full CV (PDF)
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-app-muted md:text-base">
              One-page overview of academics, projects, certifications, and
              contact details — same document used for internship applications.
            </p>
          </div>
          <div className="mt-8 flex shrink-0 flex-col gap-3 sm:flex-row md:mt-0 md:flex-col lg:flex-row">
            <a
              href={profile.resumePdfUrl}
              download={profile.resumeDownloadFileName}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(196,92,62,0.3)] transition hover:-translate-y-0.5 hover:bg-[#d66a4a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              <FileDown className="h-4 w-4 shrink-0" aria-hidden />
              Download PDF
            </a>
            <a
              href={profile.resumePdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-app-border px-6 py-3.5 text-sm font-semibold text-app-fg transition hover:border-terracotta/50 hover:bg-app-hover-overlay"
            >
              Open in new tab
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
