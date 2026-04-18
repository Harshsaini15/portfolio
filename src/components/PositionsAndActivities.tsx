import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import {
  extracurricularActivities,
  positionsOfResponsibility,
} from '../data/portfolio'
import { TechSectionBackdrop } from './TechSectionBackdrop'

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1]

const blockVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
}

const listContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
}

const listItem = {
  hidden: { opacity: 0, x: -16, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: easeOut },
  },
}

function ResumeBlock({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <motion.article
      variants={blockVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      className="resume-block glass-panel overflow-hidden rounded-2xl border border-app-border"
    >
      <header className="resume-block-header px-4 py-3 text-center md:px-6">
        <h2 className="font-display text-xs font-extrabold uppercase tracking-[0.2em] text-app-fg md:text-sm">
          {title}
        </h2>
      </header>
      <div className="border-t border-app-border bg-app-card-fill-soft/40 px-4 py-6 md:px-8 md:py-8">
        {children}
      </div>
    </motion.article>
  )
}

export function PositionsAndActivities() {
  return (
    <section
      id="positions"
      className="relative scroll-mt-24 overflow-hidden px-4 py-16 md:px-8 md:py-20"
      aria-label="Positions of responsibility and extracurricular activities"
    >
      <TechSectionBackdrop variant="stack-overview" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center md:text-left"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c45c3e] dark:text-[#e8a87c]">
            Beyond coursework
          </p>
          <h2 className="type-section-title mt-2 font-display text-3xl font-bold text-app-fg md:text-4xl">
            Leadership & campus life
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-app-muted md:mx-0">
            Roles and activities from your resume — animated in as you scroll.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <ResumeBlock title="Positions of responsibility">
            <motion.ul
              className="space-y-4 text-sm leading-relaxed md:text-base"
              variants={listContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
            >
              {positionsOfResponsibility.map((item) => (
                <motion.li
                  key={item.role}
                  variants={listItem}
                  className="resume-list-item flex gap-3 border-b border-app-border/60 pb-4 last:border-0 last:pb-0"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta"
                    aria-hidden
                  />
                  <div>
                    <span className="role-emphasis font-semibold text-app-fg">
                      {item.role}
                    </span>
                    {item.description ? (
                      <>
                        <span className="text-app-faint"> — </span>
                        <span className="text-app-muted">
                          {item.description}
                        </span>
                      </>
                    ) : null}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </ResumeBlock>

          <ResumeBlock title="Extra curricular activities">
            <motion.ul
              className="space-y-4 text-sm leading-relaxed md:text-base"
              variants={listContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
            >
              {extracurricularActivities.map((item) => (
                <motion.li
                  key={item.role}
                  variants={listItem}
                  className="resume-list-item flex gap-3 border-b border-app-border/60 pb-4 last:border-0 last:pb-0"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta"
                    aria-hidden
                  />
                  <div>
                    <span className="role-emphasis font-semibold text-app-fg">
                      {item.role}
                    </span>
                    <span className="text-app-faint"> — </span>
                    <span className="text-app-muted">{item.description}</span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </ResumeBlock>
        </div>
      </div>
    </section>
  )
}
