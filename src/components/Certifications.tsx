import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../data/portfolio'
import { TechSectionBackdrop } from './TechSectionBackdrop'

export function Certifications() {
  return (
    <section
      id="certs"
      className="relative overflow-hidden px-4 py-20 md:px-8"
    >
      <TechSectionBackdrop variant="machine-learning" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-10 flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c45c3e] dark:text-[#e8a87c]">
              Certifications
            </p>
            <h2 className="type-section-title mt-2 font-display text-3xl font-bold text-app-fg md:text-4xl">
              Always leveling up
            </h2>
          </div>
          <p className="mt-4 max-w-md text-sm text-app-subtle md:mt-0">
            Curated from your resume — Oracle, Google Skills, IBM, Coursera,
            NPTEL, and more.
          </p>
        </motion.div>

        <div className="glass-panel relative overflow-hidden rounded-3xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(196,92,62,0.12),transparent_45%)]" />
          <ul className="relative grid gap-3 p-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c, i) => (
              <motion.li
                key={c}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ delay: (i % 6) * 0.04 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex gap-3 rounded-2xl border border-app-border bg-app-card-fill-soft p-4 shadow-inner"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#c45c3e]/15 text-[#c45c3e] dark:text-[#e8a87c]">
                  <Award className="h-4 w-4" aria-hidden />
                </span>
                <span className="text-left text-sm leading-snug text-app-fg">
                  {c}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
