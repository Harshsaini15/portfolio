import { motion } from 'framer-motion'
import { techTags } from '../data/portfolio'
import { TechSectionBackdrop } from './TechSectionBackdrop'

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-20 md:px-8"
    >
      <TechSectionBackdrop variant="python" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="glass-panel rounded-3xl p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c45c3e] dark:text-[#e8a87c]">
              About
            </p>
            <h2 className="type-section-title mt-3 font-display text-3xl font-bold text-app-fg md:text-4xl">
              Engineering student who ships end-to-end.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-app-muted">
              I combine strong CS fundamentals with hands-on ML and data
              engineering practice. From socket-level networking to
              recommendation systems, I enjoy owning a problem from dataset to
              demo.
            </p>
            <p className="mt-4 text-base leading-relaxed text-app-muted">
              Outside the lab, I lead on the field and in student bodies —
              coordinating events, guiding technical execution, and keeping teams
              aligned under deadlines.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="glass-panel rounded-3xl p-8">
              <h3 className="type-heading-sm font-display text-lg font-semibold text-app-fg">
                Stack snapshot
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {techTags.map((t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="rounded-full border border-app-border bg-app-card-fill px-3 py-1 text-xs font-medium text-app-tag-fg"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-8">
              <h3 className="type-heading-sm font-display text-lg font-semibold text-app-fg">
                Roles & activities
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-app-muted">
                Campus leadership, coordination, and sports — full detail in the
                dedicated section below.
              </p>
              <a
                href="#positions"
                className="type-cta mt-5 inline-flex items-center gap-2 text-sm font-semibold text-terracotta underline-offset-4 hover:underline"
              >
                View positions & extracurriculars
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
